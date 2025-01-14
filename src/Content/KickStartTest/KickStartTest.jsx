import React from "react";
import { KickStartData } from "../../constant/KickStartData/KickStartData";
import KickCard from "../../Component/KicStart/KickCard";
import { FaRegUserCircle } from "react-icons/fa";
import { IoNotificationsCircleOutline } from "react-icons/io5";

const KickStartTest = () => {
	return (
		<>
			<div>
				<div className=" lg:mx-28 mx-6  py-8 bg-gradient-to-t from-[#ADD8E6] via-[#F0F8FF4D] to-[#F7F5FA]">
					<div>
						<h1 className="text-center  font-bold text-lg lg:text-6xl">
							{KickStartData.heading}
						</h1>
						<p className="text-center  pt-5 text-lg">
							{KickStartData.paragraph}
						</p>
					</div>
					<div>
						<KickCard />
					</div>
				</div>
			</div>
		</>
	);
};

export default KickStartTest;
