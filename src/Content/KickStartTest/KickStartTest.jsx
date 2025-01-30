import React from "react";
import { KickStartData } from "../../constant/KickStartData/KickStartData";
import KickCard from "../../Component/KicStart/KickCard";
import { FaRegUserCircle } from "react-icons/fa";
import { IoNotificationsCircleOutline } from "react-icons/io5";

const KickStartTest = () => {
	return (
		<>
			<div className="pb-10">
				<div className=" lg:mx-28 mx-6 pb-20  py-8 bg-gradient-to-t from-[#ADD8E6] via-[#F0F8FF4D] to-[#F7F5FA]">
					<div>
						<h1
							className="text-center 
inter text-lg lg:text-6xl">
							{KickStartData.heading}
						</h1>
						<div className="">
							<p className="text-center inter pt-5 text-lg">
								{KickStartData.paragraph}
							</p>
						</div>
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
