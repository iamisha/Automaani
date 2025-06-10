import React from 'react';

export default function AboutUs() {
  const expectations = [
    { value: '30-40%', label: 'Reduction in front desk workload' },
    { value: '20%', label: 'Increase in guest satisfaction' },
    { value: '15%', label: 'Improvement in staff productivity' },
    { value: 'Yes', label: 'Automated 24/7 guest communication' },
    { value: 'Valuable', label: 'Insights from guest interactions' },
  ];
  return (
    <section className="py-24 bg-white/80 backdrop-blur-md" id="about">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-8 animate-fade-in-up">About Automaani</h2>
        <p className="text-lg text-gray-700 mb-8 animate-fade-in-up delay-100">
          Automaani is dedicated to revolutionizing hotel and resort operations with AI-powered automation. Our mission is to empower hospitality businesses to deliver exceptional guest experiences while maximizing efficiency and productivity.
        </p>
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-blue-700 mb-6 animate-fade-in-up">What you can Expect</h3>
          <div className="relative flex flex-wrap justify-center gap-8">
            {/* Decorative blurred gradient blob */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-40 bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-100 opacity-40 rounded-full blur-2xl z-0"></div>
            {expectations.map((item, i) => (
              <div
                key={item.label}
                className="relative z-10 bg-white/70 backdrop-blur-lg border border-blue-100 shadow-2xl rounded-3xl p-8 w-64 flex flex-col items-center group hover:scale-105 hover:shadow-blue-200 transition-transform duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-100 shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-extrabold text-white drop-shadow-lg animate-bounce-slow" style={{ animationDelay: `${i * 80}ms` }}>{item.value}</span>
                </div>
                <div className="text-blue-700 text-lg font-semibold text-center mb-1 animate-gradient-x bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-400 bg-clip-text text-transparent">
                  {item.label}
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-50 rounded-full blur-sm opacity-60"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
