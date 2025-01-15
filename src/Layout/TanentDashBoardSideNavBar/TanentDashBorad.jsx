import React from "react";
import { LuUsersRound } from "react-icons/lu";
import { BiSolidUserPin } from "react-icons/bi";
import { FaCodeFork } from "react-icons/fa6";
import { BiSolidUserDetail } from "react-icons/bi";
import { GiShieldOpposition } from "react-icons/gi";
import { CiUser } from "react-icons/ci";

const TanentDashBorad = () => {
	return (
		<>
			<div className="py-5 px-8 bg-white ">
				<div className=" px-2  ">
					<div className="flex  items-center  px-4 py-2  bg-[#003262] mb-10   overflow-hidden  rounded-lg ">
						<div className="  ">
							<BiSolidUserPin className=" text-white " size={25} />
						</div>
						<div className="px-2">
							<h1 className="text-[20px] text-white ">Tanent Info </h1>
						</div>
					</div>
				</div>
				<div className=" px-2 ">
					<div className="flex  items-center  px-4 py-2  bg-[#003262] mb-10   overflow-hidden  rounded-lg ">
						<div className="  ">
							<FaCodeFork className=" text-white " size={20} />
						</div>
						<div className="px-2">
							<h1 className="text-[20px] text-white  ">Department </h1>
						</div>
					</div>
				</div>
				<div className=" px-2 ">
					<div className="flex items-center   px-4 py-2  bg-[#003262] mb-10   overflow-hidden  rounded-lg ">
						<div className="  ">
							<BiSolidUserDetail className=" text-white " size={25} />
						</div>
						<div className="px-2">
							<h1 className="text-[20px] text-white ">Designations </h1>
						</div>
					</div>
				</div>
				<div className=" px-2 ">
					<div className="flex items-center   px-4 py-2  bg-[#003262] mb-10   overflow-hidden  rounded-lg ">
						<div className="  ">
							<GiShieldOpposition className=" text-white " size={25} />
						</div>
						<div className="px-2">
							<h1 className="text-[20px] text-white ">Positions </h1>
						</div>
					</div>
				</div>
				<div className=" px-2 ">
					<div className="flex items-center   px-4 py-2  bg-[#003262] mb-10   overflow-hidden  rounded-lg ">
						<div>
							<CiUser className=" text-white " size={25} />
						</div>
						<div className="px-2">
							<h1 className="text-[20px] text-white ">Employees </h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TanentDashBorad;
