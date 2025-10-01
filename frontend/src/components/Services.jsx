import React, { useEffect, useState } from "react";
import API from "../api";

const fallbackServices = [
	{
		_id: "fs1",
		icon: "🛋️",
		title: "Interior Styling",
		description:
			"Curating furnishings, textiles & decor to elevate existing spaces with cohesive personality.",
	},
	{
		_id: "fs2",
		icon: "📐",
		title: "Space Planning",
		description:
			"Functional layouts maximizing circulation, ergonomics & natural light usage.",
	},
	{
		_id: "fs3",
		icon: "🎨",
		title: "Material & Palette",
		description:
			"Refined finishes, color strategy & tactile layering for timeless visual harmony.",
	},
	{
		_id: "fs4",
		icon: "💡",
		title: "Lighting Design",
		description:
			"Ambient, task & accent lighting schemes adding depth, comfort & drama.",
	},
	{
		_id: "fs5",
		icon: "🏗️",
		title: "Renovation Coordination",
		description:
			"End‑to‑end project oversight with contractors, vendors & quality checks.",
	},
	{
		_id: "fs6",
		icon: "📷",
		title: "3D Visualization",
		description:
			"High‑fidelity renders & mood boards to preview concepts before build.",
	},
];

const processSteps = [
	{
		step: 1,
		title: "Consult",
		text: "We listen to aspirations, lifestyle needs & spatial constraints.",
	},
	{
		step: 2,
		title: "Concept",
		text: "Mood boards, zoning & preliminary palette direction.",
	},
	{
		step: 3,
		title: "Design",
		text: "Detailed drawings, materials, furnishings & lighting layers.",
	},
	{
		step: 4,
		title: "Execute",
		text: "Procurement, site coordination & progress quality reviews.",
	},
	{
		step: 5,
		title: "Style",
		text: "Final staging, styling accents & finishing touches.",
	},
];

const Services = () => {
	const [services, setServices] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		API.get("/services")
			.then((res) => setServices(res.data || []))
			.catch(() => {})
			.finally(() => setLoading(false));
	}, []);

	const display = services.length ? services : fallbackServices;

	return (
		<div className="w-full">
			{/* Header / Hero */}
			<section className="relative h-[46vh] min-h-[360px] flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 bg-[url('/images/gallery2.jpg')] bg-cover bg-center" />
				<div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
				<div className="relative z-10 max-w-3xl text-center px-6">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
						Our Services
					</h1>
					<p className="text-gray-200 text-lg leading-relaxed">
						Holistic interior design solutions—strategic planning, tactile
						materiality & curated expression—crafted to enhance how you live and
						work.
					</p>
				</div>
			</section>

			{/* Services Grid */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-6">
					<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								What We Deliver
							</h2>
							<p className="text-gray-600 max-w-2xl">
								Tailored packages or a la carte expertise—each service integrates
								form, proportion, light & material nuance for lasting impact.
							</p>
						</div>
						<div className="text-sm text-gray-500 md:text-right">
							{loading
								? "Loading services..."
								: services.length
								? "Loaded from API"
								: "Showing sample offerings"}
						</div>
					</div>

					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{display.map((s) => (
							<div
								key={s._id}
								className="group relative bg-white/80 backdrop-blur rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-200 transition overflow-hidden"
							>
								<div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-indigo-50 opacity-0 group-hover:opacity-100 blur-2xl transition" />
								<div className="flex items-center gap-4 mb-4">
									<div className="text-4xl drop-shadow-sm">
										{s.icon || "✨"}
									</div>
									<h3 className="text-xl font-semibold leading-snug">
										{s.title}
									</h3>
								</div>
								<p className="text-gray-600 text-sm leading-relaxed mb-4">
									{s.description}
								</p>
								{s.details && (
									<p className="text-indigo-600 text-xs font-medium uppercase tracking-wide">
										{s.details}
									</p>
								)}
								<div className="mt-4 flex items-center text-indigo-600 font-medium text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition">
									Learn more
									<span className="ml-1">→</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Process Timeline */}
			<section className="py-24 bg-white relative overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(99,102,241,0.06),transparent)]" />
				<div className="relative container mx-auto px-6">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
						Our Process
					</h2>
					<p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
						A transparent, collaborative framework guiding each project from spark
						to styled reveal.
					</p>
					<div className="flex flex-col md:flex-row md:justify-between gap-10">
						{processSteps.map((p, idx) => (
							<div key={p.step} className="relative flex-1">
								<div className="mb-6 flex items-center gap-4">
									<div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold shadow-md">
										{p.step}
									</div>
									<h3 className="text-xl font-semibold">{p.title}</h3>
								</div>
								<p className="text-gray-600 text-sm leading-relaxed pr-4 md:pr-6">
									{p.text}
								</p>
								{idx < processSteps.length - 1 && (
									<div className="hidden md:block absolute top-6 left-[72px] right-0 h-px bg-gradient-to-r from-indigo-300 via-indigo-200 to-transparent" />
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-24 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-800" />
				<div className="absolute inset-0 opacity-25 mix-blend-overlay bg-[url('/images/gallery3.jpg')] bg-cover bg-center" />
				<div className="relative container mx-auto px-6 text-center text-white max-w-3xl">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Design That Resonates
					</h2>
					<p className="text-indigo-100 mb-8 leading-relaxed">
						Whether a single room refresh or a full-scale transformation, we
						translate vision into spatial poetry—thoughtful, practical,
						unmistakably yours.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="/contact"
							className="px-8 py-3 rounded-md bg-white text-indigo-700 font-medium shadow hover:shadow-lg transition"
						>
							Start a Consultation
						</a>
						<a
							href="/gallery"
							className="px-8 py-3 rounded-md bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 font-medium transition"
						>
							View Inspiration
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Services;
