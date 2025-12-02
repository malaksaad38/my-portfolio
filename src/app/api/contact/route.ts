import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        console.log("Received contact form:", { name, email, subject, message });

        const sentEmail = await resend.emails.send({
            from: `Contact Form <${process.env.EMAIL_FROM!}>`,
            to: [process.env.EMAIL_TO!],
            subject: subject || "New message from contact form",
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
            replyTo: email,
        });

        return new Response(JSON.stringify({ success: true, email: sentEmail }), { status: 200 });
    } catch (error: any) {
        console.error("Resend error:", error);
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}
