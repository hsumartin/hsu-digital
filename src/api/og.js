import { ImageResponse } from "@vercel/og";
export const config = { runtime: "edge" };

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Martin Hsu · WebImpact Design";
  const mode = searchParams.get("mode") || "default";

  const bg = mode === "cognitive" ? "#0a1122" : "#111827";
  const accent = mode === "cognitive" ? "#d4b066" : "#e5b249";

  return new ImageResponse(
    (
      <div
        style={{
          background: `radial-gradient(circle at 40% 30%, ${bg}, #000)`,
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: accent,
          fontFamily: "Poppins, Inter, system-ui",
          letterSpacing: "-0.02em",
        }}
      >
        <h1
          style={{
            fontSize: "68px",
            maxWidth: "900px",
            textAlign: "center",
            fontWeight: 700,
            color: accent,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.6)",
            marginTop: "20px",
          }}
        >
          by Martin Hsu · WebImpact Designer
        </p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
