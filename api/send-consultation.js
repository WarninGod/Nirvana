import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, type, budget, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      if (process.env.NODE_ENV === 'development') {
        console.error('RESEND_API_KEY not found in environment');
      }
      return res.status(500).json({ error: 'Email service not configured' });
    }

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'Nirvana Interiors <inquiries@nirvanainteriors.studio>',
      to: 'gamerfreakin6@gmail.com',
      replyTo: email,
      subject: `New ${type} Project Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Arial', sans-serif; color: #333; line-height: 1.6; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #0B0B0B; color: #C9A24D; padding: 30px; text-align: center; }
              .header h1 { margin: 0; font-size: 28px; font-family: 'Georgia', serif; }
              .content { background: #f9f9f9; padding: 30px; }
              .field { margin-bottom: 20px; }
              .field-label { font-weight: bold; color: #C9A24D; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
              .field-value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #C9A24D; }
              .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Project Inquiry</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">Client Name</div>
                  <div class="field-value">${name}</div>
                </div>
                <div class="field">
                  <div class="field-label">Email</div>
                  <div class="field-value">${email}</div>
                </div>
                <div class="field">
                  <div class="field-label">Project Type</div>
                  <div class="field-value">${type}</div>
                </div>
                <div class="field">
                  <div class="field-label">Budget Range</div>
                  <div class="field-value">${budget || 'Not specified'}</div>
                </div>
                <div class="field">
                  <div class="field-label">Project Details</div>
                  <div class="field-value">${message}</div>
                </div>
              </div>
              <div class="footer">
                <p>This inquiry was submitted from nirvana-interiors.com</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('Email sent successfully:', emailResponse.id);
    }

    return res.status(200).json({ 
      success: true, 
      id: emailResponse?.id,
      message: 'Consultation request sent successfully' 
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error sending email:', error);
    }
    return res.status(500).json({ 
      error: 'Failed to send email', 
      details: error instanceof Error ? error.message : String(error)
    });
  }
}
