"use server"; // Tells Next.js to treat this file strictly as a Server Action

import { Resend } from "resend";
import { redirect } from "next/navigation";

// EMAIL SENDING FUNCTIONALITY
// ADD RESEND_API_KEY IN YOUR .ENV FILE
export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");

  if (!message || typeof message !== "string") {
    return {
      error: "Invalid message",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return {
      error:
        "Email service is currently misconfigured. Please check back later.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "victor.dmaina@gmail.com",
      subject: `${name || "Anonymous"} From Contact Form.`,
      reply_to: `${SenderEmail || ""}`,
      text: `sender email: ${SenderEmail || "Not provided"}\n\n${message}`,
    });
  } catch (error) {
    console.error("Error sending email via Resend:", error);
    return {
      error: "Failed to send email message.",
    };
  }

  // Next.js redirect must be called outside the try/catch block
  redirect("/");
};
