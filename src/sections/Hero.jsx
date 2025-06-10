import React from 'react';

export default function Hero({ onBook }) {
  return (
    <section className="relative pt-32 pb-24 min-h-[85vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/20 to-secondary/10 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-12 animate-fade-in-up">
          <span className="inline-block px-6 py-2.5 rounded-full bg-white/90 text-primary font-semibold text-sm mb-6 shadow-lg">
            Hotel Automation Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block text-gray-900 mb-2">Elevate Your Hotel's</span>
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600">
                Operational Excellence
              </span>
              <svg className="absolute -bottom-4 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4C50 4 50 0 100 0C150 0 150 4 200 4" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2563eb" />
                    <stop offset="1" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100 font-medium">
          Transform your hotel operations with our intelligent automation solutions. 
          Join the future of hospitality management.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-200">
          <button
            onClick={onBook}
            className="btn-primary group text-lg px-8 py-4"
          >
            Book a Meeting
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
          <a
            href="#services"
            className="px-8 py-4 rounded-xl font-semibold text-primary border-2 border-primary/20 hover:border-primary/40 transition-all duration-200 text-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
