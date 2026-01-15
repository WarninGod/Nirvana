# Nirvana Interiors - Resend Email Setup Guide

## 1. Get Your Resend API Key

1. Go to [resend.com](https://resend.com) and sign up
2. Verify your email
3. Go to **API Keys** in the dashboard
4. Click **Create API Key**
5. Name it "Nirvana Interiors Production"
6. Copy the API key (starts with `re_...`)

## 2. Add API Key to Your Project

### For Local Development:
```bash
# Create .env.local file (already exists)
echo "RESEND_API_KEY=re_your_actual_key_here" > .env.local
```

### For Vercel Deployment:
1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add new variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_your_actual_key_here`
   - **Environment:** Production, Preview, Development
4. Save and redeploy

## 3. Email Domain Setup (Optional but Recommended)

**Current:** Emails send from `onboarding@resend.dev` (free tier)
**Upgrade:** Use your own domain for professional emails

### To use custom domain:
1. Buy domain (e.g., `nirvana-interiors.com`)
2. Add domain in Resend dashboard
3. Add DNS records they provide
4. Update `api/send-consultation.ts` line 19:
   ```ts
   from: 'Inquiries <inquiries@nirvana-interiors.com>',
   ```

## 4. Test the Form

After setting up:
1. Run `npm run dev`
2. Open booking page
3. Fill form and submit
4. Check `gamerfreakin6@gmail.com` for email

## 5. Pricing

- **Free:** 100 emails/month, 1 domain
- **Pro:** $20/month, 50,000 emails, unlimited domains

## Troubleshooting

- **Error 401:** API key is wrong or missing
- **Error 403:** Domain not verified (if using custom domain)
- **Emails in spam:** Add SPF/DKIM records (Resend provides these)
- **Rate limited:** Upgrade plan or wait 24 hours

## API Endpoint

Your form posts to: `/api/send-consultation`
