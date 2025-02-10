import React, { useState } from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { LuUsersRound } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdInsertInvitation } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const UserSideBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<>
			<div className="col-span-2 px-3">
				<div className="py-3">
					<div className="hidden lg:block">
						<NavLink
							to="/journey/users/group"
							className={({ isActive }) =>
								`${
									isActive
										? "bg-[#003262] text-white"
										: "bg-white text-[#545454]"
								} flex items-center px-4  py-2 mb-10 overflow-hidden rounded-lg`
							}>
							<div>
								<FaUserGraduate className="" size={23} />
							</div>
							<div className="px-2">
								<h1 className="text-[14px] inter">Groups</h1>
							</div>
						</NavLink>
					</div>
					<div className="block lg:hidden ">
						<div className="flex  justify-center">
							<NavLink
								to="/journey/users/group"
								className={({ isActive }) =>
									`${
										isActive ? "text-[#003262] " : " text-[#545454]"
									} flex items-center pt-2  pb-5 overflow-hidden rounded-lg`
								}>
								<div>
									<FaUserGraduate size={30} />
								</div>
							</NavLink>
						</div>
					</div>
					<div className="hidden lg:block">
						<NavLink
							to="/journey/users/Users"
							className={({ isActive }) =>
								`${
									isActive
										? "bg-[#003262] text-white"
										: "bg-white text-[#545454]"
								} flex items-center px-4  py-2 mb-10 overflow-hidden rounded-lg`
							}>
							<div>
								<LuUsersRound className="" size={23} />
							</div>
							<div className="px-2">
								<h1 className="text-[14px] inter">Users</h1>
							</div>
						</NavLink>
					</div>
					<div className="block lg:hidden ">
						<div className="flex  justify-center">
							<NavLink
								to="/journey/users/Users"
								className={({ isActive }) =>
									`${
										isActive ? "text-[#003262] " : " text-[#545454]"
									} flex items-center  py-5 overflow-hidden rounded-lg`
								}>
								<div>
									<LuUsersRound size={30} />
								</div>
							</NavLink>
						</div>
					</div>

					<div className="hidden lg:block">
						<NavLink
							to="/journey/users/approve"
							className={({ isActive }) =>
								`${
									isActive
										? "bg-[#003262] text-white"
										: "bg-white text-[#545454]"
								} flex items-center px-4  py-2 mb-10 overflow-hidden rounded-lg`
							}>
							<div>
								<BsPatchCheckFill className="" size={23} />
							</div>
							<div className="px-2">
								<h1 className="text-[14px] inter">Approvals</h1>
							</div>
						</NavLink>
					</div>
					<div className="block lg:hidden ">
						<div className="flex  justify-center">
							<NavLink
								to="/journey/users/approve"
								className={({ isActive }) =>
									`${
										isActive ? "text-[#003262] " : " text-[#545454]"
									} flex items-center  py-5 overflow-hidden rounded-lg`
								}>
								<div>
									<BsPatchCheckFill size={30} />
								</div>
							</NavLink>
						</div>
					</div>
					<div className="hidden lg:block">
						<NavLink
							to="/journey/users/invitation"
							className={({ isActive }) =>
								`${
									isActive
										? "bg-[#003262] text-white"
										: "bg-white text-[#545454]"
								} flex items-center px-4  py-2 mb-10 overflow-hidden rounded-lg`
							}>
							<div>
								<MdInsertInvitation className="" size={23} />
							</div>
							<div className="px-2">
								<h1 className="text-[14px] inter">Invitations</h1>
							</div>
						</NavLink>
					</div>
					<div className="block lg:hidden ">
						<div className="flex  justify-center">
							<NavLink
								to="/journey/users/invitation"
								className={({ isActive }) =>
									`${
										isActive ? "text-[#003262] " : " text-[#545454]"
									} flex items-center  py-5 overflow-hidden rounded-lg`
								}>
								<div>
									<MdInsertInvitation size={30} />
								</div>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserSideBar;
