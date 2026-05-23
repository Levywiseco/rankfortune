import { ImageResponse } from "next/og";

export const alt = "RankFortune AI visibility audit preview";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, rgb(9, 17, 31) 0%, rgb(14, 27, 46) 55%, rgb(27, 59, 104) 100%)",
          color: "white",
          padding: "56px",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "72px",
              width: "72px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "16px",
              background: "rgb(103, 232, 249)",
              color: "rgb(9, 17, 31)",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            RF
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ fontSize: "34px", fontWeight: 700 }}>RankFortune</div>
            <div style={{ fontSize: "20px", color: "rgb(186, 230, 253)" }}>
              AI visibility audit for SaaS and indie tools
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "920px" }}>
          <div style={{ fontSize: "68px", lineHeight: 1.05, fontWeight: 700 }}>
            See what keeps AI engines from recommending your website.
          </div>
          <div style={{ fontSize: "28px", lineHeight: 1.35, color: "rgb(203, 213, 225)" }}>
            Check technical discoverability, entity clarity, answer readiness,
            and the next fixes to ship.
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          {[
            "15 readiness signals",
            "Free snapshot",
            "Fix roadmap",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                borderRadius: "999px",
                border: "1px solid rgba(103, 232, 249, 0.25)",
                background: "rgba(103, 232, 249, 0.08)",
                padding: "12px 20px",
                fontSize: "20px",
                color: "rgb(207, 250, 254)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
