import React, { useState, useEffect } from 'react';
import { sendEmail, validateMeetingForm, initializeEmailJS } from '../services/emailService';

export default function BookMeeting({ onClose }) {
  const [form, setForm] = useState({ 
    name: '', 
    contact: '', 
    email: '', 
    date: '',
    time: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    // Initialize EmailJS when component mounts
    initializeEmailJS();
  }, []);

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00'
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleDateSelect = (e) => {
    setSelectedDate(e.target.value);
    setForm({ ...form, date: e.target.value });
    // Clear date error when user selects a date
    if (errors.date) {
      setErrors({ ...errors, date: '' });
    }
  };

  const handleTimeSelect = (time) => {
    setForm({ ...form, time });
    // Clear time error when user selects a time
    if (errors.time) {
      setErrors({ ...errors, time: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError('');
    
    // Validate form
    const validation = validateMeetingForm(form);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setLoading(false);
      return;
    }

    try {
      // Send email via configured service
      const result = await sendEmail(form, 'meeting');
      
      if (result.success) {
        setSubmitted(true);
        // Reset form
        setForm({ name: '', contact: '', email: '', date: '', time: '' });
        setSelectedDate('');
        setErrors({});
      } else {
        setSubmitError(result.error || 'Failed to book meeting. Please try again.');
      }
    } catch (error) {
      console.error('Meeting booking submission error:', error);
      setSubmitError('Failed to book meeting. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  // Google Calendar link generator
  const getGoogleCalendarLink = () => {
    if (!form.date || !form.time) return '#';
    const [year, month, day] = form.date.split('-');
    const [hours, minutes] = form.time.split(':');
    const start = new Date(year, month - 1, day, hours, minutes);
    const end = new Date(start.getTime() + 30 * 60000); // 30 min meeting
    const format = (d) => d.toISOString().replace(/[-:]|\.\d{3}/g, '');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting+with+Automaani&dates=${format(start)}/${format(end)}&details=Automaani+Hotel+Automation+Consultation&location=Online`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <section className="relative max-w-2xl w-full mx-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-2xl shadow-2xl p-8 animate-fade-in-up">
        <button
          className="absolute top-4 right-4 text-blue-700 hover:text-blue-900 text-2xl font-bold focus:outline-none transition-colors duration-200"
          onClick={onClose}
          aria-label="Close Book Meeting"
        >
          &times;
        </button>
        <h2 className="text-3xl font-extrabold text-blue-800 mb-8 text-center animate-fade-in-up">Book a Meeting</h2>
        {submitted ? (
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="text-green-600 text-lg font-semibold">Thank you! We will contact you to confirm your meeting.</div>
            <a
              href={getGoogleCalendarLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Add to Google Calendar
            </a>
          </div>
        ) : (
          <form className="space-y-6 animate-fade-in-up delay-100" onSubmit={handleSubmit}>
            {submitError && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{submitError}</p>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <input
                    className={`w-full border rounded-lg px-4 py-3 focus:outline-blue-500 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-200 hover:shadow-md ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-blue-100'
                    }`}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    className={`w-full border rounded-lg px-4 py-3 focus:outline-blue-500 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-200 hover:shadow-md ${
                      errors.contact ? 'border-red-300 bg-red-50' : 'border-blue-100'
                    }`}
                    type="text"
                    name="contact"
                    placeholder="Contact Number"
                    value={form.contact}
                    onChange={handleChange}
                    required
                  />
                  {errors.contact && <p className="text-red-600 text-sm mt-1">{errors.contact}</p>}
                </div>
                <div>
                  <input
                    className={`w-full border rounded-lg px-4 py-3 focus:outline-blue-500 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-200 hover:shadow-md ${
                      errors.email ? 'border-red-300 bg-red-50' : 'border-blue-100'
                    }`}
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-sm">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                  <input
                    className={`w-full border rounded-lg px-4 py-3 focus:outline-blue-500 ${
                      errors.date ? 'border-red-300 bg-red-50' : 'border-blue-100'
                    }`}
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleDateSelect}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                  {errors.date && <p className="text-red-600 text-sm mt-1">{errors.date}</p>}
                </div>
                {selectedDate && (
                  <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-sm">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleTimeSelect(time)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            form.time === time
                              ? 'bg-blue-600 text-white'
                              : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    {errors.time && <p className="text-red-600 text-sm mt-1">{errors.time}</p>}
                  </div>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={loading || !form.date || !form.time}
              className={`w-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-bold py-3 rounded-lg shadow hover:scale-105 hover:from-blue-700 hover:to-cyan-500 transition-all duration-200 flex items-center justify-center gap-2 ${
                (loading || !form.date || !form.time) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Booking...
                </>
              ) : (
                'Book Now'
              )}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
