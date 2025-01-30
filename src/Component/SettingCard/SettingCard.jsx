import React from "react";

const SettingCard = ({ children }) => {
	return (
		<>
			<div className="flex mx-6 my-6  shadow-lg bg-slate-600 shadow-gray-500">{children}</div>
		</>
	);
};

export default SettingCard;
