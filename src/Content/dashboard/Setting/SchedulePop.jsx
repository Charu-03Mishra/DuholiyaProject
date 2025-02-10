import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import DashBoardButton from "../../../Component/dashboard/DashBoardButton/DashBoardButton";

const SchedulePop = ({ closehandler }) => {
	const [date, setDate] = useState();

	return (
		<div className=" absolute top-[43%] md:left-[33%] left-[13%]  flex justify-center ">
			<div className="bg-white shadow-xl px-5 py-2 md:w-[700px] w-[550px]   ">
				<div className="flex justify-end">
					<RxCross2
						onClick={closehandler}
						size={20}
						className="cursor-pointer"
					/>
				</div>

				<div className="flex justify-center">
					<p className="text-primary text-2xl font-bold">Add Schedule</p>
				</div>
				<div className="px-24">
					<form action="">
						<div>
							<select
								name="default"
								id="default"
								className="Open Sans text-[14px]  text-[#3A3A3A] w-full h-11 px-3 border-[1px] border-[#959595] rounded-lg my-4  ">
								<option value="default">Default</option>
							</select>
						</div>
						<div className="w-full  ">
							<input
								type="date"
								value={date}
								className="focus:outline-none border-[1px] Open Sans text-[14px]  text-[#3A3A3A] border-[#959595] w-full px-3 h-11 rounded-lg my-4 "
							/>
						</div>
						<div className="border-b border-black"></div>
						<div className="flex  justify-center mt-5">
							<div>
								<h1 className=" py-1 text-[14px] text-[#3A3A3A] Inter">
									Avaliable From
								</h1>
								<div className="flex gap-5">
									<div className="px-5 py-2 bg-gray-200 text-[14px] text-[#3A3A3A] Inter">
										8:00 AM
									</div>
									<div className="px-5 py-2 bg-gray-200">
										<p className="text-[14px] text-[#3A3A3A] Inter">
											mm/dd/yyyy
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex  justify-center mt-5">
							<div>
								<h1 className=" py-1 text-[14px] text-[#3A3A3A] Inter">
									Avaliable Untill
								</h1>
								<div className="flex gap-5">
									<div className="px-5 py-2 text-[14px] text-[#3A3A3A] Inter bg-gray-200">
										12:00 AM
									</div>
									<div className="px-5 py-2 bg-gray-200">
										<p className="text-[14px] text-[#3A3A3A] Inter">
											mm/dd/yyyy
										</p>
									</div>
								</div>
							</div>
						</div>
						<DashBoardButton />
					</form>
				</div>
			</div>
		</div>
	);
};

export default SchedulePop;
