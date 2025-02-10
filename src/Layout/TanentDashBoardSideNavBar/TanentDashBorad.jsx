import React, { useEffect, useState } from "react";
import { LuUsersRound } from "react-icons/lu";
import { BiSolidUserPin } from "react-icons/bi";
import { FaCodeFork } from "react-icons/fa6";
import { FcDepartment } from "react-icons/fc";
import { BiSolidUserDetail } from "react-icons/bi";
import { GiShieldOpposition } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const TanentDashBorad = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<>
			<div className="col-span-2 px-3">
				{/* Sidebar */}

				<div className="py-3">
					<div className="hidden  lg:block">
						<NavLink
							to="/journey/hris/tanent"
							className={({ isActive }) =>
								`${
									isActive
										? "bg-[#003262] text-white"
										: "bg-white text-[#545454]"
								} flex items-center px-4 inter  py-2 mb-10 overflow-hidden rounded-lg`
							}>
							<div>
								<BiSolidUserPin className="" size={23} />
							</div>
							<div className="px-2">
								<h1 className="text-[14px]">Tanent Info</h1>
							</div>
						</NavLink>
					</div>
					<div className="block lg:hidden ">
						<div className="flex  justify-center">
							<NavLink
								to="/journey/hris/tanent"
								className={({ isActive }) =>
									`${
										isActive ? "text-[#003262] " : " text-[#545454]"
									} flex items-center  py-2 overflow-hidden rounded-lg`
								}>
								<div>
									<BiSolidUserPin size={30} />
								</div>
							</NavLink>
						</div>
					</div>

					<div className="lg:block hidden">
						<NavLink
							to="/journey/hris/department"
							className={({ isActive }) =>
								`${
									isActive
										? "bg-[#003262] text-white"
										: "bg-white text-[#545454]"
								} flex items-center px-4  inter py-2 mb-10 overflow-hidden rounded-lg`
							}>
							<div>
								<FcDepartment size={23} />
							</div>
							<div className="px-2">
								<h1 className="text-[14px]">Department</h1>
							</div>
						</NavLink>
					</div>
					<div className="block lg:hidden">
						<div className="flex justify-center">
							<NavLink
								to="/journey/hris/department"
								className={({ isActive }) =>
									`${
										isActive ? "text-[#003262] " : " text-[#545454]"
									} flex items-center  py-2 overflow-hidden rounded-lg`
								}>
								<div className="lg:hidden block">
									<FcDepartment size={30} />
								</div>
							</NavLink>
						</div>
					</div>

					<div className="hidden lg:block">
						<NavLink
							to="/journey/hris/designations"
							className={({ isActive }) =>
								`${
									isActive
										? "bg-[#003262] text-white"
										: "bg-white text-[#545454]"
								} flex items-center  inter px-4 py-2 mb-10 overflow-hidden rounded-lg`
							}>
							<div className="  ">
								<BiSolidUserDetail size={23} />
							</div>
							<div className="px-2">
								<h1 className="text-[14px]">Designations</h1>
							</div>
						</NavLink>
					</div>
					<div className="block lg:hidden">
						<div className="flex justify-center">
							<NavLink
								to="/journey/hris/designations"
								className={({ isActive }) =>
									`${
										isActive ? "text-[#003262] " : " text-[#545454]"
									} flex items-center   py-2  overflow-hidden rounded-lg`
								}>
								<div className="lg:hidden block">
									<BiSolidUserDetail size={30} />
								</div>
							</NavLink>
						</div>
					</div>
					<div className="lg:block hidden ">
						<NavLink
							to="/journey/hris/positions"
							className={({ isActive }) =>
								`${
									isActive
										? "bg-[#003262] text-white"
										: "bg-white text-[#545454]"
								} flex items-center px-4  inter py-2 mb-10 overflow-hidden rounded-lg`
							}>
							<div className="  ">
								<GiShieldOpposition size={23} />
							</div>
							<div className="px-2">
								<h1 className="text-[14px]">Positions</h1>
							</div>
						</NavLink>
					</div>
					<div className="block lg:hidden">
						<div className="flex justify-center">
							<NavLink
								to="/journey/hris/positions"
								className={({ isActive }) =>
									`${
										isActive ? "text-[#003262] " : " text-[#545454]"
									} flex items-center   py-2 overflow-hidden rounded-lg`
								}>
								<div className="lg:hidden block">
									<GiShieldOpposition size={30} />
								</div>
							</NavLink>
						</div>
					</div>

					<div className="lg:block hidden">
						<NavLink
							to="/journey/hris/employee"
							className={({ isActive }) =>
								`${
									isActive
										? "bg-[#003262] text-white"
										: "bg-white text-[#545454]"
								} flex items-center px-4  inter py-2 mb-10 overflow-hidden rounded-lg`
							}>
							<div>
								<CiUser size={23} />
							</div>
							<div className="px-2">
								<h1 className="text-[14px]">Employees</h1>
							</div>
						</NavLink>
					</div>
					<div className="block lg:hidden">
						<div className="flex justify-center">
							<NavLink
								to="/journey/hris/employee"
								className={({ isActive }) =>
									`${
										isActive ? "text-[#003262] " : " text-[#545454]"
									} flex items-center  py-2 overflow-hidden rounded-lg`
								}>
								<div className="lg:hidden block">
									<CiUser size={30} />
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
