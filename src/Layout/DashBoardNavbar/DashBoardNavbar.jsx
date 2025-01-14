import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoNotificationsCircleOutline } from "react-icons/io5";

const DashBoardNavbar = () => {
	return (
		<>
			<nav className=" sticky top-0  z-10 overflow-y-scroll max-h-screen ">
				<div className="flex justify-between  px-2 py-2 bg-[#003262] rounded-t-lg  ">
					<div className="flex gap-8 justify-center items-center">
						<div>
							<h1 className="text-3xl font-bold text-[#FFFFFF] ">
								Logo
								<span className="flex flex-col tracking-widest text-[#FFFFFF]">
									Here
								</span>
							</h1>
						</div>
						<div>
							<h1 className="text-3xl font-bold text-[#00B9E8]">
								Title Here--
							</h1>
						</div>
					</div>

					<div className=" flex justify-center px-3   items-center gap-5">
						<div>
							<h1 className="text-2xl text-[#00B9E8]  text-right font-bold ">
								WelCome Ashish
							</h1>
						</div>
						<div className="">
							<FaRegUserCircle className="text-white" size={30} />
						</div>
						<div>
							<IoNotificationsCircleOutline className="text-white" size={30} />
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default DashBoardNavbar;
