import React from 'react';

const services = [
	{
		title: 'Pre-arrival Messages',
		desc: 'Automated pre-arrival communications (check-in details, WiFi access)',
		icon: '📩',
	},
	{
		title: 'Alerts',
		desc: 'Real-time staff notifications (instant booking alerts)',
		icon: '🔔',
	},
	{
		title: 'Inventory Tracking',
		desc: 'Smart inventory management with automated alerts',
		icon: '📦',
	},
	{
		title: 'Feedback Automation',
		desc: 'Automated guest feedback with sentiment analysis',
		icon: '💬',
	},
];

export default function Services() {
	return (
		<section
			className="py-24 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 relative overflow-hidden"
			id="services"
		>
			{/* Background decorative elements */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-100/20 to-cyan-50/10 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-100/15 to-blue-50/10 rounded-full blur-3xl" />
			</div>
			
			<div className="max-w-6xl mx-auto px-4 relative">
				<div className="text-center mb-16">
					<span className="inline-block px-6 py-3 rounded-full bg-blue-100/80 text-blue-700 font-medium text-sm mb-6 animate-fade-in-up">
						What We Offer
					</span>
					<h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 animate-fade-in-up">
						Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Services</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-100">
						Comprehensive automation solutions designed to streamline your hotel operations and enhance guest satisfaction
					</p>
				</div>
				
				<div className="grid md:grid-cols-2 gap-8 mb-4">
					{services.map((s, i) => (
						<div
							key={s.title}
							className="group bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 flex items-start gap-6 border border-blue-100/50 hover:scale-[1.02] hover:shadow-xl hover:border-blue-200/70 transition-all duration-300 animate-fade-in-up"
							style={{ animationDelay: `${i * 150}ms` }}
						>
							<span className="text-5xl drop-shadow-lg animate-bounce-slow">
								{s.icon}
							</span>
							<div>
								<div className="font-bold text-xl text-blue-700 mb-1">
									{s.title}
								</div>
								<div className="text-gray-700">{s.desc}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
