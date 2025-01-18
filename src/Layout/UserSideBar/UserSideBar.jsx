import React, { useState } from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { LuUsersRound } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
import { FcApprove } from "react-icons/fc";
import { MdInsertInvitation } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const UserSideBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

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
								to="/journey/users/group"
								className={({ isActive }) =>
									`${
										isActive ? "bg-[#003262] text-white" : "bg-white text-black"
									} flex items-center px-4 py-2 mb-10 overflow-hidden rounded-lg`
								}>
								<div>
									<FaUserGraduate className="" size={25} />
								</div>
								<div className="px-2">
									<h1 className="text-[20px]">Groups</h1>
								</div>
							</NavLink>
							<NavLink
								to="/journey/users/Users"
								className={({ isActive }) =>
									`${
										isActive ? "bg-[#003262] text-white" : "bg-white text-black"
									} flex items-center px-4 py-2 mb-10 overflow-hidden rounded-lg`
								}>
								<div>
									<LuUsersRound className="" size={25} />
								</div>
								<div className="px-2">
									<h1 className="text-[20px]">Users</h1>
								</div>
							</NavLink>
							<NavLink
								to="/journey/users/approve"
								className={({ isActive }) =>
									`${
										isActive ? "bg-[#003262] text-white" : "bg-white text-black"
									} flex items-center px-4 py-2 mb-10 overflow-hidden rounded-lg`
								}>
								<div className="  ">
									<FcApprove className="" size={25} />
								</div>
								<div className="px-2">
									<h1 className="text-[20px]">Approvals</h1>
								</div>
							</NavLink>
							<NavLink
								to="/journey/users/invitation"
								className={({ isActive }) =>
									`${
										isActive ? "bg-[#003262] text-white" : "bg-white text-black"
									} flex items-center px-4 py-2 mb-10 overflow-hidden rounded-lg`
								}>
								<div className="  ">
									<MdInsertInvitation size={25} />
								</div>
								<div className="px-2">
									<h1 className="text-[20px]">Invitations</h1>
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
