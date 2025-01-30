import React, { useState } from "react";

const Duration = () => {
	const [showdur, setDur] = useState();
	console.log(showdur);

	return (
		<>
			<div className="w-full   py-5 border-l-2 border-blue-600  ">
				<div className="mb-5">
					<p className="text-center text-xl font-bold">Duration</p>
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
									className="w-[20px] h-[20px]"
									onChange={(e) => setDur(e.target.value)}
								/>
								 
								<label for="registration" className="px-2 text-lg">
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
									className="w-[20px] h-[20px]"
								/>
								<label for="access" className="px-2 text-lg">
									Limitless
								</label>
								 
							</div>
						</form>
					</div>

					{showdur === "limitless" && (
						<div className="my-5  px-10 py-2 bg-[#00B9E8]">
							<button className="text-lg">Save</button>
						</div>
					)}
					{showdur === "timebound" && (
						<div className="my-5  px-10 py-2 bg-[#00B9E8]">
							<button className="text-lg">Save</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Duration;
