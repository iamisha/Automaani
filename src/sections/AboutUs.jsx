import React from 'react';

export default function AboutUs() {
  const expectations = [
    { value: '30-40%', label: 'Reduction in front desk workload', icon: '📊' },
    { value: '20%', label: 'Increase in guest satisfaction', icon: '💎' },
    { value: '15%', label: 'Improvement in staff productivity', icon: '⚡' },
    { value: '24/7', label: 'Automated guest communication', icon: '🤖' },
    { value: '100%', label: 'Valuable insights from data', icon: '📈' },
  ];
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden" id="about">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/30 to-cyan-50/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-100/20 to-blue-50/30 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 text-center relative">
        <div className="mb-16">
          <span className="inline-block px-6 py-3 rounded-full bg-blue-100/80 text-blue-700 font-medium text-sm mb-6 animate-fade-in-up">
            About Our Company
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 animate-fade-in-up">
            Welcome to <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Automaani</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Based in Lalitpur, Nepal, Automaani is dedicated to revolutionizing hotel and resort operations with AI-powered automation. Our mission is to empower hospitality businesses across Nepal and beyond to deliver exceptional guest experiences while maximizing efficiency and productivity.
          </p>
        </div>
        <div className="mt-20">
          <div className="mb-12">
            <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 font-medium text-sm mb-4 animate-fade-in-up">
              Our Impact
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              What You Can <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Expect</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Transform your hospitality business with measurable results and enhanced guest experiences
            </p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Enhanced decorative background elements */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-r from-blue-300/20 via-cyan-200/15 to-purple-200/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-20 right-1/4 w-[400px] h-[200px] bg-gradient-to-l from-purple-200/15 via-blue-100/10 to-cyan-100/15 rounded-full blur-2xl z-0"></div>
            <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-gradient-to-br from-cyan-100/10 to-blue-200/15 rounded-full blur-3xl z-0"></div>
            
            {expectations.map((item, i) => (
              <div
                key={item.label}
                className="relative z-10 group animate-fade-in-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="bg-white/95 backdrop-blur-lg border-2 border-blue-100/50 shadow-lg rounded-2xl p-8 h-full flex flex-col items-center text-center group-hover:scale-105 group-hover:shadow-xl group-hover:border-blue-200/70 group-hover:bg-white transition-all duration-300 card-glow animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                  {/* Icon with enhanced styling */}
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
                    {item.icon}
                  </div>
                  
                  {/* Value with stronger contrast */}
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 shadow-xl mb-6 group-hover:from-blue-700 group-hover:to-cyan-600 group-hover:shadow-2xl transition-all duration-300">
                    <span className="text-2xl font-black text-white drop-shadow-lg">
                      {item.value}
                    </span>
                  </div>
                  
                  {/* Label with better typography */}
                  <h4 className="text-gray-800 text-lg font-bold leading-tight max-w-48 group-hover:text-gray-900 transition-colors duration-300">
                    {item.label}
                  </h4>
                  
                  {/* Enhanced bottom accent */}
                  <div className="mt-6 w-20 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
