// Email service configuration
export const emailConfig = {
  // EmailJS Configuration
  // Sign up at https://www.emailjs.com/ and replace these with your actual values
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_EMAILJS_SERVICE_ID',
    contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'YOUR_CONTACT_TEMPLATE_ID',
    meetingTemplateId: import.meta.env.VITE_EMAILJS_MEETING_TEMPLATE_ID || 'YOUR_MEETING_TEMPLATE_ID',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY'
  },
  
  // Formspree Configuration (Alternative)
  // Sign up at https://formspree.io/ and replace with your form endpoint
  formspree: {
    contactEndpoint: import.meta.env.VITE_FORMSPREE_CONTACT_ENDPOINT || 'https://formspree.io/f/YOUR_CONTACT_FORM_ID',
    meetingEndpoint: import.meta.env.VITE_FORMSPREE_MEETING_ENDPOINT || 'https://formspree.io/f/YOUR_MEETING_FORM_ID'
  },
  
  // Custom API Configuration (if you have your own backend)
  customApi: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.automaani.com',
    contactEndpoint: import.meta.env.VITE_API_CONTACT_ENDPOINT || '/api/contact',
    meetingEndpoint: import.meta.env.VITE_API_MEETING_ENDPOINT || '/api/meeting'
  }
};

// Email templates for different services
export const emailTemplates = {
  contact: {
    subject: 'New Contact Form Submission - Automaani',
    autoReply: {
      subject: 'Thank you for contacting Automaani',
      message: `Dear {{name}},

Thank you for reaching out to Automaani! We have received your message and will get back to you within 24 hours.

Your message:
{{message}}

Best regards,
Automaani Team
Contact: contact@automaani.com
Phone: +977 9807881445, +977 9827454638`
    }
  },
  meeting: {
    subject: 'New Meeting Request - Automaani',
    autoReply: {
      subject: 'Meeting Request Confirmation - Automaani',
      message: `Dear {{name}},

Thank you for booking a meeting with Automaani! We have received your request and will confirm the meeting details shortly.

Meeting Details:
- Date: {{date}}
- Time: {{time}}
- Contact: {{contact}}
- Email: {{email}}

We will contact you within 2 hours to confirm the meeting.

Best regards,
Automaani Team
Contact: contact@automaani.com
Phone: +977 9807881445, +977 9827454638`
    }
  }
};
