import React from "react";
import AssementsResults from "../../Content/AssementsResults/AssementsResults";
import AssessmentsExam from "../../Content/AssementsResults/AssessmentsExam";
import { useParams } from "react-router-dom";

const AssementDashboardPage = () => {
	const { id } = useParams();
	console.log(id);
	return (
		<>
			<AssementsResults />
			<AssessmentsExam />
		</>
	);
};

export default AssementDashboardPage;
