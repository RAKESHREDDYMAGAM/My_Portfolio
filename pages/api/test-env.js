// Test endpoint to check if environment variables are being read
export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;

  return res.status(200).json({
    message: 'Environment variables check',
    gmailUser: gmailUser || 'NOT SET',
    gmailPassword: gmailPassword 
      ? `${gmailPassword.substring(0, 4)}**** (length: ${gmailPassword.length})` 
      : 'NOT SET',
    isPlaceholder: gmailPassword === 'your_app_password_here' || 
                   gmailPassword === 'your_16_character_app_password_here',
    instructions: gmailPassword === 'your_app_password_here' || !gmailPassword
      ? 'You need to replace "your_app_password_here" with your actual Gmail App Password'
      : 'Environment variables are configured correctly!'
  });
}


