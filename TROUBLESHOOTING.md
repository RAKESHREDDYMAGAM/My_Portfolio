# Troubleshooting: Contact Form Not Sending Emails

## Common Issues and Solutions

### 1. "Email service not configured" Error
**Problem**: Gmail App Password is not set in `.env.local`

**Solution**:
1. Open `.env.local` in the root directory
2. Make sure it contains:
   ```env
   GMAIL_USER=rakeshreddymagam@gmail.com
   GMAIL_APP_PASSWORD=your_16_character_app_password
   ```
3. Replace `your_16_character_app_password` with your actual Gmail App Password
4. **Restart your dev server** after updating `.env.local`

### 2. "Invalid login" or "Authentication failed" Error
**Problem**: Wrong Gmail App Password

**Solution**:
- Make sure you're using the **App Password**, not your regular Gmail password
- Generate a new App Password: https://myaccount.google.com/apppasswords
- Copy the 16-character password (remove spaces)
- Update `.env.local` and restart server

### 3. "Failed to send email" Error
**Problem**: Gmail SMTP connection issue

**Solutions**:
- Check if 2-Step Verification is enabled on your Google Account
- Verify the App Password is correct
- Check your internet connection
- Try generating a new App Password

### 4. No Error but No Email Received
**Possible causes**:
1. **Check spam folder** - Emails might be going to spam
2. **Check server console** - Look for error messages in terminal
3. **Verify .env.local is loaded** - Restart dev server after changes
4. **Check browser console** - Open DevTools (F12) and check for errors

### 5. Form Shows Success but No Email
**Check**:
- Open browser DevTools (F12) → Console tab
- Look for any error messages
- Check Network tab to see if `/api/send-email` request succeeded
- Check your server terminal for error logs

## Quick Test Steps

1. **Verify .env.local exists and has correct values**:
   ```bash
   # In project root
   cat .env.local
   ```

2. **Check server is running**:
   ```bash
   npm run dev
   ```

3. **Test the form**:
   - Fill out the contact form
   - Submit it
   - Check browser console (F12) for errors
   - Check server terminal for error messages

4. **Verify Gmail App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Make sure you have an App Password generated
   - Copy it exactly (16 characters, no spaces)

## Still Not Working?

1. **Check server logs**: Look at the terminal where `npm run dev` is running
2. **Check browser console**: Press F12 → Console tab
3. **Verify environment variables**: Make sure `.env.local` is in the root directory
4. **Restart everything**: Stop server (Ctrl+C) and restart with `npm run dev`

## Need Help?

If you're still having issues, check:
- Server terminal output for error messages
- Browser console (F12) for JavaScript errors
- `.env.local` file exists and has correct format
- Gmail App Password is valid and not expired

