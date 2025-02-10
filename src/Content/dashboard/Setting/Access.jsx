import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import SaveButton from "../../../Component/SaveButton/SaveButton";
import DashBoardButton from "../../../Component/dashboard/DashBoardButton/DashBoardButton";

const Access = () => {
	const [inputValue, setInputValue] = useState("");
	const [date, setDate] = useState("21-01-2025");

	console.log(date, "Date");
	return (
		<>
			<div className="col-span-10  py-5 border-l-2 border-blue-600">
				<div className="mb-5">
					<p className="text-center Inter text-[21px] font-bold">
						Allow Participants By
					</p>
				</div>
				<div className="flex flex-col items-center px-5">
					<div className="border-2 w-full max-w-[400px] border-blue-800 rounded-lg px-3 py-3">
						<form>
							<div className="py-3">
								<input
									type="radio"
									name="participants"
									id="registration"
									value="registration"
									className="w-4 h-4"
									onChange={(e) => setInputValue(e.target.value)}
								/>
								<label
									htmlFor="registration"
									className="px-2  Inter text-[14px] text-[#4F4F4F]">
									Registration
								</label>
							</div>
							<div className="py-3">
								<input
									type="radio"
									name="participants"
									id="access"
									value="access"
									className="w-4 h-4"
									onChange={(e) => setInputValue(e.target.value)}
								/>
								<label
									htmlFor="access"
									className="px-2 Inter text-[14px] text-[#4F4F4F]">
									Access Key
								</label>
							</div>
						</form>
					</div>
					{inputValue === "access" && (
						<div className="w-full max-w-[400px] mt-6">
							<form>
								<div>
									<label
										htmlFor="key"
										className="block inter text-[14px] Inter  text-[#4F4F4F]">
										Key
									</label>
									<div className="flex items-center  rounded-md  mt-2">
										<input
											type="text"
											name="key"
											id="key"
											value="6543797564"
											readOnly
											className="w-full  border-[1px] rounded-md border-[#EEEEEE] text-[#3A3A3A] px-3 py-2 Open Sans text-[14px] focus:outline-none"
										/>
									</div>
								</div>
								<div className="mt-4">
									<label
										htmlFor="expire"
										className="block Inter text-[14px] inter  text-[#4F4F4F]">
										Expire On
									</label>
									<div className="mt-2">
										<input
											type="date"
											name="expire"
											id="expire"
											onChange={(e) => setDate(e.target.value)}
											value={date}
											className="w-full  border-[1px] rounded-md border-[#EEEEEE] text-[#3A3A3A] px-3 py-2 Open Sans text-[14px] focus:outline-none"
										/>
									</div>
								</div>
							</form>
						</div>
					)}
					<DashBoardButton />
				</div>
			</div>
		</>
	);
};

export default Access;
