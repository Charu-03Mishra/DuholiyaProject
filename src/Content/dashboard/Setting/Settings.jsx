import React, { useState } from "react";
import InstructionHeader from "../../../Component/dashboard/InstructionHeader/InstructionHeader";
import SideNavBarSetting from "../../../Layout/SideNavbarSettings/SideNavBarSetting";
import { useParams } from "react-router-dom";
import Version from "../Setting/Version";
import Section from "../Setting/Section";
import Set from "../Setting/Set";
import Schedule from "../Setting/Schedule";
import Access from "../Setting/Access";
import Duration from "../Setting/Duration";
import Attempt from "../Setting/Attempt";
import Proctoring from "../Setting/Proctoring";
import Grading from "../Setting/Grading";
import Certificate from "../Setting/Certificate";

import Tanent from "../../../Component/dashboard/Tanent/Tanent";
import Button from "../../../Component/Button/Button";
const Settings = () => {
	const { name } = useParams();
	console.log(name);

	const [activeTab, setActiveTab] = useState("version");

	return (
		<>
			<InstructionHeader />
			<div className="flex justify-end ">
				{activeTab == "access" && <Button />}
			</div>
			<Tanent>
				<div className="grid grid-cols-12 bg-white ">
					<SideNavBarSetting
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					{activeTab == "version" && <Version />}
					{activeTab == "section" && <Section />}
					{activeTab == "set" && <Set />}
					{activeTab == "schedule" && <Schedule />}
					{activeTab == "access" && <Access />}
					{activeTab == "duration" && <Duration />}
					{activeTab == "attempt" && <Attempt />}
					{activeTab == "proctoring" && <Proctoring />}
					{activeTab == "grading" && <Grading />}
					{activeTab == "certificate" && <Certificate />}
				</div>
			</Tanent>
		</>
	);
};

export default Settings;
