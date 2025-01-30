import React, { useState } from "react";
import { VscVersions } from "react-icons/vsc";
import { TbNewSection } from "react-icons/tb";
import { VscSettings } from "react-icons/vsc";
import { MdOutlineSchedule } from "react-icons/md";
import { TbLockAccess } from "react-icons/tb";
import { GiDuration } from "react-icons/gi";
import { HiArrowPath } from "react-icons/hi2";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdGrading } from "react-icons/md";
import { TbFileCertificate } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const SideNavBarSetting = ({ activeTab, setActiveTab }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="relative">
			{/* Toggle Button for Mobile */}
			<button
				onClick={() => setMenuOpen(!menuOpen)}
				className="md:hidden  text-black p-3 rounded-lg">
				{menuOpen ? <IoMdClose /> : <FaBars />}
			</button>

			{/* Sidebar Menu */}
			<div
				className={` ${
					menuOpen ? "block" : "hidden"
				} md:block bg-white p-5 rounded-lg shadow-lg md:shadow-none`}>
				{[
					{ id: "version", icon: <VscVersions size={30} />, label: "Versions" },
					{
						id: "section",
						icon: <TbNewSection size={30} />,
						label: "Sections",
					},
					{ id: "set", icon: <VscSettings size={30} />, label: "Sets" },
					{
						id: "schedule",
						icon: <MdOutlineSchedule size={30} />,
						label: "Schedules",
					},
					{ id: "access", icon: <TbLockAccess size={30} />, label: "Access" },
					{
						id: "duration",
						icon: <GiDuration size={30} />,
						label: "Durations",
					},
					{ id: "attempt", icon: <HiArrowPath size={30} />, label: "Attempts" },
					{
						id: "proctoring",
						icon: <GiSettingsKnobs size={30} />,
						label: "Proctoring",
					},
					{ id: "grading", icon: <MdGrading size={30} />, label: "Grading" },
					{
						id: "certificate",
						icon: <TbFileCertificate size={30} />,
						label: "Certificate",
					},
				].map((tab) => (
					<div
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`${
							activeTab === tab.id ? "bg-[#003262] text-white" : "text-black"
						} flex items-center cursor-pointer gap-2 rounded-lg px-4 py-2 mb-8`}>
						<span>{tab.icon}</span>
						<h1 className="text-lg font-bold">{tab.label}</h1>
					</div>
				))}
			</div>
		</div>
	);
};

export default SideNavBarSetting;
