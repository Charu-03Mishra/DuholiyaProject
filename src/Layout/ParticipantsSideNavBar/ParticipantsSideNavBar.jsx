import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineGroup } from "react-icons/md";
import { MdOutlineAirlineSeatIndividualSuite } from "react-icons/md";

const ParticipantsSideNavBar = ({ activeTab, setActiveTab }) => {
	console.log(setActiveTab);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="col-span-2">
			<div className=" px-3  py-5">
				<div className="lg:block hidden">
					<div
						onClick={() => setActiveTab("Group")}
						className={`${
							activeTab == "Group"
								? "bg-[#003262] text-[#FFFFFF]"
								: " text-[#6B6B6B]"
						}  flex  items-center gap-2 cursor-pointer  rounded-lg px-4 py-2 mb-8`}>
						<span>
							<MdOutlineGroup size={20} />
						</span>
						<h1 className="text-[14px] Inter ">Group</h1>
					</div>
				</div>
				<div className="lg:hidden block">
					<div className="flex justify-center">
						<span
							onClick={() => setActiveTab("Group")}
							className={`${
								activeTab == "Group"
									? "bg-[#003262] text-[#FFFFFF]"
									: " text-[#6B6B6B]"
							}  mb-8`}>
							<MdOutlineGroup size={30} />
						</span>
					</div>
				</div>
				<div className="hidden lg:block">
					<div
						onClick={() => setActiveTab("individual")}
						className={`${
							activeTab == "individual"
								? "bg-[#003262] text-[#FFFFFF]"
								: " text-[#6B6B6B]"
						}  flex items-center cursor-pointer gap-2  rounded-lg px-4 py-2 mb-8`}>
						<span>
							<MdOutlineAirlineSeatIndividualSuite size={20} />
						</span>
						<h1 className="text-[14px] Inter">Individual</h1>
					</div>
				</div>
				<div className="block lg:hidden">
					<div className="flex justify-center">
						<span
							onClick={() => setActiveTab("individual")}
							className={`${
								activeTab == "individual"
									? "bg-[#003262] text-[#FFFFFF]"
									: " text-[#6B6B6B]"
							}  mb-8`}>
							<MdOutlineAirlineSeatIndividualSuite size={30} />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ParticipantsSideNavBar;
