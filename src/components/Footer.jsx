import React from "react";
import { Link } from "react-router-dom";
import { MarqueScroll } from "./Marque";
import ecellLogo from "../assets/e-cell_logo.png";

export default function Footer() {
	const socialLinks = [
		{ name: 'instagram', url: 'https://instagram.com/ecell_nitk' },
		{ name: 'linkedin', url: 'https://linkedin.com/company/ecell-nitk' },
		{ name: 'youtube', url: 'https://youtube.com/@ecellnitk' },
		{ name: 'whatsapp', url: 'https://wa.me/919574212640' },
		{ name: 'telegram', url: 'https://t.me/ecellnitk' },
		{ name: 'discord', url: 'https://discord.gg/ecellnitk' },
		{ name: 'twitter', url: 'https://twitter.com/ecell_nitk' },
		{ name: 'thread', url: 'https://www.threads.net/@ecell_nitk' }
	];

	const quickLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'Events', path: '/events' },
		{ name: 'Ambassadors', path: '/ambassadors' },
		{ name: 'Brochure', path: '/brochure' },
		{ name: 'Accommodation', path: '/accommodation' },
		{ name: 'About Us', path: '/about' },
		{ name: 'Contact', path: '/contact' },
		{ name: 'Team', path: '/team' },
		{ name: 'Blogs', path: '/blogs' },
		{ name: 'Newsletter', path: '/newsletter' }
	];

	return (
		<>
			<div className="bg-black py-4">
				<div className="container mx-auto flex justify-center gap-6">
					{socialLinks.map((social) => (
						<a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1e293b] rounded-full hover:bg-gray-700">
							<img src={`/${social.name}.svg`} alt={social.name} className="w-5 h-5" />
						</a>
					))}
				</div>
			</div>

			<MarqueScroll
				border="border-white"
				texts={["Entrepreneurship", "Startups", "Networking"]}
				colors={["white", "white", "white"]}
				angle={2}
				className="bg-black"
			/>

			<footer className="bg-gradient-to-r from-[#001b339a] to-[#4608009a] text-white py-12">
				<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
					<div className="mb-8 md:mb-0">
						<div className="flex items-center mb-4">
							<img
								src={ecellLogo}
								alt="E-Cell Logo"
								width={50}
								height={50}
								className="mr-2"
							/>
							<div>
								<h2 className="text-2xl font-bold">E-Cell</h2>
								<p className="text-sm text-blue-300">NITK Surathkal</p>
							</div>
						</div>
						<p className="mb-4 text-lg font-semibold">Follow Us on</p>
						<div className="flex space-x-4">
							{socialLinks.slice(0, 3).map((social) => (
								<a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1e293b] rounded-full hover:bg-gray-700">
									<img src={`/${social.name}.svg`} alt={social.name} className="w-5 h-5" />
								</a>
							))}
						</div>
					</div>

					<div className="hidden md:block">
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<div className="flex space-x-12">
							<ul className="space-y-2">
								{quickLinks.slice(0, 5).map((link) => (
									<li key={link.name}>
										<Link to={link.path} className="hover:text-gray-300">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
							<ul className="space-y-2">
								{quickLinks.slice(5).map((link) => (
									<li key={link.name}>
										<Link to={link.path} className="hover:text-gray-300">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="hidden md:block">
						<h3 className="text-lg font-semibold mb-4">Contact Us</h3>
						<ul className="space-y-2">
							<li className="flex items-center">
								<span className="mr-2">📧</span>
								<a href="mailto:ecell@nitk.edu.in" className="hover:text-gray-300 break-all">
									ecell@nitk.edu.in
								</a>
							</li>
							<li className="flex items-center">
								<span className="mr-2">📞</span>
								<a href="tel:+919574212640" className="hover:text-gray-300">
									+91-9574212640,
									<br />
									+91-9373266677
								</a>
							</li>
							<li className="flex items-start">
								<span className="mr-2">📍</span>
								<p>
									NITK, NH 66,
									<br />
									Srinivasnagar,
									<br />
									Surathkal Mangalore,
									<br />
									Karnataka - 575025
								</p>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
}

