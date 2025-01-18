import React from "react";
import TanentData from "../../../Content/dashboard/tanent/TanentData";

import Department from "../../../Content/dashboard/tanent/Department";
import { useParams } from "react-router-dom";
import Designations from "../../../Content/dashboard/tanent/Designations";
import Positions from "../../../Content/dashboard/tanent/Positions";
import Employee from "../../../Content/dashboard/tanent/Employee";
import Header from "../../../Component/dashboard/header/Header";

const Tanent = () => {
	const { name } = useParams();
	console.log(name);
	const { id } = useParams();
	console.log(name);

	return (
		<>
			<Header name={id} />
			{id == "hris" || name == "tanent" ? <TanentData /> : ""}

			{name == "department" && <Department />}
			{name == "designations" && <Designations />}
			{name == "positions" && <Positions />}
			{name == "employee" && <Employee />}
		</>
	);
};

export default Tanent;
