import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300">
			<div className="container mx-auto px-4 py-8">
				<div className="mb-8 text-center">
					<form className="flex flex-col items-center">
						<label
							htmlFor="assessment"
							className="block text-lg font-medium text-white mb-4">
							Participate Now
						</label>
						<div className="flex items-center pl-4 bg-white border-2 border-gray-300 rounded-lg focus-within:border-blue-500 transition">
							<input
								type="text"
								name="assessment"
								autoComplete="off"
								className="flex-1 h-10 px-2 text-gray-800 placeholder-gray-500 focus:outline-none"
								placeholder="Assessment Key"
							/>
							<button
								type="submit"
								className="bg-red-500 text-white h-[50px] px-4 font-medium hover:bg-red-600 rounded-md">
								Enter
							</button>
						</div>
					</form>
				</div>

				<div className="flex px-10 flex-wrap justify-between items-start gap-8">
					<div>
						<h3 className="font-bold text-white mb-4">Information</h3>
						<ul className="space-y-2">
							<li>
								<Link className="hover:underline">+91 1234567890</Link>
							</li>
							<li>
								<Link className="hover:underline">support@duholiya.agency</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-bold text-white mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link className="hover:underline">Product</Link>
							</li>
							<li>
								<Link className="hover:underline">Information</Link>
							</li>
						</ul>
					</div>

					<div>
						<ul className="space-y-2 mt-10 ">
							<li>
								<Link className="hover:underline">24 x 7 Support</Link>
							</li>
							<li>
								<Link className="hover:underline">Policies</Link>
							</li>
						</ul>
					</div>
					<div>
						<ul className="space-y-2 mt-10">
							<li>
								<Link className="hover:underline">Terms & Conditions</Link>
							</li>
							<li>
								<Link className="hover:underline">Login/Signup</Link>
							</li>
						</ul>
					</div>

					<div className="flex mt-10 space-x-4">
						<Link aria-label="Facebook">
							<FaFacebook
								size={30}
								className="text-blue-300 hover:text-blue-400"
							/>
						</Link>
						<Link>
							<FaInstagram
								size={30}
								className="text-red-500 hover:text-red-600"
							/>
						</Link>
						<Link>
							<FaTwitter
								size={30}
								className="text-blue-500 hover:text-blue-600"
							/>
						</Link>
						<Link>
							<FaLinkedin
								size={30}
								className="text-blue-700 hover:text-blue-800"
							/>
						</Link>
					</div>
				</div>

				{/* Disclaimer Section */}
				<div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
					<p>
						Disclaimer: The content on this website is for informational
						purposes only.
					</p>
					<p>&copy; 2025 Duholiya. All rights reserved</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
