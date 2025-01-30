import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineGroup } from "react-icons/md";
import { MdOutlineAirlineSeatIndividualSuite } from "react-icons/md";

const ParticipantsSideNavBar = ({ activeTab, setActiveTab }) => {
	console.log(setActiveTab);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<button
				className="md:hidden p-4 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
			</button>
			<div className={`${isOpen ? "hidden" : "block"} px-3 md:block py-5`}>
				<div
					onClick={() => setActiveTab("Group")}
					className={`${
						activeTab == "Group" ? "bg-[#003262] text-white" : " text-black"
					}  flex w-[180px] items-center gap-2 cursor-pointer  rounded-lg px-4 py-2 mb-8`}>
					<span>
						<MdOutlineGroup size={30} />
					</span>
					<h1 className="text-lg font-bold">Group</h1>
				</div>

				<div
					onClick={() => setActiveTab("individual")}
					className={`${
						activeTab == "individual"
							? "bg-[#003262] text-white"
							: " text-black"
					}  flex w-[180px] items-center cursor-pointer gap-2  rounded-lg px-4 py-2 mb-8`}>
					<span>
						<MdOutlineAirlineSeatIndividualSuite size={30} />
					</span>
					<h1 className="text-lg font-bold">Individual</h1>
				</div>
			</div>
		</div>
	);
};

export default ParticipantsSideNavBar;
