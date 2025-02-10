import React, { useState } from "react";
import SaveButton from "../../../Component/SaveButton/SaveButton";
import { IoIosArrowDown } from "react-icons/io";
import { GoCheckCircleFill } from "react-icons/go";
import DashBoardButton from "../../../Component/dashboard/DashBoardButton/DashBoardButton";

const Grading = () => {
	const [icon, setIcon] = useState(false);

	const handleIcon = () => {
		setIcon(!icon);
	};
	return (
		<>
			<div className="col-span-10  py-5 border-l-2 border-blue-600  ">
				<div className="mb-5">
					<p className="text-center Inter text-xl font-bold">Proctoring Options </p>
				</div>
				<div className="flex flex-col items-center px-5">
					<div className="border-[1px] flex justify-between w-full max-w-[400px] border-[#959595] rounded-lg px-3 py-3">
						<h1 className="open-sans text-[14px]  text-[#3A3A3A]">
							Result Strategy
						</h1>
						<span>
							<IoIosArrowDown onClick={handleIcon} />
						</span>
					</div>
					<div
						className={` ${
							icon ? "block" : "hidden"
						} w-[350px]  px-3 rounded-lg border-2 border-gray-400 shadow-lg  py-2`}>
						<div className="flex items-center pb-5">
							<div className="text-[#3A3A3A]">
								<GoCheckCircleFill size={20} />
							</div>
							<div className="px-4">
								<h1 className="open-sans text-[14px]  text-[#3A3A3A]">
									Qualification
								</h1>
							</div>
						</div>
						<div className="flex items-center pb-5">
							<div className="text-[#3A3A3A]">
								<GoCheckCircleFill size={20} />
							</div>
							<div className="px-4">
								<h1 className="Open Sans text-[14px]  text-[#3A3A3A]">Grade</h1>
							</div>
						</div>
						<div className="flex items-center pb-1">
							<div className="text-[#3A3A3A]">
								<GoCheckCircleFill size={20} />
							</div>
							<div className="px-4">
								<h1 className="Open Sans text-[14px]  text-[#3A3A3A]">
									Default
								</h1>
							</div>
						</div>
					</div>
					<DashBoardButton />
				</div>
			</div>
		</>
	);
};

export default Grading;
