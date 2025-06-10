import React, { useState } from 'react';

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

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00'
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateSelect = (e) => {
    setSelectedDate(e.target.value);
    setForm({ ...form, date: e.target.value });
  };

  const handleTimeSelect = (time) => {
    setForm({ ...form, time });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would integrate with Google Calendar API or send the data to your backend
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <input
                  className="w-full border border-blue-100 rounded-lg px-4 py-3 focus:outline-blue-500 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-200 hover:shadow-md"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full border border-blue-100 rounded-lg px-4 py-3 focus:outline-blue-500 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-200 hover:shadow-md"
                  type="text"
                  name="contact"
                  placeholder="Contact Number"
                  value={form.contact}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full border border-blue-100 rounded-lg px-4 py-3 focus:outline-blue-500 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-200 hover:shadow-md"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-sm">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                  <input
                    className="w-full border border-blue-100 rounded-lg px-4 py-3 focus:outline-blue-500"
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleDateSelect}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
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
                  </div>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-bold py-3 rounded-lg shadow hover:scale-105 hover:from-blue-700 hover:to-cyan-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!form.date || !form.time}
            >
              Book Now
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
