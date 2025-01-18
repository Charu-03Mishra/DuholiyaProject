import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Assesment from "./assesment/Assesment";
import Tanent from "./tanent/Tanent";
import User from "./user/User";
import AssessmentResult from "../../Content/dashboard/assesment/AssessmentResult";

const Dashboard = () => {
	const { id } = useParams();

	return (
		<div>
			{id == "assessment" && <Assesment />}

			{id == "hris" && <Tanent />}
			{id == "users" && <User />}
		</div>
	);
};

export default Dashboard;
