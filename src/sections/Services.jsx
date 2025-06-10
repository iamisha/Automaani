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
			className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-950"
			id="services"
		>
			<div className="max-w-5xl mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-extrabold text-cyan-300 mb-12 text-center animate-fade-in-up">
					Our Services
				</h2>
				<div className="grid md:grid-cols-2 gap-10 mb-4">
					{services.map((s, i) => (
						<div
							key={s.title}
							className="bg-blue-900/80 backdrop-blur-md rounded-2xl shadow-xl p-10 flex items-start gap-6 border border-cyan-900 hover:scale-[1.03] hover:shadow-cyan-900 transition-transform duration-300 animate-fade-in-up"
							style={{ animationDelay: `${i * 80}ms` }}
						>
							<span className="text-5xl drop-shadow-lg animate-bounce-slow text-cyan-300">
								{s.icon}
							</span>
							<div>
								<div className="font-bold text-xl text-cyan-200 mb-1">
									{s.title}
								</div>
								<div className="text-blue-100">{s.desc}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
