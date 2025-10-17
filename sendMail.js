import nodemailer from 'nodemailer';

// Create transporter with Gmail SMTP settings
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587, // or 465 for SSL
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.GMAIL_USER || 'amosnandom1@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || 'srtc nqyi hopq hzfb'
  }
});

// Email options
const mailOptions = {
  from: '"Your Name" <amosnandom1@gmail.com>',
  to: 'amosnandom1@gmail.com',
  subject: 'Test Email from Nodemailer',
  text: 'This is a plain text email',
  html: '<h1>Hello!</h1><p>This is an HTML email</p>'
};

// Send email
async function sendEmail() {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// Call the function
sendEmail();