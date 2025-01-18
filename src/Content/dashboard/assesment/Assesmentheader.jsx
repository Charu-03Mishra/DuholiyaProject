import React from "react";
import { Link, useParams } from "react-router-dom";

const Assesmentheader = () => {
	const {name}  = useParams()
	console.log(name)
	return (
		<>
			<div className="sticky top-20 bg-white">
				<div className="  z-10 flex py-4 px-10 gap-10 border-b-2 border-black">
					<Link to={"/journey/assessment/assessments"} className={` ${name =="assessments" ?"border-[#003262]":" border-transparent"} text-[#003262] pb-2 border-b-[3px] font-bold `}>
						Assessments
					</Link>
					<Link to={"/journey/assessment/results"}
						className={` ${name =="results" ?"border-[#003262]":" border-transparent"} text-[#003262] pb-2 border-b-[3px] font-bold `}>
						Results
					</Link>
				</div>
			</div>
		</>
	);
};

export default Assesmentheader;