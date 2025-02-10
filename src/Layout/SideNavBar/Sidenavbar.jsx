import React from "react";
import { CiSearch } from "react-icons/ci";
import { GrStatusGood } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuUsersRound } from "react-icons/lu";
import { MdOutlineGraphicEq } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa6";
import { MdSchedule } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import Search from "../../Component/Search/Search";

const Sidenavbar = () => {
	return (
		<>
			<div className=" col-span-2   ">
				<div className="pr-2 Inter">
					<Search />
				</div>
				<div className=" Inter pr-2 pb-2 ">
					<div className="px-2 py-1 hidden lg:block bg-white mb-10  border-2   overflow-hidden border-[#0B87AC] rounded-lg ">
						<div className="flex  justify-between ">
							<div className="flex justify-center  gap-2 items-center">
								<div className="px-1 py-1 text-[#6B6B6B]">
									<GrStatusGood size={20} />
								</div>
								<div className=" ">
									<h1 className="text-[14px] text-[#040F0F]">Status</h1>
								</div>
							</div>

							<div className="flex justify-center items-center ">
								<IoMdArrowDropdown size={20} />
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="pb-10 pt-5 block lg:hidden">
							<GrStatusGood size={30} />
						</div>
					</div>

					<div className="hidden lg:block  px-2 py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
						<div className="flex justify-between">
							<div className="flex justify-center gap-2 items-center">
								<div className="px-1 py-1 text-[#6B6B6B]">
									<LuUsersRound size={20} />
								</div>
								<div className="">
									<h1 className="text-[14px] text-[#040F0F]">Group</h1>
								</div>
							</div>

							<div className="flex justify-center items-center ">
								<IoMdArrowDropdown size={20} />
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="pb-10 block lg:hidden">
							<LuUsersRound size={30} />
						</div>
					</div>

					<div className="lg:block hidden justify-between px-2 py-1 bg-white mb-10  border-2 border-[#0B87AC] overflow-hidden  rounded-lg ">
						<div className="flex justify-between">
							<div className="flex justify-center gap-2 items-center">
								<div className="px-1 text-[#6B6B6B] py-1">
									<FaUserGraduate size={20} />
								</div>
								<div className="">
									<h1 className="text-[14px] text-[#040F0F]">User</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className=" pb-10 block lg:hidden">
							<FaUserGraduate size={30} />
						</div>
					</div>

					<div className="lg:block hidden justify-between px-2 py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
						<div className="flex justify-between">
							<div className="flex justify-center gap-2 items-center">
								<div className="px-1 py-1 text-[#6B6B6B]">
									<MdOutlineGraphicEq size={20} />
								</div>
								<div className="">
									<h1 className="text-[14px] text-[#040F0F]">Componey</h1>
								</div>
							</div>

							<div className="flex justify-center items-center ">
								<IoMdArrowDropdown size={20} />
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className=" pb-10 block lg:hidden">
							<MdOutlineGraphicEq size={30} />
						</div>
					</div>

					<div className="lg:block hidden  px-2 py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
						<div className="flex justify-between">
							<div className="flex justify-center gap-2 items-center">
								<div className="px-1 py-1 text-[#6B6B6B]">
									<MdSchedule size={20} />
								</div>
								<div className="">
									<h1 className="text-[14px] text-[#040F0F]">Schedule</h1>
								</div>
							</div>

							<div className="flex justify-center items-center ">
								<IoMdArrowDropdown size={20} />
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className=" pb-10 block lg:hidden">
							<MdSchedule size={30} />
						</div>
					</div>

					<div className="lg:block hidden  px-2 py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
						<div className="flex justify-between">
							<div className="flex justify-center gap-2 items-center">
								<div className="px-1 py-1 text-[#6B6B6B]">
									<FaTags size={20} />
								</div>
								<div className="">
									<h1 className="text-[14px] text-[#040F0F]">Tag</h1>
								</div>
							</div>

							<div className="flex justify-center items-center ">
								<IoMdArrowDropdown size={20} />
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className=" pb-10 block lg:hidden">
							<FaTags size={30} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidenavbar;
