import { Resend } from 'resend';

export default async function handler(req, res) {
  // Проверяем наличие ключа прямо в коде
  const key = process.env.RESEND_API_KEY;
  
  if (!key) {
    return res.status(500).json({ error: 'API Key is missing in Vercel Settings' });
  }

  const resend = new Resend(key);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, message } = req.body;

    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['horoshov@bk.ru'], 
      reply_to: email,
      subject: `New Message from ${firstName}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}