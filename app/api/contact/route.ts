import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      throw new Error('SENDGRID_API_KEY is not defined');
    }

    const { name, email, message, subject } = await req.json();

    // Validate all fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailContent = {
      to: 'alamfaraz141@gmail.com',
      from: 'alamfaraz141@gmail.com', // Must be a verified sender in SendGrid
      subject, // 👈 Using dynamic subject from input
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    };

    await sgMail.send(emailContent);

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error in /api/contact:', error.response?.body || error.message);
    return NextResponse.json(
      { error: 'Failed to send message', details: error.response?.body || error.message },
      { status: 500 }
    );
  }
}
