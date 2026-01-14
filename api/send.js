import { Resend } from 'resend';

export default async function handler(req, res) {
  // Инициализируем Resend внутри обработчика, чтобы он гарантированно видел переменную окружения
  const resend = new Resend(process.env.RESEND_API_KEY);

  // Разрешаем только POST запросы
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Простая валидация данных
    if (!firstName || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', 
      to: ['horoshov@bk.ru'], // Твоя старая почта
      reply_to: email, 
      subject: `New Message: ${firstName} ${lastName}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    console.error('Resend Error:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}