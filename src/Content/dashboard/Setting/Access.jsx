import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import SaveButton from "../../../Component/SaveButton/SaveButton";

const Access = () => {
	const [inputValue, setInputValue] = useState("");
	const [date, setDate] = useState("21-01-2025");

	console.log(date, "Date");
	return (
		<>
			<div className="w-full py-5 border-l-2 border-blue-600">
				<div className="mb-5">
					<p className="text-center text-xl md:text-2xl font-bold">
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
									className="w-5 h-5"
									onChange={(e) => setInputValue(e.target.value)}
								/>
								<label
									htmlFor="registration"
									className="px-2 text-lg sm:text-base md:text-lg">
									Registration
								</label>
							</div>
							<div className="py-3">
								<input
									type="radio"
									name="participants"
									id="access"
									value="access"
									className="w-5 h-5"
									onChange={(e) => setInputValue(e.target.value)}
								/>
								<label
									htmlFor="access"
									className="px-2 text-lg sm:text-base md:text-lg">
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
										className="block text-sm sm:text-base md:text-lg font-medium text-black">
										Key
									</label>
									<div className="flex items-center border-2 rounded-md border-black mt-2">
										<input
											type="text"
											name="key"
											id="key"
											value="6543797564"
											readOnly
											className="w-full px-3 py-2 text-gray-700 focus:outline-none"
										/>
									</div>
								</div>
								<div className="mt-4">
									<label
										htmlFor="expire"
										className="block text-sm sm:text-base md:text-lg font-medium text-black">
										Expire On
									</label>
									<div className="mt-2">
										<input
											type="date"
											name="expire"
											id="expire"
											onChange={(e) => setDate(e.target.value)}
											value={date}
											className="w-full px-3 py-2 border-2 rounded-md border-black text-gray-700 focus:outline-none"
										/>
									</div>
								</div>
							</form>
						</div>
					)}
					<div className="">
						<SaveButton />
					</div>
				</div>
			</div>
		</>
	);
};

export default Access;
