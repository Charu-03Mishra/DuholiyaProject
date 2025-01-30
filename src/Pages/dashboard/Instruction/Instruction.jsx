import React from "react";

import { useParams } from "react-router-dom";
import Instructions from "../../../Content/dashboard/Instructions/Instructions";

import Settings from "../../../Content/dashboard/Setting/Settings";
import Question from "../../../Content/dashboard/Question/Question";
import Participants from "../../../Content/dashboard/Participants/Participants";

const Instruction = () => {
	const { name } = useParams();
	console.log(name);

	return (
		<>
			<div>{name == "instruction" ? <Instructions /> : ""}</div>
			<div>{name == "setting" ? <Settings /> : ""}</div>

			<div>{name == "question" ? <Question /> : ""}</div>
			<div>{name == "participant" ? <Participants /> : ""}</div>
		</>
	);
};

export default Instruction;
