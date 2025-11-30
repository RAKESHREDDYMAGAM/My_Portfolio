# ✅ Check Your .env.local File

## Quick Check

1. **Open `.env.local`** in the root directory (same folder as `package.json`)

2. **It should look like this** (with YOUR actual password):
   ```env
   GMAIL_USER=rakeshreddymagam@gmail.com
   GMAIL_APP_PASSWORD=abcdefghijklmnop
   ```

3. **If it says `your_app_password_here`**, you need to replace it with your real Gmail App Password.

## How to Get Your Gmail App Password

1. Go to: **https://myaccount.google.com/apppasswords**
2. If 2-Step Verification is off, enable it first: **https://myaccount.google.com/security**
3. Click "Select app" → Choose "Mail"
4. Click "Select device" → Choose "Other (Custom name)"
5. Type: `Portfolio Contact Form`
6. Click "Generate"
7. **Copy the 16-character password** (looks like: `abcd efgh ijkl mnop`)
8. **Remove all spaces** and put it in `.env.local`

## After Updating .env.local

**YOU MUST RESTART YOUR SERVER:**

1. Stop server: Press `Ctrl+C`
2. Start again: `npm run dev`

## Verify It's Working

The error will disappear once you:
- ✅ Have a real 16-character App Password (not the placeholder)
- ✅ Put it in `.env.local` (no spaces)
- ✅ Restarted the server


