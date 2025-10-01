import React from "react";
import { Link } from "react-router-dom";

// NOTE: Place images in /public/images/ : hero.jpg, gallery1.jpg ... gallery3.jpg, testimonial1.jpg if desired.
// You can change the file names or paths below as needed.

const featureItems = [
	{
		title: "Space Planning",
		desc: "Optimized layouts that balance flow, function, and aesthetics.",
		icon: (
			<svg
				className="w-8 h-8 text-indigo-600"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3.75 3.75h16.5v16.5H3.75zM9 3.75v16.5M3.75 9h16.5"
				/>
			</svg>
		),
	},
	{
		title: "Furniture Curation",
		desc: "Sourcing signature pieces that elevate every room.",
		icon: (
			<svg
				className="w-8 h-8 text-indigo-600"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M4 6h16M4 10h16M4 14h16M4 18h16"
				/>
			</svg>
		),
	},
	{
		title: "Lighting Design",
		desc: "Layered lighting concepts that create mood and depth.",
		icon: (
			<svg
				className="w-8 h-8 text-indigo-600"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 3v4m0 10v4m6-10h4M2 11h4m10.95 4.95 2.828 2.828M4.222 6.222 7.05 9.05m0 6.9-2.828 2.828m14.556-14.556L16.95 9.05"
				/>
			</svg>
		),
	},
	{
		title: "Project Management",
		desc: "End‑to‑end coordination ensuring on‑time delivery.",
		icon: (
			<svg
				className="w-8 h-8 text-indigo-600"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3 7h18M3 12h12m-6 5h12"
				/>
			</svg>
		),
	},
];

const stats = [
	{ label: "Projects Delivered", value: "120+" },
	{ label: "Happy Clients", value: "95%" },
	{ label: "Design Awards", value: "15" },
	{ label: "Years Experience", value: "10+" },
];

const testimonials = [
	{
		quote:
			"They transformed our space beyond expectations—functional, elegant, and welcoming.",
		name: "Ananya R.",
		role: "Homeowner",
	},
	{
		quote:
			"Professional team with impeccable taste and flawless execution.",
		name: "Rahul S.",
		role: "Office Renovation",
	},
];

const Home = () => {
	return (
		<div className="w-full text-gray-800">
			{/* Hero Section */}
			<section className="relative h-[80vh] min-h-[560px] flex items-center justify-center overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{ backgroundImage: "url(/images/hero.jpg)" }}
					aria-label="Hero background"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
				<div className="relative z-10 px-6 max-w-4xl text-center text-white">
					<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
						Elevate Your Interior Experience
					</h1>
					<p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
						Bespoke design solutions blending functionality, comfort, and signature
						style. From concept to completion, we craft environments that inspire.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							to="/gallery"
							className="px-8 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 font-medium shadow-lg shadow-indigo-600/30 transition"
						>
							View Gallery
						</Link>
						<Link
							to="/services"
							className="px-8 py-3 rounded-md bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 font-medium transition"
						>
							Our Services
						</Link>
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
						What We Do
					</h2>
					<p className="text-center max-w-2xl mx-auto text-gray-600 mb-14">
						A multidisciplinary approach delivering cohesive interior
						atmospheres—meticulous planning, curated materials, and refined
						detailing.
					</p>
					<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
						{featureItems.map((f) => (
							<div
								key={f.title}
								className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:border-indigo-200 shadow-sm hover:shadow-lg transition relative overflow-hidden"
							>
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.12),transparent)]" />
								<div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50 group-hover:scale-110 transition">
									{f.icon}
								</div>
								<h3 className="text-xl font-semibold mb-2">{f.title}</h3>
								<p className="text-sm leading-relaxed text-gray-600">
									{f.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Showcase Preview */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-6">
					<div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold mb-3">
								Signature Looks
							</h2>
							<p className="text-gray-600 max-w-xl">
								A glimpse at recent transformations—crafted with material harmony,
								tonal balance, and human-centered comfort.
							</p>
						</div>
						<Link
							to="/gallery"
							className="self-start md:self-end text-indigo-600 font-medium hover:underline"
						>
							Explore Full Gallery →
						</Link>
					</div>
					<div className="grid gap-6 md:grid-cols-3">
						{[1, 2, 3].map((i) => (
							<div
								key={i}
								className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
							>
								<img
									src={`/images/gallery${i}.jpg`}
									alt={`Design showcase ${i}`}
									className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
								/>
								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end p-4">
									<span className="text-white font-medium opacity-0 group-hover:opacity-100 transition">
										Project {i}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Stats */}
			<section className="py-14 bg-white">
				<div className="container mx-auto px-6">
					<div className="grid gap-8 md:grid-cols-4 text-center">
						{stats.map((s) => (
							<div
								key={s.label}
								className="p-6 rounded-lg bg-gradient-to-b from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-md transition"
							>
								<div className="text-3xl md:text-4xl font-extrabold text-indigo-600 mb-2">
									{s.value}
								</div>
								<div className="text-sm font-medium tracking-wide text-gray-600 uppercase">
									{s.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-24 bg-gray-50 relative">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.08),transparent)]" />
				<div className="relative container mx-auto px-6">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
						Client Voices
					</h2>
					<div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
						{testimonials.map((t) => (
							<div
								key={t.name}
								className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden"
							>
								<div className="absolute -top-6 -left-4 text-8xl text-indigo-100 font-serif select-none">
									“
								</div>
								<p className="text-gray-700 mb-6 leading-relaxed">
									{t.quote}
								</p>
								<div className="font-semibold text-indigo-600">{t.name}</div>
								<div className="text-xs tracking-wide text-gray-500 uppercase">
									{t.role}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="py-24 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-700" />
				<div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/images/gallery4.jpg')] bg-cover bg-center" />
				<div className="relative container mx-auto px-6 text-center text-white max-w-3xl">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Let’s Shape Your Story in Space
					</h2>
					<p className="text-indigo-100 mb-8 leading-relaxed">
						Partner with us to craft interiors that resonate with identity,
						intention, and tactile delight. Every surface, line, and gradient of
						light thoughtfully orchestrated.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							to="/contact"
							className="px-8 py-3 rounded-md bg-white text-indigo-700 font-medium shadow hover:shadow-lg transition"
						>
							Start a Project
						</Link>
						<Link
							to="/services"
							className="px-8 py-3 rounded-md bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 font-medium transition"
						>
							View Services
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
