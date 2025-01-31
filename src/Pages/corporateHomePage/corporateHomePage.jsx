import React from "react";
import Corporate from "../../Content/CorporateHomePage/Corporate";
import VideoResponses from "../../Content/CorporateHomePage/VideoResponses";
import Multimedia from "../../Content/CorporateHomePage/Multimedia";
import PricingPackage from "../../Content/CorporateHomePage/PricingPackage";
import DeatilsOfUseCase from "../../Content/CorporateHomePage/DeatilsOfUseCase";
import CorporateHomePages from "../../Content/CorporateHomePage/corporateHomePages";

const CorporateHomePage = () => {
	return (
		<>
			<CorporateHomePages />
			<Corporate />
			<VideoResponses />
			<Multimedia />
			<PricingPackage />
			<DeatilsOfUseCase />
		</>
	);
};

export default CorporateHomePage;
