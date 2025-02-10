import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTags, FaUserGraduate } from "react-icons/fa";

import { IoMdArrowDropdown } from "react-icons/io";
import Search from "../../Component/Search/Search";
import { MdSettingsInputComposite } from "react-icons/md";
import { LuView } from "react-icons/lu";

const QuestionSideBar = () => {
	return (
		<div className="col-span-2 lg:col-span-2 px-3 ">
			<div className="inter  ">
				<Search />
				<div className=" px-2 hidden lg:block  py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
					<div className="flex justify-between">
						<div className="flex justify-center text-[14px] items-center">
							<div className="px-1 py-1 ">
								<FaBars size={20} className="text-[#6B6B6B]" />
							</div>
							<div className="px-1">
								<h1 className=" text-[#040F0F]  whitespace-normal">
									Complexity
								</h1>
							</div>
						</div>
						<div className="flex justify-center items-center ">
							<IoMdArrowDropdown size={20} />
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="px-7 sm:px-10 py-4 block lg:hidden">
						<FaBars size={25} />
					</div>
				</div>

				<div className=" justify-between px-2 hidden lg:block  py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
					<div className="flex justify-between">
						<div className="flex justify-center text-[14px] items-center">
							<div className="px-1 py-1 ">
								<FaTags size={20} className="text-[#6B6B6B]" />
							</div>
							<div className="px-1">
								<h1 className=" text-[#040F0F]  whitespace-normal">Tags</h1>
							</div>
						</div>
						<div className="flex justify-center items-center ">
							<IoMdArrowDropdown size={20} />
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="px-5 md:px-10 py-4 block lg:hidden ">
						<FaTags size={25} />
					</div>
				</div>
				<div className="hidden lg:block  justify-between px-2 py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
					<div className="flex justify-between">
						<div className="flex justify-center text-[14px] items-center">
							<div className="px-1 py-1 ">
								<MdSettingsInputComposite size={20} />
							</div>
							<div className="px-1">
								<h1 className="text-[#040F0F] whitespace-normal">Set</h1>
							</div>
						</div>

						<div className="flex justify-center items-center ">
							<IoMdArrowDropdown size={20} />
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="px-5 md:px-10 py-4 lg:hidden block">
						<MdSettingsInputComposite size={25} />
					</div>
				</div>
				<div className="hidden lg:block  justify-between px-2 py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
					<div className="flex justify-between">
						<div className="flex justify-center text-[14px] items-center">
							<div className="px-1 py-1 text-[#6B6B6B]">
								<LuView size={20} />
							</div>
							<div className="px-1">
								<h1 className="text-[#040F0F] whitespace-normal">Reviewed</h1>
							</div>
						</div>

						<div className="flex justify-center items-center ">
							<IoMdArrowDropdown size={20} />
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="px-5 md:px-10 py-4 lg:hidden block">
						<LuView size={25} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuestionSideBar;
