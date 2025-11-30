# EmailJS Setup Guide

## Current Status
⚠️ **The contact form is NOT sending emails yet** - you need to configure EmailJS first.

## Quick Setup Steps

### 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account (200 emails/month free)

### 2. Add Email Service
- Go to **Email Services** → **Add New Service**
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions
- **Copy the Service ID** (e.g., `service_xxxxx`)

### 3. Create Email Template
- Go to **Email Templates** → **Create New Template**
- Use these template variables:
  - `{{from_name}}` - Sender's name
  - `{{from_email}}` - Sender's email
  - `{{message}}` - Message content
  - `{{reply_to}}` - Reply-to email
- Set **To Email** to your email: `rakeshreddymagam@gmail.com`
- Set **Subject**: `New Contact Form Message from {{from_name}}`
- **Copy the Template ID** (e.g., `template_xxxxx`)

### 4. Get Public Key
- Go to **Account** → **General**
- **Copy your Public Key** (e.g., `xxxxxxxxxxxxx`)

### 5. Create Environment File
Create a file named `.env.local` in the root directory with:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

### 6. Restart Development Server
After creating `.env.local`, restart your dev server:
```bash
npm run dev
```

## Testing
1. Fill out the contact form on your portfolio
2. Submit the form
3. Check your email inbox (rakeshreddymagam@gmail.com)
4. You should receive the message!

## Troubleshooting
- Make sure `.env.local` is in the root directory (same level as `package.json`)
- Restart the dev server after creating/updating `.env.local`
- Check browser console for any errors
- Verify your EmailJS service is connected and active

