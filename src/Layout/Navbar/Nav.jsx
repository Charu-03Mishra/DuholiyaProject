import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import { TbApiApp } from "react-icons/tb";
import { MdContactPhone } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { MdCorporateFare } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<nav className="w-full z-[10000] mx-auto py-3     px-4  bg-white shadow-md">
				<div className="flex justify-between items-center">
					<div className="text-xl font-semibold text-gray-800">
						<h1>Duholiya</h1>
					</div>
					<div className="flex gap-5 ">
						<h1 className="font-bold">Sales</h1>
						<div className="relative group font-bold flex">
							<p>24 * 7 Support</p>

							<span>
								<MdOutlineKeyboardArrowDown size={30} />
							</span>
							<div className="hidden group-hover:block absolute top-7 right-0 z-10 bg-white text-black w-52 shadow-lg rounded-lg">
								<div className=" w-full h-14 px-3 hover:bg-slate-100 transition">
									<Link
										to=""
										onClick={() => setIsMenuOpen(false)}
										className="flex justify-center3">
										<MdMail size={25} className="mt-5" />
										<span className=" ml-3 mt-5 text-sm font-medium">
											xyz@gmail.com
										</span>
									</Link>
								</div>
								<div className="flex items-center w-full h-12 px-3 hover:bg-slate-100 transition">
									<MdContactPhone size={25} />
									<span className="ml-3 text-sm font-medium">12345567566</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Mobile Menu Toggle */}
				<div className="lg:hidden block">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="text-gray-800 text-2xl">
						{isMenuOpen ? <FiX /> : <FiMenu />}
					</button>
				</div>

				<div
					className={`absolute flex lg:justify-end justify-center lg:relative top-20 left-0 lg:top-auto w-full lg:w-auto bg-gray-100 lg:bg-transparent shadow-lg lg:shadow-none transition-all duration-300 ease-in-out ${
						isMenuOpen ? "block" : "hidden lg:flex"
					}`}>
					<ul className="flex flex-col lg:flex-row lg:text-lg text-2xl gap-8 items-center p-4 lg:p-0">
						<li>
							<NavLink
								to="/"
								onClick={() => setIsMenuOpen(false)}
								className={({ isActive }) =>
									` ${
										isActive ? "text-orange-700" : "text-black "
									} hover:text-orange-700 font-bold transition`
								}>
								Home
							</NavLink>
						</li>

						<div className="relative group">
							<li className="">
								<NavLink
									to="/assessment"
									className={({ isActive }) =>
										` ${
											isActive ? "text-orange-700" : "text-black "
										} hover:text-orange-700 font-bold transition flex items-center gap-1 cursor-pointer `
									}>
									Product
									<MdOutlineKeyboardArrowDown size={20} />
								</NavLink>
							</li>
							<div className="hidden group-hover:block absolute top-7 left-0 z-10 bg-gray-800 text-white w-52 shadow-lg rounded-lg">
								<div className=" w-full h-14 px-3 hover:bg-gray-700 transition">
									<Link
										onClick={() => setIsMenuOpen(false)}
										className="flex justify-center3">
										<LuNotebookPen size={25} className="mt-5" />
										<span className=" ml-3 mt-5 text-sm font-medium">
											Assessment Platform
										</span>
									</Link>
								</div>
								<div className="flex items-center w-full h-12 px-3 hover:bg-gray-700 transition">
									<MdLibraryBooks size={25} />
									<span className="ml-3 text-sm font-medium">
										Assessment Library
									</span>
								</div>
								<div className="flex items-center w-full h-12 px-3 hover:bg-gray-700 transition">
									<TbApiApp size={25} />
									<span className="ml-3 text-sm font-medium">
										Assessment API
									</span>
								</div>
							</div>
						</div>

						<div className="relative group">
							<NavLink
								to="/solution"
								className={({ isActive }) =>
									` ${
										isActive ? "text-orange-700" : "text-black "
									} hover:text-orange-700 font-bold transition flex items-center gap-1 cursor-pointer `
								}>
								Solutons
								<MdOutlineKeyboardArrowDown size={20} />
							</NavLink>
							<div className="hidden group-hover:block absolute top-7 left-0 z-10 bg-gray-800 text-white w-52 shadow-lg rounded-xl">
								<div className="flex items-center w-full h-12 px-3 rounded-lg hover:bg-gray-700 transition">
									<Link
										to="/solution"
										onClick={() => setIsMenuOpen(false)}
										className="flex justify-center3">
										<LuNotebookPen size={25} className="mt-5" />
										<span className=" ml-3 mt-5 text-sm font-medium">
											Corporate
										</span>
									</Link>
								</div>
								<div className="flex items-center w-full h-12 px-3 hover:bg-gray-700 transition">
									<HiAcademicCap size={25} />
									<span className="ml-3 text-sm font-medium">Academics</span>
								</div>
							</div>
						</div>

						<li>
							<NavLink
								to="/contact"
								onClick={() => setIsMenuOpen(false)}
								className={({ isActive }) =>
									` ${
										isActive ? "text-orange-700" : "text-black"
									} hover:text-orange-700 font-bold transition`
								}>
								Contact Us
							</NavLink>
						</li>

						<li>
							<NavLink to="/login" onClick={() => setIsMenuOpen(false)}>
								<button className="px-4 py-2 bg-transparent text-black border-2 rounded-md hover:border-orange-700 hover:text-orange-700 transition">
									Login
								</button>
							</NavLink>
						</li>

						<li>
							<NavLink to="/Demo" onClick={() => setIsMenuOpen(false)}>
								<button className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition">
									Request A Demo
								</button>
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Nav;
