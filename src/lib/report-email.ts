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

function percent(score: number, maxScore: number) {
  return Math.round((score / Math.max(maxScore, 1)) * 100);
}

function priorityColor(priority: string) {
  if (priority === "High") {
    return { bg: "#fff1f2", border: "#fecdd3", text: "#be123c" };
  }
  if (priority === "Medium") {
    return { bg: "#fffbeb", border: "#fde68a", text: "#b45309" };
  }
  return { bg: "#ecfdf5", border: "#a7f3d0", text: "#047857" };
}

function badge(label: string, colors = { bg: "#ecfeff", border: "#a5f3fc", text: "#0e7490" }) {
  return `<span style="display:inline-block;border:1px solid ${colors.border};background:${colors.bg};color:${colors.text};border-radius:999px;padding:4px 10px;font-size:12px;font-weight:700;line-height:1;">${escapeHtml(label)}</span>`;
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
  const generatedAt = new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(new Date());
  const scoreCards = report.scores
    .map((score) => {
      const value = percent(score.score, score.maxScore);
      return `
        <td style="width:33.33%;padding:6px;vertical-align:top;">
          <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;background:#ffffff;height:100%;">
            <div style="font-size:12px;line-height:1.4;color:#64748b;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">${escapeHtml(
              score.label,
            )}</div>
            <div style="margin-top:12px;font-size:30px;line-height:1;font-weight:800;color:#0f172a;">${value}<span style="font-size:14px;color:#94a3b8;">/100</span></div>
            <p style="margin:12px 0 0;font-size:13px;line-height:1.6;color:#475569;">${escapeHtml(
              score.summary,
            )}</p>
          </div>
        </td>
      `;
    })
    .join("");
  const gaps = report.biggestGaps
    .map(
      (gap, index) => {
        const colors = priorityColor(gap.priority);
        return `
          <tr>
            <td style="padding:14px 0;border-bottom:1px solid #e2e8f0;vertical-align:top;width:44px;">
              <div style="width:28px;height:28px;border-radius:8px;background:#0f172a;color:#ffffff;text-align:center;line-height:28px;font-weight:800;font-size:13px;">${index + 1}</div>
            </td>
            <td style="padding:14px 0;border-bottom:1px solid #e2e8f0;vertical-align:top;">
              ${badge(gap.priority, colors)}
              ${badge(`${gap.effort} effort`, { bg: "#f8fafc", border: "#e2e8f0", text: "#475569" })}
              <h3 style="margin:10px 0 6px;font-size:16px;line-height:1.35;color:#0f172a;">${escapeHtml(
                gap.title,
              )}</h3>
              <p style="margin:0;font-size:14px;line-height:1.65;color:#475569;">${escapeHtml(
                gap.detail,
              )}</p>
            </td>
          </tr>
        `;
      },
    )
    .join("");
  const planRows = report.sevenDayPlan
    .map(
      (item, index) => `
        <tr>
          <td style="padding:12px;border-bottom:1px solid #e2e8f0;color:#0e7490;font-weight:800;white-space:nowrap;">Day ${index + 1}</td>
          <td style="padding:12px;border-bottom:1px solid #e2e8f0;">
            <div style="font-weight:700;color:#0f172a;">${escapeHtml(item.title)}</div>
            <div style="margin-top:4px;font-size:13px;line-height:1.55;color:#64748b;">${escapeHtml(item.detail)}</div>
          </td>
        </tr>
      `,
    )
    .join("");
  const recommendations = report.aiReport.recommendations
    .map(
      (item) => `
        <li style="margin-bottom:10px;color:#334155;line-height:1.6;">${escapeHtml(item)}</li>
      `,
    )
    .join("");
  const faqItems = report.copySuggestions.faq
    .map((item) => `<li style="margin-bottom:6px;">${escapeHtml(item)}</li>`)
    .join("");
  const schemaItems = report.copySuggestions.schemaTypes
    .map((item) => badge(item, { bg: "#f8fafc", border: "#cbd5e1", text: "#334155" }))
    .join("");

  return `
    <div style="margin:0;padding:0;background:#f1f5f9;">
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:760px;margin:0 auto;padding:28px 16px;color:#0f172a;">
        <div style="background:#09111f;border-radius:8px 8px 0 0;padding:28px 28px 34px;color:#ffffff;">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;">
            <div>
              <div style="display:inline-block;border:1px solid rgba(103,232,249,.35);background:rgba(103,232,249,.1);border-radius:8px;padding:8px 10px;color:#a5f3fc;font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;">RankFortune</div>
              <h1 style="margin:18px 0 0;font-size:30px;line-height:1.18;color:#ffffff;">AI visibility report</h1>
              <p style="margin:10px 0 0;font-size:15px;line-height:1.6;color:#cbd5e1;">${escapeHtml(
                report.snapshot.host,
              )} - generated ${escapeHtml(generatedAt)} UTC</p>
            </div>
            <div style="text-align:right;">
              <div style="font-size:56px;line-height:1;font-weight:900;color:#67e8f9;">${report.overallScore}<span style="font-size:18px;color:#94a3b8;">/100</span></div>
              <div style="margin-top:8px;font-size:12px;color:#cbd5e1;text-transform:uppercase;letter-spacing:.12em;">Visibility score</div>
            </div>
          </div>
        </div>

        <div style="background:#ffffff;border:1px solid #e2e8f0;border-top:0;border-radius:0 0 8px 8px;padding:28px;">
          <div style="border:1px solid #bae6fd;background:#ecfeff;border-radius:8px;padding:18px;">
            <div style="font-size:12px;font-weight:800;color:#0e7490;text-transform:uppercase;letter-spacing:.12em;">Executive read</div>
            <p style="margin:10px 0 0;font-size:16px;line-height:1.65;color:#0f172a;">${escapeHtml(
              report.aiReport.summary,
            )}</p>
            <p style="margin:10px 0 0;font-size:14px;line-height:1.65;color:#475569;">${escapeHtml(
              report.aiReport.positioning,
            )}</p>
          </div>

          <h2 style="margin:28px 0 12px;font-size:18px;color:#0f172a;">Score layers</h2>
          <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:separate;border-spacing:0;margin:0 -6px;">
            <tr>${scoreCards}</tr>
          </table>

          <h2 style="margin:30px 0 8px;font-size:18px;color:#0f172a;">Biggest gaps to fix first</h2>
          <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;">${gaps}</table>

          <h2 style="margin:30px 0 12px;font-size:18px;color:#0f172a;">7-day execution plan</h2>
          <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;border:1px solid #e2e8f0;border-radius:8px;border-collapse:separate;border-spacing:0;overflow:hidden;">
            ${planRows}
          </table>

          <h2 style="margin:30px 0 12px;font-size:18px;color:#0f172a;">Copy-ready fixes</h2>
          <div style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
            <div style="padding:16px;border-bottom:1px solid #e2e8f0;background:#f8fafc;">
              <div style="font-size:12px;font-weight:800;color:#64748b;text-transform:uppercase;letter-spacing:.1em;">Title</div>
              <div style="margin-top:8px;font-size:14px;line-height:1.6;color:#0f172a;">${escapeHtml(
                report.copySuggestions.title,
              )}</div>
            </div>
            <div style="padding:16px;border-bottom:1px solid #e2e8f0;background:#ffffff;">
              <div style="font-size:12px;font-weight:800;color:#64748b;text-transform:uppercase;letter-spacing:.1em;">Description</div>
              <div style="margin-top:8px;font-size:14px;line-height:1.6;color:#0f172a;">${escapeHtml(
                report.copySuggestions.description,
              )}</div>
            </div>
            <div style="padding:16px;background:#ffffff;">
              <div style="font-size:12px;font-weight:800;color:#64748b;text-transform:uppercase;letter-spacing:.1em;">FAQ and schema ideas</div>
              <ul style="margin:10px 0 12px;padding-left:20px;color:#475569;font-size:14px;line-height:1.55;">${faqItems}</ul>
              <div>${schemaItems}</div>
            </div>
          </div>

          <h2 style="margin:30px 0 12px;font-size:18px;color:#0f172a;">AI recommendations</h2>
          <ul style="margin:0;padding-left:20px;">${recommendations}</ul>

          <h2 style="margin:30px 0 12px;font-size:18px;color:#0f172a;">Markdown appendix</h2>
          <pre style="white-space:pre-wrap;background:#020617;color:#dbeafe;border-radius:8px;padding:18px;font-size:12px;line-height:1.6;overflow:auto;">${escapeHtml(
            markdown,
          )}</pre>

          <p style="margin:24px 0 0;font-size:12px;line-height:1.6;color:#94a3b8;">This report was generated automatically after your RankFortune purchase. Reply to this email if you need the report regenerated for a different URL.</p>
        </div>
      </div>
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
