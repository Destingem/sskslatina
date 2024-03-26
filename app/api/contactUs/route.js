// ./app/api/contactUs/page.ts
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const req = await request.json();
    const { name, email, message } = req;
console.log(process.env.EMAIL_PASSWORD)
    // Validate the request data
    if (!email || !message || !name) {
        return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    // Create a SMTP transporter
    const transporter = nodemailer.createTransport({
        host: 'mail.bytedev.cz',
        port: 465,
        secure: true,
        auth: {
            user: 'sskslatina@bytedev.cz',
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    try {
        // Send the email
        await transporter.sendMail({
            from: 'sskslatina@bytedev.cz',
            to: 'sskslatina@bytedev.cz',
            subject: 'New dotaz',
            text: `Name: ${name}\nEmail: ${email}\nZpráva: ${message}`,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Zpráva:</strong> ${message}</p>`,
        });

        // Return a success response
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
