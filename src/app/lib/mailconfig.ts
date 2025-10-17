import nodemailer from 'nodemailer';

// Define types for email options
interface EmailOptions {
  from?: string;
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  cc?: string | string[];
  bcc?: string | string[];
  attachments?: Array<{
    filename: string;
    path?: string;
    content?: string | Buffer;
  }>;
}

interface EmailConfig {
  host?: string;
  port?: number;
  secure?: boolean;
  user?: string;
  password?: string;
}

// Create transporter function
function createEmailTransporter(config?: EmailConfig) {
  return nodemailer.createTransport({
    host: config?.host || 'smtp.gmail.com',
    port: config?.port || 587,
    secure: config?.secure || false,
    auth: {
      user: config?.user || process.env.GMAIL_USER ,
      pass: config?.password || process.env.GMAIL_APP_PASSWORD 
    }
  });
}

// Send email function with arguments
async function sendEmail(
  emailOptions: EmailOptions,
  config?: EmailConfig
): Promise<any> {
  try {
    const transporter = createEmailTransporter(config);
    
    const mailOptions = {
      from: emailOptions.from || `"Wallet Key" <${config?.user || process.env.GMAIL_USER}>`,
      to: emailOptions.to,
      subject: emailOptions.subject,
      text: emailOptions.text,
      html: emailOptions.html,
      cc: emailOptions.cc,
      bcc: emailOptions.bcc,
      attachments: emailOptions.attachments
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Example usage:
// Single recipient


// Export for use in other modules
export { sendEmail, createEmailTransporter };