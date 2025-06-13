import React from 'react';

export default function Location() {
  return (
    <section className="pt-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-100/20 to-cyan-50/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-100/15 to-blue-50/10 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 relative mb-16">
        <div className="text-center">
          <span className="inline-block px-6 py-3 rounded-full bg-blue-100/80 text-blue-700 font-medium text-sm mb-6 animate-fade-in-up">
            Our Location
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 animate-fade-in-up">
            Based in <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Nepal</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Automaani is proudly based in Lalitpur, Nepal, bringing world-class hotel automation solutions to the hospitality industry
          </p>
        </div>
      </div>

      {/* Full Width Interactive Map */}
      <div className="w-full animate-fade-in-up delay-200">
        <div className="bg-white/90 backdrop-blur-md shadow-xl overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-600 to-cyan-500">
            <h3 className="text-xl font-bold text-white flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0V7" />
              </svg>
              Find Us in Lalitpur
            </h3>
          </div>
          <div className="aspect-[16/6]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27824034775!2d85.31064317832032!3d27.67659908176613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb17cf6d3a3387%3A0x94f5659134f1e5b7!2sLalitpur!5e0!3m2!1sen!2snp!4v1703587200000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Automaani Location - Lalitpur, Nepal"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50/50">
            <p className="text-sm text-gray-600 text-center py-3">
              📍 Lalitpur, Nepal - Gateway to innovative hotel automation solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
