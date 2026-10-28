import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

async function loadCormorant(weight: 500 | 600 | 700) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@${weight}&display=swap`,
    {
      headers: {
        // Older agents receive a single woff, which next/og can embed.
        "User-Agent":
          "Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko",
      },
    }
  ).then((response) => response.text());

  const url = css.match(/url\(([^)]+)\)/)?.[1];
  if (!url) {
    throw new Error("Cormorant Infant font URL was not found");
  }

  return fetch(url).then((response) => response.arrayBuffer());
}

export const alt = `${SITE.name} — Independent Electronic Record Label`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [display, text] = await Promise.all([
    loadCormorant(600),
    loadCormorant(500),
  ]);

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
              fontWeight: 600,
              letterSpacing: "0.06em",
              color: "#ffffff",
              textAlign: "center",
              fontFamily: "Cormorant Infant",
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
              fontWeight: 600,
              fontFamily: "Cormorant Infant",
              color: "#22d3ee",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginTop: 8,
            }}
          >
            Independent Electronic Music Label
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 500,
              fontFamily: "Cormorant Infant",
              color: "#a1a1aa",
              letterSpacing: "0.04em",
            }}
          >
            House · Techno · Trance · Atlanta · Since 2010
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant Infant", data: display, weight: 600 },
        { name: "Cormorant Infant", data: text, weight: 500 },
      ],
    }
  );
}
