import nodemailer from 'nodemailer';

const recipients = [
  "tarasinghrajput7261@gmail.com",
  "apnipathshalaorg@gmail.com"
];

// Create transporter using Zoho SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.zoho.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // team@apnipathshala.org
      pass: process.env.SMTP_PASS, // App password from Zoho
    },
  });
};

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, podName, students, message } = req.body;

    if (!name || !email || !phone || !podName || !students) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    // Check if SMTP is configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured');
      return res.status(500).json({ message: 'Email service not configured. Please contact administrator.' });
    }

    const transporter = createTransporter();

    // Verify connection
    await transporter.verify();

    // Send email
    await transporter.sendMail({
      from: `"Apni Prerna" <${process.env.SMTP_USER}>`,
      to: recipients.join(', '),
      replyTo: email,
      subject: `New Apni Prerna Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563EB;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">Phone:</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">POD/School:</td>
              <td style="padding: 8px 0;">${podName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">Students:</td>
              <td style="padding: 8px 0;">${students}</td>
            </tr>
          </table>
          ${message ? `
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="font-weight: bold; color: #4B5563; margin-bottom: 8px;">Message:</p>
            <p style="white-space: pre-wrap; color: #111827;">${message}</p>
          </div>
          ` : ''}
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #6B7280; font-size: 12px;">
            <p>This email was sent from the Apni Prerna contact form.</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unable to send message.';
    return res.status(500).json({ message: errorMessage });
  }
}
