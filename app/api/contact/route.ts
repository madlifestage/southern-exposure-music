import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/constants";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message, website } = body;

  if (website) {
    return NextResponse.json({ ok: true });
  }

  const trimmedName = name?.trim();
  const trimmedEmail = email?.trim();
  const trimmedMessage = message?.trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(trimmedEmail)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  if (trimmedMessage.length > 5000) {
    return NextResponse.json(
      { error: "Message is too long. Please keep it under 5,000 characters." },
      { status: 400 }
    );
  }

  if (!resend) {
    return NextResponse.json(
      { error: "Contact form is not configured yet. Please email us directly." },
      { status: 503 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL ?? SITE.email;
  const from =
    process.env.RESEND_FROM ??
    `${SITE.name} <onboarding@resend.dev>`;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: trimmedEmail,
    subject: `New contact from ${trimmedName} — ${SITE.shortName}`,
    text: [
      `Name: ${trimmedName}`,
      `Email: ${trimmedEmail}`,
      "",
      trimmedMessage,
    ].join("\n"),
    html: `
      <div style="font-family: Inter, Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2 style="margin: 0 0 16px;">New message from ${SITE.name}</h2>
        <p><strong>Name:</strong> ${trimmedName}</p>
        <p><strong>Email:</strong> ${trimmedEmail}</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
        <p style="white-space: pre-wrap;">${trimmedMessage}</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again or email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
