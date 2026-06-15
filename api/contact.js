import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed." });
  }

  try {
    const { name, email, message, opportunity, projectType, budget, source = "portfolio-contact" } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Name, email, and message are required." });
    }

    const emailHtml = `
      <div style="font-family:Arial,sans-serif;line-height:1.7;color:#111827;">
        <h2 style="margin-bottom:16px;">New portfolio enquiry</h2>
        <p><strong>Source:</strong> ${escapeHtml(source)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${opportunity ? `<p><strong>Opportunity:</strong> ${escapeHtml(opportunity)}</p>` : ""}
        ${projectType ? `<p><strong>Project type:</strong> ${escapeHtml(projectType)}</p>` : ""}
        ${budget ? `<p><strong>Budget / scope:</strong> ${escapeHtml(budget)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <div style="padding:14px 16px;border-radius:12px;background:#f3f4f6;border:1px solid #e5e7eb;white-space:pre-wrap;">${escapeHtml(message)}</div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["akashohalkar300@gmail.com"],
      reply_to: email,
      subject: `Portfolio enquiry from ${name}`,
      html: emailHtml
    });

    if (error) {
      return res.status(500).json({ success: false, message: "Email delivery failed." });
    }

    return res.status(200).json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Something went wrong while sending your message." });
  }
}
