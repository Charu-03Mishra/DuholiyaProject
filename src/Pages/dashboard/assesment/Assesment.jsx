import React from "react";

import AssesmentData from "../../../Content/dashboard/assesment/AssesmentData";
import Assesmentheader from "../../../Content/dashboard/assesment/Assesmentheader";
import AssessmentResult from "../../../Content/dashboard/assesment/AssessmentResult";
import { useLocation, useParams } from "react-router-dom";

const Assesment = () => {
	const path = useLocation();
	const pathname = path.pathname;
	const { name } = useParams();
	return (
		<>
			<Assesmentheader />
			{name == "assessments" ? <AssesmentData /> : ""}
			{name == "results" && (
				<div>
					<AssessmentResult />
				</div>
			)}
		</>
	);
};

export default Assesment;
