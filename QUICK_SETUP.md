# Quick Setup: Fix "Email service not configured" Error

## The Problem
You're seeing: "Email service not configured. Please set GMAIL_APP_PASSWORD in .env.local file"

## The Solution (3 Steps - 5 minutes)

### Step 1: Generate Gmail App Password
1. **Enable 2-Step Verification** (if not already enabled):
   - Go to: https://myaccount.google.com/security
   - Click "2-Step Verification" and enable it

2. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" → "Other (Custom name)"
   - Enter: "Portfolio Contact Form"
   - Click "Generate"
   - **Copy the 16-character password** (it looks like: `abcd efgh ijkl mnop`)

### Step 2: Update .env.local File
1. Open `.env.local` in the root directory of your project
2. It should currently look like this:
   ```env
   GMAIL_USER=rakeshreddymagam@gmail.com
   GMAIL_APP_PASSWORD=your_app_password_here
   ```
3. **Replace `your_app_password_here`** with your actual 16-character App Password
   - Remove all spaces from the password
   - Example: If Google shows `abcd efgh ijkl mnop`, use `abcdefghijklmnop`
   
   Final file should look like:
   ```env
   GMAIL_USER=rakeshreddymagam@gmail.com
   GMAIL_APP_PASSWORD=abcdefghijklmnop
   ```

### Step 3: Restart Your Dev Server
1. **Stop the server** (press `Ctrl+C` in the terminal)
2. **Start it again**:
   ```bash
   npm run dev
   ```

## Test It
1. Fill out the contact form
2. Submit it
3. Check your email inbox (rakeshreddymagam@gmail.com)
4. You should receive the message!

## Still Not Working?
- Make sure `.env.local` is in the root directory (same folder as `package.json`)
- Make sure there are **no spaces** in the App Password
- Make sure you **restarted the server** after updating `.env.local`
- Check the server terminal for any error messages


