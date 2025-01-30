import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTags, FaUserGraduate } from "react-icons/fa";

import { IoMdArrowDropdown } from "react-icons/io";
import Search from "../../Component/Search/Search";
import { MdSettingsInputComposite } from "react-icons/md";
import { LuView } from "react-icons/lu";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const QuestionSideBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="col-span-2 lg:col-span-2  ">
			<button
				className="md:hidden p-4 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
			</button>
			<div className={`${isOpen ? "hidden" : "block"} px-2 md:block`}>
				<Search />
				<div className=" px-2 hidden lg:block  py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
					<div className="flex justify-between">
						<div className="flex justify-center items-center">
							<div className="px-1 py-1 md:text-[15px]">
								<FaBars />
							</div>
							<div className="px-1">
								<h1 className="md:text-[14px]  whitespace-normal">
									Complexity
								</h1>
							</div>
						</div>
						<div className="flex justify-center items-center ">
							<IoMdArrowDropdown size={20} />
						</div>
					</div>
				</div>
				<div className="px-7 sm:px-10 py-4 block lg:hidden">
					<FaBars size={25} />
				</div>
				<div className=" justify-between px-2 hidden lg:block  py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
					<div className="flex justify-between">
						<div className="flex justify-center items-center">
							<div className="px-1 py-1 md:text-[15px]">
								<FaTags size={20} />
							</div>
							<div className="px-1">
								<h1 className="text-[15px]  whitespace-normal">Tags</h1>
							</div>
						</div>
						<div className="flex justify-center items-center ">
							<IoMdArrowDropdown size={20} />
						</div>
					</div>
				</div>
				<div className="px-5 md:px-10 py-4 block lg:hidden ">
					<FaTags size={25} />
				</div>
				<div className="hidden lg:block  justify-between px-2 py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
					<div className="flex justify-between">
						<div className="flex justify-center items-center">
							<div className="px-1 py-1 md:text-[15px]">
								<MdSettingsInputComposite size={20} />
							</div>
							<div className="px-1">
								<h1 className="text-[15px] whitespace-normal">Set</h1>
							</div>
						</div>

						<div className="flex justify-center items-center ">
							<IoMdArrowDropdown size={20} />
						</div>
					</div>
				</div>
				<div className="px-5 md:px-10 py-4 lg:hidden block">
					<MdSettingsInputComposite size={25} />
				</div>
				<div className="hidden lg:block  justify-between px-2 py-1 bg-white mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
					<div className="flex justify-center items-center">
						<div className="px-1 py-1 md:text-[15px]">
							<LuView size={20} />
						</div>
						<div className="px-1">
							<h1 className="text-[15px] whitespace-normal">Reviewed</h1>
						</div>
					</div>

					<div className="flex justify-center items-center ">
						<IoMdArrowDropdown size={20} />
					</div>
				</div>
				<div className="px-5 md:px-10 py-4 lg:hidden block">
					<LuView size={25} />
				</div>
			</div>
		</div>
	);
};

export default QuestionSideBar;
