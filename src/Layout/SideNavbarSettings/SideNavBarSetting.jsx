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
	return (
		<div className="relative col-span-2">
			{/* Sidebar Menu */}
			<div className=" bg-white Inter text-[14px] p-5 rounded-lg shadow-lg md:shadow-none">
				<div className="lg:block hidden">
					<div
						onClick={() => setActiveTab("version")}
						className={`${
							activeTab === "version"
								? "bg-[#003262] text-white"
								: "text-[#6B6B6B]"
						} flex items-center cursor-pointer  gap-2 rounded-lg px-4 py-2 mb-8`}>
						<VscVersions size={20} />
						<h1 className="">Versions</h1>
					</div>
				</div>
				<div className="block lg:hidden">
					<div
						onClick={() => setActiveTab("version")}
						className={`${
							activeTab === "version" ? "text-[#003262]" : "text-[#6B6B6B]"
						} flex justify-center mb-10`}>
						<VscVersions size={30} />
					</div>
				</div>
				<div className="lg:block hidden">
					<div
						onClick={() => setActiveTab("section")}
						className={`${
							activeTab === "section"
								? "bg-[#003262] text-white"
								: "text-[#6B6B6B]"
						} flex items-center cursor-pointer gap-2 rounded-lg px-4 py-2 mb-8`}>
						<TbNewSection size={20} />
						<h1 className=" font-bold ">Sections</h1>
					</div>
				</div>
				<div className="block lg:hidden">
					<div
						onClick={() => setActiveTab("section")}
						className={`${
							activeTab === "section" ? "text-[#003262] " : "text-[#6B6B6B]"
						} flex justify-center cursor-pointer mb-10 `}>
						<TbNewSection size={30} />
					</div>
				</div>
				<div className=" lg:block hidden">
					<div
						onClick={() => setActiveTab("set")}
						className={`${
							activeTab === "set" ? "bg-[#003262] text-white" : "text-[#6B6B6B]"
						} flex items-center cursor-pointer gap-2  rounded-lg px-4 py-2 mb-8`}>
						<VscSettings size={20} />
						<h1 className=" font-bold ">Sets</h1>
					</div>
				</div>
				<div className="block lg:hidden">
					<div
						onClick={() => setActiveTab("set")}
						className={`${
							activeTab === "set" ? "text-[#003262] " : "text-[#6B6B6B]"
						} flex justify-center cursor-pointer py-2 mb-10`}>
						<VscSettings size={30} />
					</div>
				</div>
				<div className="lg:block hidden ">
					<div
						onClick={() => setActiveTab("schedule")}
						className={`${
							activeTab === "schedule"
								? "bg-[#003262] text-white"
								: "text-[#6B6B6B]"
						} flex items-center cursor-pointer gap-2 rounded-lg px-4 py-2 mb-8`}>
						<MdOutlineSchedule size={20} />
						<h1 className=" font-bold ">Schedules</h1>
					</div>
				</div>

				<div className="block lg:hidden">
					<div
						onClick={() => setActiveTab("schedule")}
						className={`${
							activeTab === "schedule" ? "text-[#003262] " : "text-[#6B6B6B]"
						} flex justify-center  mb-10`}>
						<MdOutlineSchedule size={30} />
					</div>
				</div>
				<div className="hidden lg:block">
					<div
						onClick={() => setActiveTab("access")}
						className={`${
							activeTab === "access"
								? "bg-[#003262] text-white"
								: "text-[#6B6B6B]"
						} flex items-center cursor-pointer gap-2 rounded-lg px-4 py-2 mb-8`}>
						<TbLockAccess size={20} />
						<h1 className=" font-bold ">Access</h1>
					</div>
				</div>
				<div className="lg:hidden block">
					<div
						onClick={() => setActiveTab("access")}
						className={`${
							activeTab === "access" ? "text-[#003262] " : "text-[#6B6B6B]"
						} flex justify-center mb-10`}>
						<TbLockAccess size={30} />
					</div>
				</div>
				<div className="lg:block hidden">
					<div
						onClick={() => setActiveTab("duration")}
						className={`${
							activeTab === "duration"
								? "bg-[#003262] text-white"
								: "text-[#6B6B6B]"
						} flex items-center cursor-pointer gap-2 rounded-lg px-4 py-2 mb-8`}>
						<GiDuration size={20} />
						<h1 className=" font-bold ">Durations</h1>
					</div>
				</div>
				<div className="block lg:hidden">
					<div
						onClick={() => setActiveTab("duration")}
						className={`${
							activeTab === "duration" ? "text-[#003262] " : "text-[#6B6B6B]"
						} flex justify-center mb-10`}>
						<GiDuration size={30} />
					</div>
				</div>
				<div className="lg:block hidden">
					<div
						onClick={() => setActiveTab("attempt")}
						className={`${
							activeTab === "attempt"
								? "bg-[#003262] text-white"
								: "text-[#6B6B6B]"
						} flex items-center cursor-pointer gap-2 rounded-lg px-4 py-2 mb-8`}>
						<HiArrowPath size={20} />
						<h1 className=" font-bold ">Attempts</h1>
					</div>
				</div>
				<div className="block lg:hidden">
					<div
						onClick={() => setActiveTab("attempt")}
						className={`${
							activeTab === "attempt" ? "text-[#003262] " : "text-[#6B6B6B]"
						} flex justify-center mb-10`}>
						<HiArrowPath size={30} />
					</div>
				</div>
				<div className="lg:block hidden">
					<div
						onClick={() => setActiveTab("proctoring")}
						className={`${
							activeTab === "proctoring"
								? "bg-[#003262] text-white"
								: "text-[#6B6B6B]"
						} flex items-center cursor-pointer gap-2 rounded-lg px-4 py-2 mb-8`}>
						<GiSettingsKnobs size={20} />
						<h1 className=" font-bold ">Proctoring</h1>
					</div>
				</div>
				<div className="block lg:hidden">
					<div
						onClick={() => setActiveTab("proctoring")}
						className={`${
							activeTab === "proctoring" ? "text-[#003262] " : "text-[#6B6B6B]"
						} flex justify-center mb-10`}>
						<GiSettingsKnobs size={30} />
					</div>
				</div>
				<div className="lg:block hidden">
					<div
						onClick={() => setActiveTab("grading")}
						className={`${
							activeTab === "grading"
								? "bg-[#003262] text-white"
								: "text-[#6B6B6B]"
						} flex items-center cursor-pointer gap-2 rounded-lg px-4 py-2 mb-8`}>
						<MdGrading size={20} />
						<h1 className=" font-bold ">Grading</h1>
					</div>
				</div>
				<div className="block lg:hidden">
					<div
						onClick={() => setActiveTab("grading")}
						className={`${
							activeTab === "grading" ? "text-[#003262] " : "text-[#6B6B6B]"
						} flex justify-center mb-10`}>
						<MdGrading size={30} />
					</div>
				</div>
				<div className="hidden lg:block ">
					<div
						onClick={() => setActiveTab("certificate")}
						className={`${
							activeTab === "certificate"
								? "bg-[#003262] text-white"
								: "text-[#6B6B6B]"
						} flex items-center cursor-pointer gap-2 rounded-lg px-4 py-2 mb-8`}>
						<TbFileCertificate size={20} />
						<h1 className=" font-bold ">Certificate</h1>
					</div>
				</div>
				<div className="lg:hidden block ">
					<div
						onClick={() => setActiveTab("certificate")}
						className={`${
							activeTab === "certificate" ? "text-[#003262] " : "text-[#6B6B6B]"
						} flex justify-center mb-10`}>
						<TbFileCertificate size={30} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideNavBarSetting;
