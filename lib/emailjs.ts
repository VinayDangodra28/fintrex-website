import emailjs from '@emailjs/browser';

// EmailJS Configuration
// IMPORTANT: You need to create these templates in your EmailJS dashboard
// Go to: https://dashboard.emailjs.com/admin/templates

export const EMAILJS_CONFIG = {
  serviceId: 'service_e9pz5u7',
  // You need to get your public key from: https://dashboard.emailjs.com/admin/account
  publicKey: 'I5WHrxIq92hjjY9AO', // Replace with your actual public key
  
  // Template IDs - Create these templates in EmailJS dashboard
  templates: {
    // Template to notify you (vinaydangodra28@gmail.com) about new subscribers
    waitlistNotification: 'waitlist_notification',
    // Template to send thank you email to the subscriber
    waitlistThankYou: 'waitlist_thankyou',
    // Template for contact form messages
    contactNotification: 'contact_notification',
  }
};

// Initialize EmailJS (call this once in your app)
export const initEmailJS = () => {
  emailjs.init({
    publicKey: EMAILJS_CONFIG.publicKey,
  });
};

// Send waitlist notification to admin (you)
export const sendWaitlistNotification = async (subscriberEmail: string) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templates.waitlistNotification,
      {
        subscriber_email: subscriberEmail,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        to_email: 'vinaydangodra28@gmail.com',
      }
    );
    console.log('Notification sent successfully:', response.status);
    return response;
  } catch (error) {
    console.error('Failed to send notification:', error);
    throw error;
  }
};

// Send thank you email to the subscriber
export const sendWaitlistThankYou = async (subscriberEmail: string) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templates.waitlistThankYou,
      {
        subscriber_email: subscriberEmail,
        to_email: subscriberEmail,
      }
    );
    console.log('Thank you email sent successfully:', response.status);
    return response;
  } catch (error) {
    console.error('Failed to send thank you email:', error);
    throw error;
  }
};

// Combined function to handle waitlist signup
export const handleWaitlistSignup = async (email: string) => {
  // Send both emails in parallel
  const results = await Promise.allSettled([
    sendWaitlistNotification(email),
    sendWaitlistThankYou(email),
  ]);

  // Check if at least the notification was sent
  const notificationResult = results[0];
  const thankYouResult = results[1];

  if (notificationResult.status === 'rejected' && thankYouResult.status === 'rejected') {
    throw new Error('Failed to send emails');
  }

  return {
    notificationSent: notificationResult.status === 'fulfilled',
    thankYouSent: thankYouResult.status === 'fulfilled',
  };
};

// Send contact form message
export const sendContactMessage = async (data: {
  name: string;
  email: string;
  message: string;
  subject?: string;
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templates.contactNotification,
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject || 'New Contact Form Message',
        message: data.message,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        to_email: 'vinaydangodra28@gmail.com',
      }
    );
    console.log('Contact message sent successfully:', response.status);
    return response;
  } catch (error) {
    console.error('Failed to send contact message:', error);
    throw error;
  }
};
