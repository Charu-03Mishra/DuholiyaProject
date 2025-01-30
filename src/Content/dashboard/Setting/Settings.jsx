import React, { useState } from "react";
import InstructionHeader from "../../../Component/dashboard/InstructionHeader/InstructionHeader";
import SideNavBarSetting from "../../../Layout/SideNavbarSettings/SideNavBarSetting";
import SettingCard from "../../../Component/SettingCard/SettingCard";
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
import Card from "../../../Component/dashboard/Card";
const Settings = () => {
	const { name } = useParams();
	console.log(name);

	const [activeTab, setActiveTab] = useState("version");

	return (
		<>
			<InstructionHeader />
			<Card>
				<SideNavBarSetting activeTab={activeTab} setActiveTab={setActiveTab} />
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
			</Card>
		</>
	);
};

export default Settings;
