import React from 'react';

export default function Hero({ onBook }) {
  return (
    <section className="relative pt-32 pb-24 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-cyan-50/60">
      {/* Enhanced background elements with softer colors */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/12 to-cyan-200/8 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-200/10 to-blue-200/8 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/6 to-cyan-100/6 rounded-full blur-3xl animate-pulse-slow" />
        {/* Decorative floating elements */}
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-gradient-to-br from-yellow-100/15 to-orange-100/15 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-green-100/15 to-teal-100/15 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-pink-100/10 to-purple-100/10 rounded-full blur-md animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <div className="mb-12 animate-fade-in-up">
          <span className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-50/95 to-cyan-50/95 backdrop-blur-sm text-blue-700 font-semibold text-sm mb-8 shadow-lg border border-blue-100/50">
            Hotel Automation Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block text-gray-700 mb-4 drop-shadow-sm">Automaani</span>
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-500">
                Elevate Your Hotel's Operational Excellence
              </span>
              <svg className="absolute -bottom-4 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6C50 6 50 0 100 0C150 0 150 6 200 6" stroke="url(#gradient)" strokeWidth="6" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2563eb" />
                    <stop offset="0.3" stopColor="#7c3aed" />
                    <stop offset="0.7" stopColor="#06b6d4" />
                    <stop offset="1" stopColor="#0891b2" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up delay-100 font-medium leading-relaxed">
          Transform your hotel operations with our intelligent automation solutions. Based in Nepal, serving the future of hospitality management worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-200">
          <button
            onClick={onBook}
            className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Book a Meeting
              <span className="inline-block ml-3 transition-transform group-hover:translate-x-1">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <a
            href="#services"
            className="px-10 py-4 rounded-xl font-semibold text-blue-600 bg-white/90 backdrop-blur-sm border-2 border-blue-100 hover:border-blue-200 hover:bg-white hover:shadow-lg transition-all duration-300 text-lg"
          >
            Learn More
          </a>
        </div>

        {/* Additional visual element */}
        <div className="mt-16 animate-fade-in-up delay-300">
          <div className="flex justify-center space-x-8 text-gray-500">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-blue-600 font-bold">AI</span>
              </div>
              <span className="text-sm">AI Powered</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-purple-600 font-bold">24/7</span>
              </div>
              <span className="text-sm">Always On</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-green-600 font-bold">∞</span>
              </div>
              <span className="text-sm">Scalable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
