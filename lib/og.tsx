import fs from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

type OgImageProps = { title: string; eyebrow?: string };

export async function ogImage({ title, eyebrow }: OgImageProps) {
  const logo = await fs.readFile(path.join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a1128",
          color: "#f6f7f9",
          padding: 72,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -180,
            width: 640,
            height: 640,
            borderRadius: 640,
            border: "2px solid rgba(47, 215, 253, 0.35)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={72} height={72} alt="" />
          <div style={{ fontSize: 32 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {eyebrow ? (
            <div
              style={{
                display: "flex",
                fontSize: 26,
                color: "#2fd7fd",
                letterSpacing: 6,
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              fontSize: title.length > 60 ? 56 : 72,
              lineHeight: 1.1,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#9aa3b2" }}>
          {site.role}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
