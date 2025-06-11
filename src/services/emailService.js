import emailjs from '@emailjs/browser';
import { emailConfig, emailTemplates } from '../config/emailConfig.js';

// Initialize EmailJS (call this once in your app)
export const initializeEmailJS = () => {
  if (emailConfig.emailjs.publicKey && emailConfig.emailjs.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY') {
    emailjs.init(emailConfig.emailjs.publicKey);
  }
};

// EmailJS Service
export const sendEmailViaEmailJS = async (formData, templateType) => {
  try {
    const templateId = templateType === 'contact' 
      ? emailConfig.emailjs.contactTemplateId 
      : emailConfig.emailjs.meetingTemplateId;

    const result = await emailjs.send(
      emailConfig.emailjs.serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message || `Meeting request for ${formData.date} at ${formData.time}`,
        contact: formData.contact || 'N/A',
        date: formData.date || 'N/A',
        time: formData.time || 'N/A',
        to_email: 'contact@automaani.com'
      }
    );

    return { success: true, data: result };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error: error.message };
  }
};

// Formspree Service
export const sendEmailViaFormspree = async (formData, formType) => {
  try {
    const endpoint = formType === 'contact' 
      ? emailConfig.formspree.contactEndpoint 
      : emailConfig.formspree.meetingEndpoint;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      return { success: true, data: await response.json() };
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Formspree Error:', error);
    return { success: false, error: error.message };
  }
};

// Custom API Service
export const sendEmailViaCustomAPI = async (formData, endpoint) => {
  try {
    const response = await fetch(`${emailConfig.customApi.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      return { success: true, data: await response.json() };
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Custom API Error:', error);
    return { success: false, error: error.message };
  }
};

// Generic email sending function that tries multiple services
export const sendEmail = async (formData, formType) => {
  console.log('🔄 Attempting to send email...', { formData, formType });
  
  // Try Formspree first (easier to set up)
  if (emailConfig.formspree.contactEndpoint && !emailConfig.formspree.contactEndpoint.includes('YOUR_')) {
    console.log('📧 Trying Formspree service...');
    const result = await sendEmailViaFormspree(formData, formType);
    if (result.success) {
      console.log('✅ Email sent via Formspree!');
      return result;
    } else {
      console.log('❌ Formspree failed:', result.error);
    }
  }

  // Try EmailJS second
  if (emailConfig.emailjs.publicKey && emailConfig.emailjs.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY') {
    console.log('📧 Trying EmailJS service...');
    const result = await sendEmailViaEmailJS(formData, formType);
    if (result.success) {
      console.log('✅ Email sent via EmailJS!');
      return result;
    } else {
      console.log('❌ EmailJS failed:', result.error);
    }
  }

  // Try custom API as last resort
  if (emailConfig.customApi.baseUrl && !emailConfig.customApi.baseUrl.includes('YOUR_')) {
    console.log('📧 Trying Custom API service...');
    const endpoint = formType === 'contact' 
      ? emailConfig.customApi.contactEndpoint 
      : emailConfig.customApi.meetingEndpoint;
    const result = await sendEmailViaCustomAPI(formData, endpoint);
    if (result.success) {
      console.log('✅ Email sent via Custom API!');
      return result;
    } else {
      console.log('❌ Custom API failed:', result.error);
    }
  }

  // If all services fail, provide helpful error message
  console.error('❌ All email services failed or are not configured');
  console.log('🔧 Current configuration:', {
    formspree: emailConfig.formspree.contactEndpoint,
    emailjs: emailConfig.emailjs.publicKey,
    customApi: emailConfig.customApi.baseUrl
  });
  
  return { 
    success: false, 
    error: `No email service configured. Please set up EmailJS, Formspree, or Custom API in your .env file. Check BACKEND_SETUP.md for instructions.` 
  };
};

// Validation functions
export const validateContactForm = (form) => {
  const errors = {};
  
  if (!form.name || form.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!form.message || form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateMeetingForm = (form) => {
  const errors = {};
  
  if (!form.name || form.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!form.contact || form.contact.trim().length < 10) {
    errors.contact = 'Please enter a valid contact number';
  }
  
  if (!form.date) {
    errors.date = 'Please select a date';
  } else {
    const selectedDate = new Date(form.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      errors.date = 'Please select a future date';
    }
  }
  
  if (!form.time) {
    errors.time = 'Please select a time';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
