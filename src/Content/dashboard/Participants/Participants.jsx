import React, { useState } from "react";
import InstructionHeader from "../../../Component/dashboard/InstructionHeader/InstructionHeader";
import ParticipantsSideNavBar from "../../../Layout/ParticipantsSideNavBar/ParticipantsSideNavBar";
import Group from "./Group";
import Individuals from "./Individuals";

const Participants = () => {
	const [activeTab, setActiveTab] = useState("Group");
	return (
		<div>
			<InstructionHeader />
			<div className="grid grid-cols-12 ">
				<ParticipantsSideNavBar
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>

				{activeTab === "Group" && <Group />}
				{activeTab === "individual" && <Individuals />}
			</div>
		</div>
	);
};

export default Participants;
