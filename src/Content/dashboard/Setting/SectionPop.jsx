import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const SectionPop = ({ closehandler }) => {
	const [Value, setValue] = useState("Mathematics");
	return (
		<div className=" absolute top-[45%] md:left-[33%] left-[15%] flex justify-center ">
			<div className="bg-white shadow-xl px-5 py-2 md:w-[700px] w-[550px]   ">
				<div className="flex justify-end">
					<RxCross2
						size={20}
						onClick={closehandler}
						className="cursor-pointer"
					/>
				</div>

				<div className="flex justify-center">
					<p className="text-primary text-2xl font-bold">Add New Section</p>
				</div>
				<div className="px-24">
					<form action="">
						<div className="mt-7 ">
							<label className="text-xl" htmlFor="">
								Section
							</label>
						</div>
						<div className="w-full  ">
							<input
								type="text "
								value={Value}
								className="focus:outline-none border-2 border-black w-full px-3 h-11 rounded-lg my-4 "
							/>
						</div>
						<div className="flex gap-5 ">
							<div>
								<label for="que" className="text-xl">
									Max Qustion
								</label>

								<select
									name="que"
									id="que"
									className=" w-full h-11 px-3 border-2 border-black rounded-lg my-4  ">
									<option value="automatic">Un-Controlled</option>
									<option value="explicit">Controlled</option>
								</select>
							</div>
							<div>
								<label for="que" className="text-xl">
									Equal Marks
								</label>

								<select
									name="que"
									id="que"
									className=" w-full h-11 px-3 border-2 border-black rounded-lg my-4  ">
									<option value="automatic">Yes</option>
									<option value="explicit">No</option>
								</select>
							</div>
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

export default SectionPop;
