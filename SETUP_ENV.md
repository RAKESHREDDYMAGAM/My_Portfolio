# ⚠️ IMPORTANT: Fix "Email service not configured" Error

## Why You're Seeing This Error

The error appears because:
1. The `.env.local` file doesn't have your **real** Gmail App Password
2. OR the server wasn't restarted after updating `.env.local`

## ✅ Solution (Do This Now)

### Step 1: Get Your Gmail App Password

1. **Go to**: https://myaccount.google.com/apppasswords
   - If you see "2-Step Verification is off", enable it first: https://myaccount.google.com/security

2. **Generate App Password**:
   - Select "Mail"
   - Select "Other (Custom name)"
   - Enter: `Portfolio Contact Form`
   - Click "Generate"
   - **COPY the 16-character password** (looks like: `abcd efgh ijkl mnop`)

### Step 2: Update .env.local File

1. **Open** `.env.local` in the root directory (same folder as `package.json`)

2. **Current content** (WRONG - has placeholder):
   ```env
   GMAIL_USER=rakeshreddymagam@gmail.com
   GMAIL_APP_PASSWORD=your_app_password_here
   ```

3. **Replace** `your_app_password_here` with your **actual** App Password
   - Remove ALL spaces from the password
   - Example: If Google shows `abcd efgh ijkl mnop`, use `abcdefghijklmnop`

4. **Correct content** (RIGHT - has real password):
   ```env
   GMAIL_USER=rakeshreddymagam@gmail.com
   GMAIL_APP_PASSWORD=abcdefghijklmnop
   ```

### Step 3: Restart Server (CRITICAL!)

**You MUST restart the server for changes to take effect:**

1. **Stop the server**: Press `Ctrl+C` in the terminal where `npm run dev` is running
2. **Start it again**:
   ```bash
   npm run dev
   ```

## ✅ Verify It's Working

1. Fill out the contact form
2. Submit it
3. The error should be gone!
4. Check your email inbox

## ❌ Still Not Working?

**Check these:**

1. ✅ `.env.local` is in the **root directory** (same folder as `package.json`)
2. ✅ The App Password has **NO SPACES**
3. ✅ You **restarted the server** after updating `.env.local`
4. ✅ The file doesn't have quotes around the password
5. ✅ There are no extra spaces or characters

## 📝 Example .env.local File

```env
GMAIL_USER=rakeshreddymagam@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

**That's it! Just 2 lines, no quotes, no spaces in the password.**


