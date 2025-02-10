import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdMail, MdOutlineKeyboardArrowDown, MdPhone } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import { TbApiApp } from "react-icons/tb";
import { MdCorporateFare } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { authApi } from "../../mocks/auth";
import RequestPopUp from "../../Component/RequesPopUp/RequestPopUp";
const Nav = () => {
	const [details, setdetails] = useState([]);
	const [support, setsupport] = useState("");
	const [login, setLogin] = useState();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [openProduct, setopenProduct] = useState(false);

	const nav = useNavigate();
	const [solution, setSolution] = useState(false);

	const Menuhandler = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	useEffect(() => {
		const token = localStorage.getItem("authToken");
		setLogin(token);
	}, []);

	const logoutHandler = () => {
		const token = localStorage.removeItem("authToken");
		setLogin(false);
		nav("/login");
	};
	const clickHandler = () => {
		setsupport(!support);
	};
	const contact = async () => {
		const result = await authApi.contactinfo();
		console.log(result);

		setdetails(result);
	};
	useEffect(() => {
		contact();
	}, []);
	return (
		<>
			<div className="sticky top-0 z-[10000] shadow-lg bg-white">
				<nav class="border-gray-200 lg:px-4 px-3 py-1">
					<div class="  flex flex-wrap items-center justify-between ">
						<div className="flex items-center  gap-5">
							<div className="block lg:hidden">
								<button onClick={Menuhandler} className="">
									{isMenuOpen ? <RxCross2 /> : <FaBars />}
								</button>
							</div>
							<div>
								<h1 class="self-center text-primary text-3xl font-semibold whitespace-nowrap">
									Duholiya
								</h1>
							</div>
						</div>

						<div className="relative flex justify-end gap-6 items-center text-lg font-medium text-gray-700">
							<span>Sales |</span>
							<span className="flex items-center cursor-pointer">
								24*7 Support
								<span
									onClick={clickHandler}
									className="ml-1 transition-transform duration-300 ease-in-out transform">
									<MdOutlineKeyboardArrowDown size={22} />
								</span>
							</span>

							{/* Dropdown Menu */}
							<div
								id="dropdownNavbar"
								className={`absolute top-10 right-0 bg-white shadow-lg rounded-lg w-60 transition-all duration-300 ease-in-out 
    ${
			support ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
		}`}>
								<ul className="py-2">
									{details?.data
										?.filter((item) => item.contactType === "Support")
										?.map((item, i) => (
											<li
												key={i}
												className="px-4 py-3 flex flex-col gap-3 border-b last:border-none">
												{/* Phone and Email Column Layout */}
												<div className="flex flex-col gap-2">
													{/* Phone */}
													{Array.isArray(item.email) &&
														item.email.map((email, idx) => (
															<div
																key={idx}
																className="flex  items-center space-x-2 ">
																<MdMail className="" />
																<span className="">{email}</span>
															</div>
														))}

													{/* Email */}
													{Array.isArray(item.phone) &&
														item.phone.map((phone, idx) => (
															<div
																key={idx}
																className="flex items-center space-x-2 mt-2">
																<MdPhone className="" />
																<span>{phone}</span>
															</div>
														))}
												</div>
											</li>
										))}
								</ul>
							</div>
						</div>
					</div>
					<div className="flex   justify-end ">
						<div class="hidden  lg:block w-full md:w-auto" id="mobile-menu">
							<ul class="flex-col py-1 lg:flex-row flex items-center justify-center gap-9 md:text-sm md:font-medium">
								<li className=" ">
									<NavLink
										to={"/"}
										onClick={() => {
											setopenProduct(false);
											setSolution(false);
										}}
										className={({ isActive }) =>
											`${
												isActive
													? "text-primary font-bold"
													: "text-[#545454] font-bold"
											} md:bg-transparent block pl-3 pr-4 text-[18px]   md:p-0 rounded focus:outline-none`
										}>
										Home
									</NavLink>
								</li>
								<li className="relative flex items-center  ">
									<NavLink
										to={"/assessment"}
										onClick={() => {
											setopenProduct(false);
											setSolution(false);
										}}
										className={({ isActive }) =>
											`${
												isActive
													? "text-primary font-bold"
													: "text-[#545454] font-bold"
											} md:bg-transparent flex items-center text-[18px]   pl-3 pr-4    md:p-0 rounded focus:outline-none`
										}>
										Product
									</NavLink>
									<span className="cursor-pointer text-[#545454]">
										<MdOutlineKeyboardArrowDown
											onClick={() => {
												setopenProduct(!openProduct);
												setSolution(false);
											}}
											size={20}
										/>
									</span>

									<div
										id="dropdownNavbar"
										className={`${
											openProduct ? "block " : "hidden"
										} bg-white  absolute top-8 text-base z-10 list-none divide-y divide-gray-100 rounded shadow w-56`}>
										<ul className="py-1" aria-labelledby="dropdownLargeButton">
											<li className="flex items-center  gap-2 px-3 py-3">
												<span className="text-primary">
													<LuNotebookPen size={20} />
												</span>
												<a
													href="#"
													className="text-[18px] text-primary block  ">
													Assessment Platform
												</a>
											</li>
											<li className="flex items-center  gap-2 px-3 py-3">
												<span className="text-primary">
													<MdLibraryBooks size={20} />
												</span>
												<NavLink
													onClick={() => setopenProduct(false)}
													to={"/assessmentslibrary"}
													className="text-[18px] text-primary block ">
													Assessment Library
												</NavLink>
											</li>
											<li className="flex items-center  gap-2 px-3 py-3">
												<span className="text-primary">
													<TbApiApp size={20} />
												</span>
												<NavLink href="#" className="text-[18px] text-primary">
													Assessment API
												</NavLink>
											</li>
										</ul>
									</div>
								</li>
								<li className="relative flex items-center ">
									<NavLink
										to={"/solution"}
										onClick={() => {
											setopenProduct(false);
											setSolution(false);
										}}
										className={({ isActive }) =>
											`${
												isActive
													? "text-primary font-bold"
													: "text-[#545454] font-bold"
											} md:bg-transparent flex items-center text-[18px]   pl-3 pr-4    md:p-0 rounded focus:outline-none`
										}>
										Services
									</NavLink>
									<span className="cursor-pointer text-[#545454]">
										<MdOutlineKeyboardArrowDown
											onClick={() => {
												setSolution(!solution);
												setopenProduct(false);
											}}
											size={20}
										/>
									</span>

									<div
										className={`${
											solution ? "block " : "hidden"
										} bg-white  absolute top-8 text-base z-10 list-none divide-y divide-gray-100 rounded shadow w-56`}>
										<ul className="py-1" aria-labelledby="dropdownLargeButton">
											<li className="flex items-center  gap-2 px-3 py-3">
												<span className="text-primary">
													<MdCorporateFare size={20} />
												</span>
												<a href="#" className="text-[18px] text-primary   ">
													Corporate
												</a>
											</li>
											<li className="flex items-center  gap-2 px-3 py-3">
												<span className="text-primary">
													<HiAcademicCap size={20} />
												</span>
												<NavLink
													onClick={() => setopenProduct(false)}
													className="text-[18px] text-primary  ">
													Academics
												</NavLink>
											</li>
										</ul>
									</div>
								</li>
								<li className="">
									<NavLink
										to={"/contact"}
										onClick={() => {
											setopenProduct(false);
											setSolution(false);
										}}
										className={({ isActive }) =>
											`${
												isActive
													? "text-primary font-bold"
													: "text-[#545454] font-bold"
											} md:bg-transparent block pl-3 pr-4 text-[18px]   md:p-0 rounded focus:outline-none`
										}>
										Contact
									</NavLink>
								</li>
								<li className=" ">
									{login ? (
										<button
											onClick={logoutHandler}
											className=" text-black rounded-lg border-2 border-black px-2 py-2">
											Logout
										</button>
									) : (
										<NavLink
											to={"/login"}
											onClick={() => {
												setopenProduct(false);
												setSolution(false);
											}}
											className={({ isActive }) =>
												`${
													isActive
														? "text-primary font-bold"
														: "text-[#545454] font-bold"
												} md:bg-transparent block pl-3 pr-4 text-[18px]   md:p-0 rounded focus:outline-none`
											}>
											Login
										</NavLink>
									)}
								</li>
								<li className="rounded-full border-2 border-black px-5 ">
									<NavLink
										to={"/requestdemo"}
										onClick={() => {
											setopenProduct(false);
											setSolution(false);
										}}
										className={({ isActive }) =>
											`${
												isActive
													? "text-primary font-bold"
													: "text-[#545454] font-bold"
											} md:bg-transparent block py-1 text-[18px]    rounded focus:outline-none`
										}>
										Request A Demo
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, translateX: -60 }}
							whileInView={{ opacity: 1, translateX: 0 }}
							transition={{
								duration: 0.2,
							}}
							className="flex py-4 px-3 z-20 fixed left-0  w-9/2 shadow-2xl h-screen top-11 bg-white  ">
							<div>
								<div class=" w-full ">
									<ul class="flex-col py-1  flex gap-9 ">
										<li className=" ">
											<NavLink
												to={"/"}
												onClick={() => {
													setopenProduct(false);
													setSolution(false);
													setIsMenuOpen(false);
												}}
												className={({ isActive }) =>
													`${
														isActive
															? "text-primary font-bold"
															: "text-[#545454] font-bold"
													} md:bg-transparent block pl-3 pr-4 text-[18px]   md:p-0 rounded focus:outline-none`
												}>
												Home
											</NavLink>
										</li>
										<li className="relative flex items-center  ">
											<NavLink
												to={"/assessment"}
												onClick={() => {
													setopenProduct(false);
													setSolution(false);
													setIsMenuOpen(false);
												}}
												className={({ isActive }) =>
													`${
														isActive
															? "text-primary font-bold"
															: "text-[#545454] font-bold"
													} md:bg-transparent flex items-center text-[18px]   pl-3 pr-4    md:p-0 rounded focus:outline-none`
												}>
												Product
											</NavLink>
											<span className="cursor-pointer text-[#545454]">
												<MdOutlineKeyboardArrowDown
													onClick={() => {
														setopenProduct(!openProduct);
														setSolution(false);
													}}
													size={20}
												/>
											</span>

											<div
												className={`${
													openProduct ? "block " : "hidden"
												} bg-white  absolute top-8 text-base z-10 list-none divide-y divide-gray-100 rounded shadow w-40`}>
												<ul
													className="py-1"
													aria-labelledby="dropdownLargeButton">
													<li className="flex items-center  gap-2 px-3 py-3">
														<span className="text-primary">
															<LuNotebookPen size={15} />
														</span>
														<a
															href="#"
															className="text-[12px] text-primary block  ">
															Assessment Platform
														</a>
													</li>
													<li className="flex items-center  gap-2 px-3 py-3">
														<span className="text-primary">
															<MdLibraryBooks size={15} />
														</span>
														<NavLink
															onClick={() => {
																setopenProduct(false);
																setIsMenuOpen(false);
															}}
															to={"/assessmentslibrary"}
															className="text-[12px] text-primary block ">
															Assessment Library
														</NavLink>
													</li>
													<li className="flex items-center  gap-2 px-3 py-3">
														<span className="text-primary">
															<TbApiApp size={15} />
														</span>
														<NavLink
															href="#"
															className="text-[12px] text-primary">
															Assessment API
														</NavLink>
													</li>
												</ul>
											</div>
										</li>
										<li className="relative flex items-center ">
											<NavLink
												to={"/solution"}
												onClick={() => {
													setopenProduct(false);
													setSolution(false);
													setIsMenuOpen(false);
												}}
												className={({ isActive }) =>
													`${
														isActive
															? "text-primary font-bold"
															: "text-[#545454] font-bold"
													} md:bg-transparent flex items-center text-[18px]   pl-3 pr-4    md:p-0 rounded focus:outline-none`
												}>
												Services
											</NavLink>
											<span className="cursor-pointer text-[#545454]">
												<MdOutlineKeyboardArrowDown
													onClick={() => {
														setSolution(!solution);
														setopenProduct(false);
													}}
													size={20}
												/>
											</span>

											<div
												className={`${
													solution ? "block " : "hidden"
												} bg-white  absolute top-8 text-base z-10 list-none divide-y divide-gray-100 rounded shadow w-40`}>
												<ul
													className="py-1"
													aria-labelledby="dropdownLargeButton">
													<li className="flex items-center  gap-2 px-3 py-3">
														<span className="text-primary">
															<MdCorporateFare size={15} />
														</span>
														<a href="#" className="text-[12px] text-primary   ">
															Corporate
														</a>
													</li>
													<li className="flex items-center  gap-2 px-3 py-3">
														<span className="text-primary">
															<HiAcademicCap size={15} />
														</span>
														<NavLink
															onClick={() => setopenProduct(false)}
															className="text-[12px] text-primary  ">
															Academics
														</NavLink>
													</li>
												</ul>
											</div>
										</li>
										<li className="">
											<NavLink
												to={"/contact"}
												onClick={() => {
													setopenProduct(false);
													setSolution(false);
													setIsMenuOpen(false);
												}}
												className={({ isActive }) =>
													`${
														isActive
															? "text-primary font-bold"
															: "text-[#545454] font-bold"
													} md:bg-transparent block pl-3 pr-4 text-[18px]   md:p-0 rounded focus:outline-none`
												}>
												Contact
											</NavLink>
										</li>
										<li className=" ">
											{login ? (
												<button
													onClick={logoutHandler}
													className="px-8   text-black rounded-lg border-2 border-black py-2">
													Logout
												</button>
											) : (
												<NavLink
													to={"/login"}
													onClick={() => {
														setopenProduct(false);
														setSolution(false);
														setIsMenuOpen(false);
													}}
													className={({ isActive }) =>
														`${
															isActive
																? "text-primary font-bold"
																: "text-[#545454] font-bold"
														} md:bg-transparent block pl-3 pr-4 text-[18px]   md:p-0 rounded focus:outline-none`
													}>
													Login
												</NavLink>
											)}
										</li>
										<li className="rounded-full border-2 border-black  ">
											<NavLink
												to={"/requestdemo"}
												onClick={() => {
													setopenProduct(false);
													setSolution(false);
													setIsMenuOpen(false);
												}}
												className={({ isActive }) =>
													`${
														isActive
															? "text-primary font-bold"
															: "text-[#545454] font-bold"
													} md:bg-transparent block py-1 text-[18px] px-8    rounded focus:outline-none`
												}>
												Request A Demo
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</motion.div>
					)}
				</nav>
			</div>
		</>
	);
};

export default Nav;
