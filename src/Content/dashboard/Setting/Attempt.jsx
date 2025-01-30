import React, { useState } from "react";
import SaveButton from "../../../Component/SaveButton/SaveButton";

const Attempt = () => {
	const [limited, setLimited] = useState();
	console.log(limited);

	return (
		<>
			<div className="w-full   py-5 border-l-2 border-blue-600  ">
				<div className="mb-5">
					<p className="text-center text-xl font-bold">
						Max Attempts By Each Participants
					</p>
				</div>
				<div className="flex flex-col items-center px-5">
					<div className="border-2 w-full max-w-[400px] border-blue-800 rounded-lg px-3 py-3">
						<form>
							<div className="py-3">
								<input
									type="radio"
									name="limited"
									id="limited"
									value={"limited"}
									onChange={(e) => setLimited(e.target.value)}
									className="w-[20px] h-[20px]"
								/>
								 
								<label for="limited" className="px-2 text-lg">
									Limited
								</label>
							</div>
							<div className="py-3">
								<input
									type="radio"
									name="limited"
									id="unlimited"
									value={"unlimited"}
									className="w-[20px] h-[20px]"
									onChange={(e) => setLimited(e.target.value)}
								/>
								<label for="access" className="px-2 text-lg">
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
										className="block text-base sm:text-lg font-medium text-black mt-6">
										Max Attempt
									</label>
									<div className="flex items-center ">
										<div>
											<input
												type="text"
												name="max"
												id="max"
												value="6"
												className=" px-2 py-3 w-[300px] border-2 rounded-md border-black  text-gray-700 focus:outline-none"
											/>
										</div>
									</div>
								</div>
							</from>
						</div>
					)}

					<SaveButton />
				</div>
			</div>
		</>
	);
};

export default Attempt;
