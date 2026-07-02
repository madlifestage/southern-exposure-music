import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const alt = `${SITE.name} — Independent Electronic Record Label`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(99, 102, 241, 0.18)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -60,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "rgba(34, 211, 238, 0.12)",
            filter: "blur(80px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 720,
              height: 2,
              background: "linear-gradient(90deg, transparent, #ffffff, transparent)",
            }}
          />
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "#ffffff",
              textAlign: "center",
              fontFamily: "Georgia, serif",
            }}
          >
            SOUTHERN EXPOSURE
          </div>
          <div
            style={{
              width: 720,
              height: 2,
              background: "linear-gradient(90deg, transparent, #ffffff, transparent)",
            }}
          />
          <div
            style={{
              fontSize: 28,
              color: "#22d3ee",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginTop: 8,
            }}
          >
            Independent Electronic Music Label
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#a1a1aa",
              letterSpacing: "0.04em",
            }}
          >
            House · Techno · Trance · Atlanta · Since 2010
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
