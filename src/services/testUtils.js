import { emailConfig } from '../config/emailConfig.js';

// Configuration checker utility
export const checkEmailConfiguration = () => {
  const results = {
    emailjs: false,
    formspree: false,
    customApi: false,
    anyConfigured: false
  };

  // Check EmailJS configuration
  if (emailConfig.emailjs.serviceId && 
      emailConfig.emailjs.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      emailConfig.emailjs.publicKey && 
      emailConfig.emailjs.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY') {
    results.emailjs = true;
    console.log('✅ EmailJS is configured');
  } else {
    console.log('❌ EmailJS is not configured');
  }

  // Check Formspree configuration
  if (emailConfig.formspree.contactEndpoint && 
      !emailConfig.formspree.contactEndpoint.includes('YOUR_')) {
    results.formspree = true;
    console.log('✅ Formspree is configured');
  } else {
    console.log('❌ Formspree is not configured');
  }

  // Check Custom API configuration
  if (emailConfig.customApi.baseUrl && 
      !emailConfig.customApi.baseUrl.includes('YOUR_') &&
      emailConfig.customApi.baseUrl !== 'https://api.automaani.com') {
    results.customApi = true;
    console.log('✅ Custom API is configured');
  } else {
    console.log('❌ Custom API is not configured');
  }

  results.anyConfigured = results.emailjs || results.formspree || results.customApi;

  if (!results.anyConfigured) {
    console.warn('⚠️ No email service is configured! Forms will not send emails.');
    console.log('📝 Please check BACKEND_SETUP.md for configuration instructions.');
  }

  return results;
};

// Test function to simulate form submission
export const testFormSubmission = async (formData, formType) => {
  console.log(`🧪 Testing ${formType} form submission...`);
  console.log('📝 Form data:', formData);
  
  try {
    const { sendEmail } = await import('./emailService.js');
    const result = await sendEmail(formData, formType);
    
    if (result.success) {
      console.log('✅ Form submission successful!');
      console.log('📧 Email should be sent to: contact@automaani.com');
    } else {
      console.error('❌ Form submission failed:', result.error);
    }
    
    return result;
  } catch (error) {
    console.error('❌ Test failed with error:', error);
    return { success: false, error: error.message };
  }
};

// Quick test data
export const testData = {
  contact: {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message from the contact form.'
  },
  meeting: {
    name: 'Test User',
    email: 'test@example.com',
    contact: '+977 1234567890',
    date: '2025-06-15',
    time: '10:00'
  }
};

// Add to window for easy browser console testing
if (typeof window !== 'undefined') {
  window.automaaniTest = {
    checkConfiguration: checkEmailConfiguration,
    testContact: () => testFormSubmission(testData.contact, 'contact'),
    testMeeting: () => testFormSubmission(testData.meeting, 'meeting'),
    testData
  };
  
  console.log('🔧 Automaani testing utilities loaded!');
  console.log('💡 Use these commands in browser console:');
  console.log('   - automaaniTest.checkConfiguration()');
  console.log('   - automaaniTest.testContact()');
  console.log('   - automaaniTest.testMeeting()');
}
