import React from "react";
import Search from "../../Component/Search/Search";

import { LuUsersRound } from "react-icons/lu";
import { FaTags, FaUserGraduate } from "react-icons/fa6";
import { MdSchedule } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const SideNavBarResult = () => {
	return (
		<>
			<div className=" col-span-2  ">
				<Search />
				<div className=" px-2 inter">
					<div className="hidden lg:block  px-1 py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
						<div className="flex justify-between">
							<div className="flex justify-center items-center">
								<div className="px-1 py-1">
									<LuUsersRound size={15} />
								</div>
								<div className="px-1">
									<h1 className="text-[12px]">Filter By Group </h1>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="py-4  lg:hidden block ">
							<LuUsersRound size={20} />
						</div>
					</div>
					<div className="hidden lg:block px-1  py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
						<div className="flex justify-between">
							<div className="flex justify-center items-center">
								<div className="px-1 py-1">
									<FaUserGraduate size={15} />
								</div>
								<div className="">
									<h1 className="text-[12px]  whitespace-normal">
										Filter By Participants
									</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className=" py-4 lg:hidden block">
							<FaUserGraduate size={20} />
						</div>
					</div>

					<div className="hidden lg:block  px-1  py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
						<div className="flex justify-between">
							<div className="flex justify-center items-center">
								<div className="px-1 py-1">
									<MdSchedule size={15} />
								</div>
								<div className="px-1">
									<h1 className="text-[12px]  whitespace-normal">
										Filter By Schedule
									</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="py-4 block lg:hidden">
							<MdSchedule size={20} />
						</div>
					</div>
					<div className="hidden lg:block  px-1 py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
						<div className="flex justify-between">
							<div className="flex justify-center items-center">
								<div className="px-1 py-1">
									<FaTags size={15} />
								</div>
								<div className="px-1">
									<h1 className="text-[12px] whitespace-normal">
										Filter By Tag
									</h1>
								</div>
							</div>

							<div className="flex justify-center items-center ">
								<IoMdArrowDropdown size={20} />
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="py-4 block lg:hidden">
							<FaTags size={20} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SideNavBarResult;
