import React from "react";
import { Link, useParams } from "react-router-dom";

import InstructionHeader from "../../../Component/dashboard/InstructionHeader/InstructionHeader";
import { RxCross2 } from "react-icons/rx";

const Instructions = () => {
	const { name } = useParams();
	console.log(name);

	return (
		<>
			<InstructionHeader />
			<div className="mx-4 shadow-xl  shadow-gray-600">
				<div className="lg:px-44 px-5 py-3">
					<form>
						<div>
							<label
								htmlFor="tittle"
								className="block text-[#3A3A3A] text-[16px] inter font-bold mb-1">
								Tittle
							</label>
							<textarea
								name="tittle"
								rows={2}
								className="w-full  rounded-lg text-[14px] px-4 py-4 mt-3 text-[#3A3A3A] border-2 Open Sans border-gray-300 focus:outline-none"
								placeholder="Enter Your Tittle"
							/>
						</div>
						<div className="flex justify-end">
							<button className="bg-[#00B9E8] inter px-10 text-[16px] rounded-lg text-white py-3 ">
								Save
							</button>
						</div>
						<div className="mt-4">
							<h1 className="text-[16px] inter font-bold ">Tags</h1>
							<div className="border-2 mt-4 text-[12px] Open Sans  border-gray-300 rounded-lg flex flex-col md:flex-row gap-5 px-5 py-5">
								<div className="flex items-center py-1 border-2 border-[#003262] px-3 rounded-lg">
									<button className=" text-[#3A3A3A]">Education</button>
									<span>
										<RxCross2 size={15} className="text-[#003262]" />
									</span>
								</div>
								<div className="flex items-center py-1 border-2 border-[#003262] px-3 rounded-lg">
									<button className="text-[#3A3A3A]">Education</button>
									<span>
										<RxCross2 size={15} className="text-[#003262]" />
									</span>
								</div>
								<div className="flex items-center py-1 border-2 border-[#003262] px-3 rounded-lg">
									<button className=" text-[#3A3A3A]">Education</button>
									<span>
										<RxCross2 size={15} className="text-[#003262]" />
									</span>
								</div>
							</div>
						</div>
						<div className="mt-5">
							<label
								htmlFor="about"
								className="block text-[#3A3A3A] inter text-[16px] font-bold mb-1">
								About
							</label>
							<textarea
								name="about"
								rows={7}
								className="w-full Open Sans text-[14px] rounded-lg px-4 py-4 mt-3 text-[#3A3A3A] border-2 border-gray-300 focus:outline-none"
								placeholder="Enter Your About"
							/>
						</div>
						<div className="flex justify-end">
							<button className="bg-[#00B9E8] inter px-10 text-[16px] rounded-lg text-white py-3 ">
								Save
							</button>
						</div>
						<div className="mt-5">
							<label
								htmlFor="description"
								className="block inter text-[#3A3A3A] text-[16px] font-bold mb-1">
								Descriptions
							</label>
							<textarea
								name="description"
								rows={7}
								className="w-full Open Sans text-[14px] rounded-lg px-4 py-4 mt-3 text-[#3A3A3A] border-2 border-gray-300 focus:outline-none"
								placeholder="Enter Your Description"
							/>
						</div>
						<div className="flex justify-end">
							<button className="bg-[#00B9E8] inter px-10 text-[16px] rounded-lg text-white py-3 ">
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Instructions;
