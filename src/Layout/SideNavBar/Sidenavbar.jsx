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
				<div className=" inter px-2 py-2 ">
					<div className="px-2 py-1 hidden lg:block bg-white mb-10  border-2   overflow-hidden border-[#0B87AC] rounded-lg ">
						<div className="flex  justify-between ">
							<div className="flex justify-center items-center">
								<div className="px-1 py-1">
									<GrStatusGood size={20} />
								</div>
								<div className="px-1 ">
									<h1 className="text-[12px]">Status</h1>
								</div>
							</div>

							<div className="flex justify-center items-center ">
								<IoMdArrowDropdown size={20} />
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className=" block lg:hidden">
							<GrStatusGood size={30} />
						</div>
					</div>

					<div className="hidden lg:block  px-2 py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
						<div className="flex justify-between">
							<div className="flex justify-center items-center">
								<div className="px-1 py-1">
									<LuUsersRound size={20} />
								</div>
								<div className="px-1">
									<h1 className="text-[12px]">Group</h1>
								</div>
							</div>

							<div className="flex justify-center items-center ">
								<IoMdArrowDropdown size={20} />
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="py-4 block lg:hidden">
							<LuUsersRound size={30} />
						</div>
					</div>

					<div className="lg:block hidden justify-between px-2 py-1 bg-white mb-10  border-2 border-[#0B87AC] overflow-hidden  rounded-lg ">
						<div className="flex justify-between">
							<div className="flex justify-center items-center">
								<div className="px-1 py-1">
									<FaUserGraduate size={20} />
								</div>
								<div className="px-1">
									<h1 className="text-[12px]">User</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className=" py-4 block lg:hidden">
							<FaUserGraduate size={30} />
						</div>
					</div>

					<div className="lg:block hidden justify-between px-2 py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
						<div className="flex justify-between">
							<div className="flex justify-center items-center">
								<div className="px-1 py-1">
									<MdOutlineGraphicEq size={20} />
								</div>
								<div className="px-1">
									<h1 className="text-[12px]">Componey</h1>
								</div>
							</div>

							<div className="flex justify-center items-center ">
								<IoMdArrowDropdown size={20} />
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className=" py-4 block lg:hidden">
							<MdOutlineGraphicEq size={30} />
						</div>
					</div>

					<div className="lg:block hidden  px-2 py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
						<div className="flex justify-between">
							<div className="flex justify-center items-center">
								<div className="px-1 py-1">
									<MdSchedule size={20} />
								</div>
								<div className="px-1">
									<h1 className="text-[12px]">Schedule</h1>
								</div>
							</div>

							<div className="flex justify-center items-center ">
								<IoMdArrowDropdown size={20} />
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className=" py-4 block lg:hidden">
							<MdSchedule size={30} />
						</div>
					</div>

					<div className="lg:block hidden  px-2 py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
						<div className="flex justify-between">
							<div className="flex justify-center items-center">
								<div className="px-1 py-1">
									<FaTags size={20} />
								</div>
								<div className="px-1">
									<h1 className="text-[12px]">Tag</h1>
								</div>
							</div>

							<div className="flex justify-center items-center ">
								<IoMdArrowDropdown size={20} />
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className=" py-4 block lg:hidden">
							<FaTags size={30} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidenavbar;
