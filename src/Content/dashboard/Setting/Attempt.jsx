import React, { useState } from "react";
import SaveButton from "../../../Component/SaveButton/SaveButton";
import DashBoardButton from "../../../Component/dashboard/DashBoardButton/DashBoardButton";

const Attempt = () => {
	const [limited, setLimited] = useState();
	console.log(limited);

	return (
		<>
			<div className="col-span-10 py-5 border-l-2 border-blue-600  ">
				<div className="mb-5">
					<p className="text-center text-[21px] Inter font-bold">
						Max Attempts By Each Participants
					</p>
				</div>
				<div className="flex flex-col items-center px-5">
					<div className="border-2 w-full max-w-[400px] border-blue-800 rounded-lg px-3 py-3">
						<form>
							<div className="py-3 flex gap-3">
								<input
									type="radio"
									name="limited"
									id="limited"
									value={"limited"}
									onChange={(e) => setLimited(e.target.value)}
									className="w-[16px] h-[16px]"
								/>
								 
								<label
									for="limited"
									className="block Inter text-[14px] inter  text-[#4F4F4F]">
									Limited
								</label>
							</div>
							<div className="py-3 flex gap-3">
								<input
									type="radio"
									name="limited"
									id="unlimited"
									value={"unlimited"}
									className="w-[16px] h-[16px]"
									onChange={(e) => setLimited(e.target.value)}
								/>
								<label
									for="access"
									className="block Inter text-[14px] inter  text-[#4F4F4F]">
									Un-Limited
								</label>
								 
							</div>
						</form>
					</div>
					{limited === "limited" && (
						<div>
							<from>
								<div>
									<label
										htmlFor="max"
										className="block Inter text-[14px] inter  text-[#4F4F4F] mt-6">
										Max Attempt
									</label>
									<div className="flex items-center ">
										<div>
											<input
												type="text"
												name="max"
												id="max"
												value="6"
												className=" px-2 py-3 w-[300px] rounded-md border-[1px] open-sans text-[14px]  text-[#3A3A3A] border-[#959595] focus:outline-none"
											/>
										</div>
									</div>
								</div>
							</from>
						</div>
					)}

					<DashBoardButton />
				</div>
			</div>
		</>
	);
};

export default Attempt;
