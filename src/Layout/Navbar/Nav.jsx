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
import LoginPopUp from "../../Content/Home/LoginPopUp";
import Contacts from "../../Content/Contact/Contacts";

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [openProduct, setopenProduct] = useState(false);
	const nav = useNavigate();
	const [login, setLogin] = useState(false);
	const [contact, setContact] = useState(false);

	const handlerClose = () => {
		setContact(false);
		nav("/");
	};
	console.log(login);

	let handleLogin = () => {
		setLogin(true);
	};
	let closehandle = () => {
		setLogin(false);
		nav("/");
	};
	let handleProduct = () => {
		setopenProduct(!openProduct);
	};

	return (
		<>
			<nav className="w-full sticky top-0 z-[100000] overflow-y-scroll max-h-screen  bg-white  mx-auto pb-2  px-4 shadow-md">
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-5 ">
						<div className="lg:hidden block">
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="text-gray-800 text-3xl py-3">
								<span className=" transition-all duration-1000 ease-in-out ">
									{isMenuOpen ? <FiX className="" /> : <FiMenu className="" />}
								</span>
							</button>
						</div>

						<div className="text-3xl text-center text-primary">
							<h1>Duholiya</h1>
						</div>
					</div>

					<div className="flex justify-center gap-5 ">
						<h1 className="">Sales</h1>
						<div className="relative group  flex ">
							<p>24 * 7 Support</p>

							<span>
								<MdOutlineKeyboardArrowDown size={30} />
							</span>
							<div className="hidden  group-hover:block absolute top-5 right-0 z-[1000] bg-purple-400 text-black w-52 shadow-lg rounded-lg">
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

				<div
					className={`sticky z-50 h-[100vh] bottom-0 top-[72px]   w-72 flex lg:justify-end lg:relative  left-0 lg:top-auto lg:h-10 lg:w-auto bg-white lg:bg-transparent lg:shadow-none   ${
						isMenuOpen ? "block" : " hidden lg:flex"
					}`}>
					<div className={`flex transition-all duration-300 ease-in-out`}>
						<ul className="flex w-full py-7 flex-col lg:flex-row lg:text-lg text-2xl gap-8 lg:items-center lg:p-0">
							<li>
								<NavLink
									to="/"
									onClick={() => {
										setIsMenuOpen(false);
										setopenProduct(false);
										setLogin(false);
									}}
									className={({ isActive }) =>
										`${
											isActive ? "text-primary font-bold" : "text-black"
										}  px-5 lg:px-0 transition`
									}>
									Home
								</NavLink>
							</li>

							<div className="relative ">
								<li className="flex items-center gap-1">
									<NavLink
										onClick={() => setIsMenuOpen(false)}
										to="/assessment"
										className={({ isActive }) =>
											`${
												isActive ? "text-primary font-bold" : "text-black"
											} flex items-center gap-1 px-5 lg:px-0 cursor-pointer`
										}>
										Product
									</NavLink>
									<span className="hidden lg:block cursor-pointer">
										<MdOutlineKeyboardArrowDown
											onClick={handleProduct}
											size={20}
										/>
									</span>
								</li>
								<div
									className={`${
										openProduct
											? "absolute top-7 px-4 py-3 left-0 z-10 hidden lg:block bg-white text-primary w-64 shadow-lg rounded-lg transition-all duration-300 ease-in-out"
											: "text-primary lg:hidden block  w-72  px-10 py-3"
									}`}>
									<div className="flex py-2">
										<Link
											onClick={() => setIsMenuOpen(false)}
											className="flex items-center gap-2">
											<LuNotebookPen size={20} className="" />
											<span className="  text-lg font-medium">
												Assessment Platform
											</span>
										</Link>
									</div>
									<div className="flex py-2">
										<Link
											to="/assessmentslibrary"
											className="flex items-center gap-2">
											<MdLibraryBooks size={20} />
											<span className=" text-lg font-medium">
												Assessment Library
											</span>
										</Link>
									</div>
									<div className="flex py-2">
										<Link to="" className="flex items-center gap-2">
											<TbApiApp size={20} />
											<span className="text-lg font-medium">
												Assessment API
											</span>
										</Link>
									</div>
								</div>
							</div>

							<div className="relative group">
								<NavLink
									to="/solution"
									className={({ isActive }) =>
										`${
											isActive ? "text-primary font-bold" : "text-black"
										}  flex items-center gap-1 px-5 lg:px-0 cursor-pointer`
									}>
									Solutions
									<MdOutlineKeyboardArrowDown size={20} />
								</NavLink>
								<div className="hidden group-hover:block absolute top-7 left-0 z-10 bg-white text-primary w-52 shadow-lg rounded-xl transition-all duration-300 ease-in-out">
									<div className="flex items-center w-full h-12 px-3 rounded-lg">
										<Link
											to="/solution"
											onClick={() => setIsMenuOpen(false)}
											className="flex justify-center3">
											<LuNotebookPen size={25} className="mt-5" />
											<span className="ml-3 mt-5 text-sm font-medium">
												Corporate
											</span>
										</Link>
									</div>
									<div className="flex items-center w-full h-12 px-3">
										<HiAcademicCap size={25} />
										<span className="ml-3 text-sm font-medium">Academics</span>
									</div>
								</div>
							</div>

							<li>
								<NavLink
									to={"/contact"}
									className={({ isActive }) =>
										`${
											isActive ? "text-primary font-bold" : "text-black"
										}  cursor-pointer px-5 lg:px-0`
									}>
									Contact
								</NavLink>
							</li>

							<li className="px-5 lg:px-0">
								<NavLink to={"/login"}>
									<button className="px-3 py-2 lg:px-4 lg:py-2 bg-transparent text-black border-2 rounded-md hover:bg-black hover:text-white transition">
										Login
									</button>
								</NavLink>
							</li>

							<li className="px-5 lg:px-0">
								<NavLink
									to={"/requestdemo"}
									className={({ isActive }) =>
										`${
											isActive ? "text-primary font-bold" : "text-black"
										}  cursor-pointer px-5 lg:px-0`
									}>
									<button className="px-6 py-1 border-2 hidden lg:block border-black  rounded-full transition">
										Request A Demo
									</button>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>

				{login && (
					<div className="absolute top-28 left-0 right-0 bottom-0">
						<LoginPopUp closehandle={closehandle} />
					</div>
				)}
				{contact && (
					<div className="absolute top-28  left-0 right-0 bottom-0">
						<Contacts handlerClose={handlerClose} />
					</div>
				)}
			</nav>
		</>
	);
};

export default Nav;
