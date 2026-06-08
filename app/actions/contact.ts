"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = {
  status: "idle" | "success" | "error";
  error?: string;
};

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const business = (formData.get("business") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!name || !email || !message) {
    return { status: "error", error: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", error: "Please enter a valid email address." };
  }

  try {
    await resend.emails.send({
      from: "TurboSites Contact <contact@turbosites.io>",
      to: "eric@turbosites.io",
      replyTo: email,
      subject: `New inquiry from ${name}${business ? ` — ${business}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #000d2b; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: #0151fc; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">
              TurboSites.io
            </h1>
            <p style="color: #a5bffe; margin: 4px 0 0; font-size: 13px;">New Contact Form Submission</p>
          </div>
          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; padding: 28px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 120px; vertical-align: top; font-weight: 600;">Name</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 600;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top; font-weight: 600;">Email</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${escapeHtml(email)}" style="color: #0151fc;">${escapeHtml(email)}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top; font-weight: 600;">Phone</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${escapeHtml(phone)}</td>
              </tr>
              ` : ""}
              ${business ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top; font-weight: 600;">Business</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${escapeHtml(business)}</td>
              </tr>
              ` : ""}
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin: 0 0 8px;">Message</p>
            <p style="color: #111827; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
            <div style="margin-top: 24px; padding: 16px; background: #eff4ff; border-radius: 8px; border: 1px solid #c7d7fd;">
              <p style="margin: 0; font-size: 13px; color: #0151fc;">
                Hit reply to respond directly to ${escapeHtml(name)}.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return { status: "success" };
  } catch {
    return { status: "error", error: "Something went wrong. Please try again or email us directly." };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
