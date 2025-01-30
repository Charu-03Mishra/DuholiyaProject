import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { TbLocationShare } from "react-icons/tb";
import { Link, NavLink, useParams } from "react-router-dom";
import { SiInstructure } from "react-icons/si";
import { IoIosSettings } from "react-icons/io";
import { FaCircleQuestion } from "react-icons/fa6";
import { FaUsersBetweenLines } from "react-icons/fa6";
const InstructionHeader = () => {
	return (
		<>
			<div
				className={` flex py-2 inter bg-white justify-between items-center px-4 md:px-8 `}>
				<div className="">
					<h1 className="text-lg md:text-xl font-semibold">Untitled</h1>
				</div>
				<div className="flex items-center lg:gap-14 gap-7 md:gap-10">
					<div className="py-2">
						<NavLink
							to="/journey/assissment/assessments/instruction"
							className={({ isActive }) =>
								`${
									isActive
										? "text-primary border-b-2 font-bold text-base md:text-xl border-primary "
										: "text-gray-500 font-bold text-base md:text-lg"
								}  `
							}>
							<span className="hidden lg:block">Instructions</span>
							<span className="block lg:hidden">
								<SiInstructure size={20} />
							</span>
						</NavLink>
					</div>
					<div>
						<NavLink
							to="/journey/assissment/assessments/setting"
							className={({ isActive }) =>
								`${
									isActive
										? "text-primary border-b-2 font-bold text-base md:text-xl border-primary "
										: "text-gray-500 font-bold text-base md:text-lg"
								}  `
							}>
							<span className="hidden lg:block">Settings</span>
							<span className="block lg:hidden">
								<IoIosSettings size={20} />
							</span>
						</NavLink>
					</div>
					<div>
						<NavLink
							to="/journey/assissment/assessments/question"
							className={({ isActive }) =>
								`${
									isActive
										? "text-[#003262] border-b-2 border-[#003262] font-bold text-base md:text-xl"
										: "text-gray-500 font-bold text-base md:text-xl"
								}`
							}>
							<span className="block lg:hidden">
								<FaCircleQuestion size={20} />
							</span>
							<span className="hidden lg:block">Questions</span>
						</NavLink>
					</div>
					<div className="py-2">
						<NavLink
							to="/journey/assissment/assessments/participant"
							className={({ isActive }) =>
								`${
									isActive
										? "text-[#003262] border-b-2 border-[#003262] font-bold text-base md:text-xl"
										: "text-gray-500 font-bold text-base md:text-xl"
								}`
							}>
							<span className="block lg:hidden">
								<FaUsersBetweenLines size={20} />
							</span>
							<span className="hidden lg:block">Participants</span>
						</NavLink>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#003262] text-white">
						<IoMdDownload size={16} />
					</div>
					<div className="flex items-center justify-center w-6 h-6 md:w-[30px] md:h-[30px] rounded-full bg-[#003262] text-white">
						<TbLocationShare size={16} />
					</div>
					<div className="flex items-center justify-center w-6 h-6 md:w-[30px] md:h-[30px] rounded-full bg-[#003262] text-white">
						<FaEye size={16} />
					</div>
				</div>
			</div>
		</>
	);
};

export default InstructionHeader;
