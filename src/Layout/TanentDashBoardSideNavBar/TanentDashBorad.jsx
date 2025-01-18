import React, { useEffect, useState } from "react";
import { LuUsersRound } from "react-icons/lu";
import { BiSolidUserPin } from "react-icons/bi";
import { FaCodeFork } from "react-icons/fa6";
import { BiSolidUserDetail } from "react-icons/bi";
import { GiShieldOpposition } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const TanentDashBorad = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate()
	
	return (
		<>
			<div className="flex">
				
				<button
					className="md:hidden p-4 focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
				</button>

				{/* Sidebar */}
				<div
					className={`${
						isOpen ? "block" : "hidden"
					} md:flex flex-col w-64 bg-white md:bg-transparent`}>
					<div className="flex flex-col flex-1 overflow-y-auto">
						<div className="flex-1 px-2 py-4">
							<NavLink
								to="/journey/hris/tanent"
								className={({ isActive }) =>
									`${
										isActive ? "bg-[#003262] text-white" : "bg-white text-black"
									} flex items-center px-4 py-2 mb-10 overflow-hidden rounded-lg`
								}>
								<div>
									<BiSolidUserPin className="text-black" size={25} />
								</div>
								<div className="px-2">
									<h1 className="text-[20px]">Tanent Info</h1>
								</div>
							</NavLink>
							<NavLink
								to="/journey/hris/department"
								className={({ isActive }) =>
									`${
										isActive ? "bg-[#003262] text-white" : "bg-white text-black"
									} flex items-center px-4 py-2 mb-10 overflow-hidden rounded-lg`
								}>
								<div>
									<BiSolidUserPin className="text-black" size={25} />
								</div>
								<div className="px-2">
									<h1 className="text-[20px]">Department</h1>
								</div>
							</NavLink>
							<NavLink
								to="/journey/hris/designations"
								className={({ isActive }) =>
									`${
										isActive ? "bg-[#003262] text-white" : "bg-white text-black"
									} flex items-center px-4 py-2 mb-10 overflow-hidden rounded-lg`
								}>
								<div className="  ">
									<BiSolidUserDetail className="text-black" size={25} />
								</div>
								<div className="px-2">
									<h1 className="text-[20px]">Designations</h1>
								</div>
							</NavLink>
							<NavLink
								to="/journey/hris/positions"
								className={({ isActive }) =>
									`${
										isActive ? "bg-[#003262] text-white" : "bg-white text-black"
									} flex items-center px-4 py-2 mb-10 overflow-hidden rounded-lg`
								}>
								<div className="  ">
									<GiShieldOpposition className="text-black" size={25} />
								</div>
								<div className="px-2">
									<h1 className="text-[20px]">Positions</h1>
								</div>
							</NavLink>
							<NavLink
								to="/journey/hris/employee"
								className={({ isActive }) =>
									`${
										isActive ? "bg-[#003262] text-white" : "bg-white text-black"
									} flex items-center px-4 py-2 mb-10 overflow-hidden rounded-lg`
								}>
								<div>
									<CiUser className="text-black" size={25} />
								</div>
								<div className="px-2">
									<h1 className="text-[20px]">Employees</h1>
								</div>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TanentDashBorad;
