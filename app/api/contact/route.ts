import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  // 1. We moved this inside the function! Now it only runs at runtime, not build time.
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const { name, email, interest, message } = body;

    const data = await resend.emails.send({
      from: 'Allure Youth Guide <onboarding@resend.dev>',
      to: 'randyboateng420@gmail.com', // Keep your actual email here
      subject: `New Inquiry: ${interest}`,
      html: `
        <h3>New Contact Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}