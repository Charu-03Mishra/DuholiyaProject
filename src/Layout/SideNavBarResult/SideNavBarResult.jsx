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
				<div className="pr-2 Inter">
					<Search />
				</div>
				<div className=" pr-2 Inter">
					<div className="hidden lg:block  px-1 py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
						<div className="flex justify-between">
							<div className="flex justify-center gap-2 items-center">
								<div className="px-1 py-1 text-[#6B6B6B]">
									<LuUsersRound size={20} />
								</div>
								<div className=" text-[#040F0F]">
									<h1 className="text-[14px]">Filter By Group </h1>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="pb-10 pt-5  lg:hidden block ">
							<LuUsersRound size={30} />
						</div>
					</div>
					<div className="hidden lg:block px-1  py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
						<div className="flex justify-between">
							<div className="flex justify-center gap-2 items-center">
								<div className="px-1 py-1 text-[#6B6B6B]">
									<FaUserGraduate size={20} />
								</div>
								<div className="">
									<h1 className="text-[14px] text-[#040F0F] whitespace-normal">
										Filter By Participants
									</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className=" pb-10 lg:hidden block">
							<FaUserGraduate size={30} />
						</div>
					</div>

					<div className="hidden lg:block  px-1  py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
						<div className="flex justify-between ">
							<div className="flex justify-center gap-2 items-center">
								<div className="px-1 py-1 text-[#6B6B6B]">
									<MdSchedule size={20} />
								</div>
								<div className="">
									<h1 className="text-[14px] text-[#040F0F] whitespace-normal">
										Filter By Schedule
									</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="pb-10 block lg:hidden">
							<MdSchedule size={30} />
						</div>
					</div>
					<div className="hidden lg:block  px-1 py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
						<div className="flex justify-between ">
							<div className="flex justify-center gap-2 items-center">
								<div className="px-1 py-1 text-[#6B6B6B]">
									<FaTags size={20} />
								</div>
								<div className="">
									<h1 className="text-[14px] text-[#040F0F] whitespace-normal">
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
						<div className="pb-10 block lg:hidden">
							<FaTags size={30} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SideNavBarResult;
