# 📍 Where is .env.local?

## Location

The `.env.local` file should be in the **root directory** of your project, which is:

```
d:\protfolio\.env.local
```

## Same folder as:
- ✅ `package.json`
- ✅ `next.config.js`
- ✅ `pages/` folder
- ✅ `components/` folder

## How to find it:

1. **In VS Code/Editor:**
   - Look in the root folder (same level as `package.json`)
   - The file might be hidden - make sure "Show hidden files" is enabled

2. **In File Explorer:**
   - Navigate to: `d:\protfolio\`
   - Enable "Show hidden files" in View settings
   - Look for `.env.local`

3. **In Terminal:**
   ```bash
   cd d:\protfolio
   dir /a .env.local
   ```

## If the file doesn't exist:

I've just created it for you! It should now be at:
```
d:\protfolio\.env.local
```

## What's inside:

```env
GMAIL_USER=rakeshreddymagam@gmail.com
GMAIL_APP_PASSWORD=your_app_password_here
```

## Next Steps:

1. **Open** `.env.local` in your editor
2. **Replace** `your_app_password_here` with your actual Gmail App Password
3. **Save** the file
4. **Restart** your server (`npm run dev`)

## Get your Gmail App Password:

Go to: https://myaccount.google.com/apppasswords


