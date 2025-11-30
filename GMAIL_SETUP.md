# Gmail Setup for Contact Form

## Quick Setup (5 minutes)

### Step 1: Enable 2-Step Verification
1. Go to https://myaccount.google.com/security
2. Enable **2-Step Verification** (required for App Passwords)

### Step 2: Generate App Password
1. Go to https://myaccount.google.com/apppasswords
2. Select **Mail** and **Other (Custom name)**
3. Enter name: "Portfolio Contact Form"
4. Click **Generate**
5. **Copy the 16-character password** (you'll need this)

### Step 3: Update .env.local
Open `.env.local` in the root directory and add:

```env
GMAIL_USER=rakeshreddymagam@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password_here
```

Replace `your_16_character_app_password_here` with the App Password you copied.

### Step 4: Restart Server
```bash
npm run dev
```

## Testing
1. Fill out the contact form on your portfolio
2. Submit the form
3. Check your email inbox - you should receive the message!

## Troubleshooting
- **"Invalid login"**: Make sure you're using the App Password, not your regular Gmail password
- **"Authentication failed"**: Verify 2-Step Verification is enabled
- **No emails received**: Check spam folder and verify the App Password is correct

## Security Note
- Never commit `.env.local` to git (it's already in .gitignore)
- The App Password is different from your regular password
- You can revoke App Passwords anytime from Google Account settings

