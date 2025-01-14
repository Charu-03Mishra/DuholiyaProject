import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { AssessmentData } from "../../constant/AssessmentData/AssessmentData";

const AssementsResults = () => {
	const { id } = useParams();
	console.log(id);
	const filterid = AssessmentData.filter((ele) => ele.id == id);
	const assmentResult = filterid && filterid[0]?.exam;

	return (
		<>
			<div className="sticky top-20 bg-white">
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
			</div>
		</>
	);
};

export default AssementsResults;
