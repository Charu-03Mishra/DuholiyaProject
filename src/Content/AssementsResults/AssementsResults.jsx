import React from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { AssessmentData } from "../../constant/AssessmentData/AssessmentData";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { BiSolidUserPin } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
const AssementsResults = () => {
	const { id } = useParams();
	console.log(id);
	const filterid = AssessmentData.filter((ele) => ele.id == id);
	const path = useLocation();
	const pathName = path.pathname;

	return (
		<>
			<div className="sticky top-20 bg-white">
				{pathName == "/journey/assesments/1" ||
				pathName == "/journey/assesments/20" ? (
					<div className="  z-10 flex py-4 px-10 gap-10 border-b-2 border-black">
						<div className=" ">
							<NavLink
								to="/journey/assesments/1"
								className={({ isActive }) =>
									` ${
										isActive
											? "text-[#003262] pb-2 border-b-[3px] font-bold border-[#003262]"
											: "text-[#6B6B6B] "
									} text-2xl `
								}>
								Assessments
							</NavLink>
						</div>
						<div>
							<NavLink
								to="/journey/assesments/20"
								className={({ isActive }) =>
									` ${
										isActive
											? "text-[#003262] pb-2 border-b-[3px] font-bold border-[#003262]"
											: "text-[#6B6B6B] "
									} text-2xl `
								}>
								Results
							</NavLink>
						</div>
					</div>
				) : (
					""
				)}
				{pathName == "/journey/assesments/2" ? (
					<div className=" py-4 px-10 gap-10 border-b-2 border-black">
						<div className="flex items-center gap-5">
							<MdOutlineDashboard size={20} />
							<h1 className="text-lg font-bold">DashBoard</h1>
							<IoIosArrowForward />
							<h1>....</h1>
							<IoIosArrowForward />
							<div className="flex items-center gap-5">
								<LuUsers size={20} />
								<h1 className="text-lg">HIRS</h1>
							</div>
							<div className="flex items-center gap-5">
								<BiSolidUserPin size={30} className="text-[#003262] " />
								<h1 className="text-lg text-[#003262] font-bold">
									Tanent Information
								</h1>
							</div>
						</div>
					</div>
				) : (
					""
				)}
				{pathName == "/journey/assesments/3" ? (
					<div className=" py-4 px-10 gap-10 border-b-2 border-black">
						<div className="flex items-center gap-5">
							<div className="flex items-center gap-5">
								<FaHome size={20} />
								<h1 className="text-lg">Home</h1>
								<IoIosArrowForward />
							</div>

							<MdOutlineDashboard size={20} />
							<h1 className="text-lg font-bold">DashBoard</h1>
							<IoIosArrowForward />
							<h1>....</h1>
							<IoIosArrowForward />
							<div className="flex items-center gap-5">
								<LuUsers size={20} />
								<h1 className="text-lg">HIRS</h1>
							</div>
							<div className="flex items-center gap-5">
								<BiSolidUserPin size={30} className="text-[#003262] " />
								<h1 className="text-lg text-[#003262] font-bold">
									Tanent Information
								</h1>
							</div>
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
};

export default AssementsResults;
