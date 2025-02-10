import React, { useState } from "react";
import DashBoardButton from "../../../Component/dashboard/DashBoardButton/DashBoardButton";

const Duration = () => {
	const [showdur, setDur] = useState();
	console.log(showdur);

	return (
		<>
			<div className="col-span-10    py-5 border-l-2 border-blue-600  ">
				<div className="mb-5">
					<p className="text-center text-[21px] Inter font-bold">Duration</p>
				</div>
				<div className="flex flex-col items-center px-5">
					<div className="border-2 w-full max-w-[400px] border-blue-800 rounded-lg px-3 py-3">
						<form>
							<div className="py-3">
								<input
									type="radio"
									name="duration"
									id="timebound"
									value={"timebound"}
									className="w-[16px] h-[16px]"
									onChange={(e) => setDur(e.target.value)}
								/>
								 
								<label
									for="registration"
									className="px-2  Inter text-[14px] text-[#4F4F4F]">
									Timebound
								</label>
							</div>
							<div className="py-3">
								<input
									type="radio"
									name="duration"
									id="limitless"
									value={"limitless"}
									onChange={(e) => setDur(e.target.value)}
									className="w-[16px] h-[16px]"
								/>
								<label
									for="access"
									className="px-2  Inter text-[14px] text-[#4F4F4F]">
									Limitless
								</label>
								 
							</div>
						</form>
					</div>

					{showdur === "limitless" && (
						<DashBoardButton />
					)}
					{showdur === "timebound" && (
						<DashBoardButton />
					)}
				</div>
			</div>
		</>
	);
};

export default Duration;
