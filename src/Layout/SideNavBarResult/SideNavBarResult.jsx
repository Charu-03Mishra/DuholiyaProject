import React from "react";
import Search from "../../Component/Search/Search";

import { LuUsersRound } from "react-icons/lu";
import { FaTags, FaUserGraduate } from "react-icons/fa6";
import { MdSchedule } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const SideNavBarResult = () => {
	return (
		<>
			<div className="px-5">
				<Search />
				<div className=" px-2">
					<div className="flex justify-between px-2 py-1 bg-white mb-10  border-2 border-gray-300  overflow-hidden  rounded-lg ">
						<div className="flex justify-center items-center">
							<div className="px-1 py-1">
								<LuUsersRound size={20} />
							</div>
							<div className="px-1">
								<h1 className="text-[15px]">Filter By Group </h1>
							</div>
						</div>
					</div>
					<div className="flex justify-between px-2  py-1 bg-white mb-10  border-2 border-gray-300  overflow-hidden  rounded-lg ">
						<div className="flex justify-center items-center">
							<div className="px-1 py-1">
								<FaUserGraduate size={20} />
							</div>
							<div className="px-1">
								<h1 className="text-[15px]  whitespace-normal">
									Filter By Participants
								</h1>
							</div>
						</div>
					</div>

					<div className="flex justify-between px-2  py-1 bg-white mb-10  border-2 border-gray-300  overflow-hidden  rounded-lg ">
						<div className="flex justify-center items-center">
							<div className="px-1 py-1">
								<MdSchedule size={20} />
							</div>
							<div className="px-1">
								<h1 className="text-[15px]  whitespace-normal">
									Filter By Schedule
								</h1>
							</div>
						</div>
					</div>
					<div className="flex justify-between px-2 py-1 bg-white mb-10  border-2 border-gray-300  overflow-hidden  rounded-lg ">
						<div className="flex justify-center items-center">
							<div className="px-1 py-1">
								<FaTags size={20} />
							</div>
							<div className="px-1">
								<h1 className="text-[15px] whitespace-normal">Filter By Tag</h1>
							</div>
						</div>

						<div className="flex justify-center items-center ">
							<IoMdArrowDropdown size={20} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SideNavBarResult;
