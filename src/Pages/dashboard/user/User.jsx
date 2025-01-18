import React from "react";
import { useParams } from "react-router-dom";

import Header from "../../../Component/dashboard/header/Header";
import GroupData from "../../../Content/dashboard/user/groupData";
import UserData from "../../../Content/dashboard/user/UserData";
import ApproveData from "../../../Content/dashboard/user/ApproveData";
import InvitationData from "../../../Content/dashboard/user/InvitationData";

const User = () => {
	const { id, name } = useParams();

	return (
		<>
			<Header name={name} />
			{name == "group" && <GroupData />}
			{name == "Users" && <UserData />}
			{name == "approve" && <ApproveData />}
			{name == "invitation" && <InvitationData />}
		</>
	);
};

export default User;
