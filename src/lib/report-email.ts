import type { AuditReport } from "@/lib/audit/types";

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function buildMarkdownReport(report: AuditReport) {
  const lines = [
    "# RankFortune Evidence-Based Readiness Report", "",
    "Website: " + report.snapshot.finalUrl,
    "Observed at: " + report.evidence.observedAt,
    "Rule version: " + report.ruleVersion, "",
    "No combined GEO score. Observations are not actual indexing, AI citations, traffic or revenue.", "",
    "## Evidence tracks", "",
    ...report.tracks.map((track) => "- " + track.label + " [" + track.state + "]: " + track.summary), "",
    "## Scoped observations", "",
    ...report.signals.map((signal) => "- [" + signal.state + "] " + signal.label + " — " + signal.detail + " Scope: " + signal.scope), "",
    "## Recommended actions", "",
    ...(report.actionPlan.length ? report.actionPlan.map((fix, index) =>
      (index + 1) + ". [" + fix.priority + ", " + fix.effort + "] " + fix.title + "\n   " + fix.detail +
      "\n   Scope: " + fix.scope + "\n   Verify: " + fix.verification)
      : ["No automatic issues confirmed. Unknown checks still require evidence."]), "",
    "## Crawler preferences (not actual access)", "",
    ...report.snapshot.robotsTxt.aiCrawlers.map((bot) => "- " + bot.userAgent + " [" + bot.purpose + "]: " +
      (bot.allowed === null ? "unknown" : bot.allowed ? "rule allows" : "rule disallows") + " — " + bot.detail), "",
    "## Sources", "",
    ...report.evidence.sources.map((source) => "- [" + source.outcome + "] " + source.label + ": " + source.url +
      " — HTTP " + (source.status ?? "unknown") + ". " + source.detail), "",
    "## Scope and limitations", "", ...report.evidence.limitations.map((item) => "- " + item), "",
    "## Observed metadata (not invented copy)", "",
    "Title: " + report.copySuggestions.title,
    "Description: " + report.copySuggestions.description,
    "Detected schema types (not types to add): " + (report.copySuggestions.schemaTypes.join(", ") || "none"), "",
    "## Optional narrative — not independently verified", "", report.aiReport.summary, "",
    "Methodology: https://rankfortune.com/methodology", "",
  ];
  return lines.join("\n");
}

export function buildReportEmailHtml(report: AuditReport, markdown: string) {
  const e = escapeHtml;
  const tracks = report.tracks.map((track) => '<section style="padding:16px;border:1px solid #cbd5e1;margin:12px 0"><h2 style="font-size:18px;margin:0">' +
    e(track.label) + '</h2><p>' + e(track.state) + '</p><p>' + e(track.summary) + '</p></section>').join("");
  const actions = report.actionPlan.map((fix) => '<li style="margin-bottom:16px"><strong>[' + e(fix.priority) + '] ' +
    e(fix.title) + '</strong><p>' + e(fix.detail) + '</p><p>Scope: ' + e(fix.scope) + '</p><p>Verify: ' +
    e(fix.verification) + '</p></li>').join("");
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<title>RankFortune readiness evidence</title></head><body style="margin:0;background:#f1f5f9;font-family:Arial,sans-serif;color:#0f172a">' +
    '<main style="max-width:760px;margin:0 auto;background:white;padding:24px;line-height:1.6;overflow-wrap:anywhere">' +
    '<h1>RankFortune readiness evidence</h1><p>' + e(report.snapshot.finalUrl) + '</p><p>Observed: ' + e(report.evidence.observedAt) +
    ' · Rules: ' + e(report.ruleVersion) + '</p><p>No overall GEO score or result prediction. Unknown is not failure.</p>' + tracks +
    '<h2>Scoped actions</h2><ol>' + (actions || '<li>No automatic issues confirmed; review unknown checks.</li>') + '</ol>' +
    '<h2>Scope and limitations</h2><ul>' + report.evidence.limitations.map((item) => '<li>' + e(item) + '</li>').join("") + '</ul>' +
    '<h2>Complete evidence record</h2><pre style="white-space:pre-wrap;font:13px/1.6 monospace;overflow-wrap:anywhere">' + e(markdown) +
    '</pre><p><a href="https://rankfortune.com/methodology">Read the versioned methodology</a></p></main></body></html>';
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
