import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Check if Gmail App Password is configured
  const appPassword = process.env.GMAIL_APP_PASSWORD;
  
  // Debug logging (only in development)
  if (process.env.NODE_ENV === 'development') {
    console.log('GMAIL_APP_PASSWORD check:', {
      exists: !!appPassword,
      length: appPassword ? appPassword.length : 0,
      isPlaceholder: appPassword === 'your_app_password_here' || appPassword === 'your_16_character_app_password_here',
      preview: appPassword ? `${appPassword.substring(0, 4)}****` : 'not set'
    });
  }
  
  const isPlaceholder = !appPassword || 
                        appPassword.trim() === '' || 
                        appPassword === 'your_app_password_here' || 
                        appPassword === 'your_16_character_app_password_here' ||
                        appPassword.length < 16;
  
  if (isPlaceholder) {
    return res.status(500).json({ 
      error: 'Email service not configured. Please set GMAIL_APP_PASSWORD in .env.local file.',
      debug: process.env.NODE_ENV === 'development' ? {
        passwordExists: !!appPassword,
        passwordLength: appPassword ? appPassword.length : 0,
        passwordPreview: appPassword ? `${appPassword.substring(0, 4)}****` : 'not set'
      } : undefined,
      instructions: [
        '1. Go to https://myaccount.google.com/apppasswords',
        '2. Generate an App Password (16 characters)',
        '3. Open .env.local in the root directory (same folder as package.json)',
        '4. Replace "your_app_password_here" with your actual App Password (no spaces)',
        '5. Restart your server: Stop (Ctrl+C) then run "npm run dev" again',
        '6. Make sure .env.local is in the root directory, not in a subfolder'
      ],
    });
  }

  try {
    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'rakeshreddymagam@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER || 'rakeshreddymagam@gmail.com',
      to: 'rakeshreddymagam@gmail.com',
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00f0ff;">New Contact Form Message</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This message was sent from your portfolio contact form.</p>
        </div>
      `,
      text: `
New Contact Form Message

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Email send error:', error);
    
    // Provide helpful error messages
    let errorMessage = 'Failed to send email';
    if (error.message.includes('Invalid login')) {
      errorMessage = 'Invalid Gmail credentials. Please check your Gmail App Password in .env.local';
    } else if (error.message.includes('EAUTH')) {
      errorMessage = 'Authentication failed. Please verify your Gmail App Password is correct.';
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return res.status(500).json({ 
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

