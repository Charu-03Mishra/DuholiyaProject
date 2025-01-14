import React from "react";
import { CiSearch } from "react-icons/ci";
import { GrStatusGood } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuUsersRound } from "react-icons/lu";
import { MdOutlineGraphicEq } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa6";
import { MdSchedule } from "react-icons/md";
import { FaTags } from "react-icons/fa";

const Sidenavbar = () => {
	return (
		<>
			<div className="    px-5    ">
				<div className="px-2 pt-5">
					<div className="flex items-center bg-white  mb-10 border-2 border-gray-300  overflow-hidden ">
						<div className="px-1 py-1">
							<CiSearch size={25} />
						</div>
						<div className="">
							<input
								type="text"
								placeholder="Search By Title"
								className="focus:outline-none pl-1 w-40"
							/>
						</div>
					</div>
				</div>

				<div className=" px-2">
					<div className="flex justify-between px-2 py-1 bg-white mb-10  border-2 border-gray-300  overflow-hidden  rounded-lg ">
						<div className="flex justify-center items-center">
							<div className="px-1 py-1">
								<GrStatusGood size={25} />
							</div>
							<div className="px-1">
								<h1 className="text-lg">Status</h1>
							</div>
						</div>

						<div className="flex justify-center items-center ">
							<IoMdArrowDropdown size={25} />
						</div>
					</div>
					<div className="flex justify-between px-2 py-1 bg-white mb-10  border-2 border-gray-300  overflow-hidden  rounded-lg ">
						<div className="flex justify-center items-center">
							<div className="px-1 py-1">
								<LuUsersRound size={25} />
							</div>
							<div className="px-1">
								<h1 className="text-lg">Group</h1>
							</div>
						</div>

						<div className="flex justify-center items-center ">
							<IoMdArrowDropdown size={25} />
						</div>
					</div>
					<div className="flex justify-between px-2 py-1 bg-white mb-10  border-2 border-gray-300  overflow-hidden  rounded-lg ">
						<div className="flex justify-center items-center">
							<div className="px-1 py-1">
								<FaUserGraduate size={25} />
							</div>
							<div className="px-1">
								<h1 className="text-lg">User</h1>
							</div>
						</div>
					</div>
					<div className="flex justify-between px-2 py-1 bg-white mb-10  border-2 border-gray-300  overflow-hidden  rounded-lg ">
						<div className="flex justify-center items-center">
							<div className="px-1 py-1">
								<MdOutlineGraphicEq size={25} />
							</div>
							<div className="px-1">
								<h1 className="text-lg">Componey</h1>
							</div>
						</div>

						<div className="flex justify-center items-center ">
							<IoMdArrowDropdown size={25} />
						</div>
					</div>
					<div className="flex justify-between px-2 py-1 bg-white mb-10  border-2 border-gray-300  overflow-hidden  rounded-lg ">
						<div className="flex justify-center items-center">
							<div className="px-1 py-1">
								<MdSchedule size={25} />
							</div>
							<div className="px-1">
								<h1 className="text-lg">Schedule</h1>
							</div>
						</div>

						<div className="flex justify-center items-center ">
							<IoMdArrowDropdown size={25} />
						</div>
					</div>
					<div className="flex justify-between px-2 py-1 bg-white mb-10  border-2 border-gray-300  overflow-hidden  rounded-lg ">
						<div className="flex justify-center items-center">
							<div className="px-1 py-1">
								<FaTags size={25} />
							</div>
							<div className="px-1">
								<h1 className="text-lg">Tag</h1>
							</div>
						</div>

						<div className="flex justify-center items-center ">
							<IoMdArrowDropdown size={25} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidenavbar;
