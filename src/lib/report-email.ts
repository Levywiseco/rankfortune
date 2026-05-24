import type { AuditReport } from "@/lib/audit/types";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function lines(items: string[]) {
  return items.map((item) => `- ${item}`).join("\n");
}

export function buildMarkdownReport(report: AuditReport) {
  const scoreLines = report.scores.map(
    (score) =>
      `- ${score.label}: ${Math.round(
        (score.score / Math.max(score.maxScore, 1)) * 100,
      )}/100 - ${score.summary}`,
  );
  const gapLines = report.biggestGaps.map(
    (gap) => `- [${gap.priority}, ${gap.effort}] ${gap.title}: ${gap.detail}`,
  );
  const planLines = report.sevenDayPlan.map(
    (item, index) => `${index + 1}. ${item.title} - ${item.detail}`,
  );

  return `# RankFortune AI Visibility Report

Website: ${report.snapshot.finalUrl}
Overall score: ${report.overallScore}/100

## AI Summary

${report.aiReport.summary}

${report.aiReport.positioning}

## Score Layers

${scoreLines.join("\n")}

## Biggest Gaps

${gapLines.join("\n")}

## 7-Day Execution Plan

${planLines.join("\n")}

## Copy-Ready Suggestions

Title:
${report.copySuggestions.title}

Description:
${report.copySuggestions.description}

FAQ ideas:
${lines(report.copySuggestions.faq)}

Schema to add:
${lines(report.copySuggestions.schemaTypes)}

## AI Recommendations

${lines(report.aiReport.recommendations)}
`;
}

export function buildReportEmailHtml(report: AuditReport, markdown: string) {
  const gaps = report.biggestGaps
    .map(
      (gap) => `
        <li style="margin-bottom: 12px;">
          <strong>${escapeHtml(gap.title)}</strong><br />
          <span style="color: #64748b;">${escapeHtml(gap.priority)} priority, ${escapeHtml(
            gap.effort,
          )} effort - ${escapeHtml(gap.detail)}</span>
        </li>
      `,
    )
    .join("");
  const recommendations = report.aiReport.recommendations
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");

  return `
    <div style="font-family: Arial, sans-serif; max-width: 680px; margin: 0 auto; padding: 32px 20px; color: #0f172a;">
      <p style="color: #0891b2; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase;">RankFortune Full Report</p>
      <h1 style="font-size: 28px; margin: 8px 0 12px;">AI visibility report for ${escapeHtml(
        report.snapshot.host,
      )}</h1>
      <p style="font-size: 16px; line-height: 1.6; color: #475569;">Your full report is ready. The score below combines technical discoverability, entity clarity, and answer-engine readiness.</p>

      <div style="margin: 24px 0; padding: 20px; border: 1px solid #bae6fd; border-radius: 8px; background: #ecfeff;">
        <div style="font-size: 48px; font-weight: 700; color: #0e7490;">${report.overallScore}<span style="font-size: 18px; color: #64748b;">/100</span></div>
        <p style="margin: 12px 0 0; color: #334155;">${escapeHtml(report.aiReport.summary)}</p>
      </div>

      <h2 style="font-size: 18px; margin-top: 28px;">Positioning</h2>
      <p style="line-height: 1.6; color: #475569;">${escapeHtml(report.aiReport.positioning)}</p>

      <h2 style="font-size: 18px; margin-top: 28px;">Biggest gaps</h2>
      <ul style="padding-left: 20px; line-height: 1.6;">${gaps}</ul>

      <h2 style="font-size: 18px; margin-top: 28px;">AI recommendations</h2>
      <ul style="padding-left: 20px; line-height: 1.6; color: #475569;">${recommendations}</ul>

      <h2 style="font-size: 18px; margin-top: 28px;">Markdown copy</h2>
      <pre style="white-space: pre-wrap; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 13px; line-height: 1.5;">${escapeHtml(
        markdown,
      )}</pre>

      <p style="margin-top: 28px; font-size: 13px; color: #94a3b8;">This report was generated automatically after your RankFortune purchase.</p>
    </div>
  `;
}

export async function sendReportEmail({
  to,
  report,
}: {
  to: string;
  report: AuditReport;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[RankFortune] RESEND_API_KEY is not configured; report email was not sent");
    return { sent: false, reason: "missing_resend_api_key" };
  }

  const markdown = buildMarkdownReport(report);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM || "RankFortune <onboarding@resend.dev>",
      to,
      subject: `RankFortune full report for ${report.snapshot.host}`,
      html: buildReportEmailHtml(report, markdown),
      text: markdown,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend failed ${response.status}: ${details}`);
  }

  return { sent: true };
}
