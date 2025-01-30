import React, { useState } from "react";
import SaveButton from "../../../Component/SaveButton/SaveButton";
import { IoIosArrowDown } from "react-icons/io";
import { GoCheckCircleFill } from "react-icons/go";

const Grading = () => {
	const [icon, setIcon] = useState(false);

	const handleIcon = () => {
		setIcon(!icon);
	};
	return (
		<>
			<div className="w-full   py-5 border-l-2 border-blue-600  ">
				<div className="mb-5">
					<p className="text-center text-xl font-bold">Proctoring Options </p>
				</div>
				<div className="flex flex-col items-center px-5">
					<div className="border-2 flex justify-between w-full max-w-[400px] border-blue-800 rounded-lg px-3 py-3">
						<h1 className="">Result Strategy</h1>
						<span>
							<IoIosArrowDown onClick={handleIcon} />
						</span>
					</div>
					<div
						className={` ${
							icon ? "block" : "hidden"
						} w-[350px]  px-3 rounded-lg border-2 border-gray-400 shadow-lg  py-2`}>
						<div className="flex items-center pb-5">
							<div>
								<GoCheckCircleFill size={20} />
							</div>
							<div className="px-4">
								<h1>Qualification</h1>
							</div>
						</div>
						<div className="flex items-center pb-5">
							<div>
								<GoCheckCircleFill size={20} />
							</div>
							<div className="px-4">
								<h1>Grade</h1>
							</div>
						</div>
						<div className="flex items-center pb-1">
							<div>
								<GoCheckCircleFill size={20} />
							</div>
							<div className="px-4">
								<h1>Default</h1>
							</div>
						</div>
					</div>
					<SaveButton />
				</div>
			</div>
		</>
	);
};

export default Grading;
