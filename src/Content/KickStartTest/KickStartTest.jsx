import React from "react";
import { KickStartData } from "../../constant/KickStartData/KickStartData";
import KickCard from "../../Component/KicStart/KickCard";
import { FaRegUserCircle } from "react-icons/fa";
import { IoNotificationsCircleOutline } from "react-icons/io5";

const KickStartTest = () => {
	return (
		<>
			<div className="  min-h-screen ">
				<div className=" lg:mx-28 mx-6 min-h-screen  py-8 bg-gradient-to-t from-[#F7F5FA] via-[#F0F8FF4D] to-[#ADD8E6]">
					<div>
						<h1
							className="text-center 
inter text-lg lg:text-5xl font-bold text-text">
							{KickStartData.heading}
						</h1>
						<div className="flex justify-center ">
							<div className="w-[600px]  flex justify-center">
								<p className=" text-center font-bold inter pt-5 text-sm text-text">
									{KickStartData.paragraph}
								</p>
							</div>
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
