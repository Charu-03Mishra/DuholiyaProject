import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const SetPop = ({ closehandler }) => {
	const [Value, setValue] = useState("AA-001");
	return (
		<div className=" absolute top-[40%] md:left-[30%] left-[18%] flex justify-center ">
			<div className="bg-white shadow-xl px-5 py-2 md:w-[700px] w-[500px]   ">
				<div className="flex justify-end">
					<RxCross2
						onClick={closehandler}
						size={20}
						className="cursor-pointer"
					/>
				</div>

				<div className="flex justify-center">
					<p className="text-primary text-2xl font-bold">Add Set</p>
				</div>
				<div className="px-24">
					<form action="">
						<div className="mt-7 ">
							<label className="text-xl" htmlFor="">
								Code
							</label>
						</div>
						<div className="w-full  ">
							<input
								type="text "
								value={Value}
								className="focus:outline-none border-2 border-black w-full px-3 h-11 rounded-lg my-4 "
							/>
						</div>
						<div>
							<label for="status" className="text-xl">
								Status
							</label>
						</div>
						<div>
							<select
								name="status"
								id="status"
								className=" w-full h-11 px-3 border-2 border-black rounded-lg my-4  ">
								<option value="automatic">Active</option>
								<option value="explicit">Non-Active</option>
							</select>
						</div>
						<div className="flex justify-center my-10">
							<button
								type="submit"
								className="bg-secondary px-10 py-4 text-xl rounded-lg">
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SetPop;
