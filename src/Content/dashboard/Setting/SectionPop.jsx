import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import DashBoardButton from "../../../Component/dashboard/DashBoardButton/DashBoardButton";

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
					<p className="text-primary font-bold text-[21px] inter">
						Add New Section
					</p>
				</div>
				<div className="px-24 ">
					<form action="">
						<div className="mt-7 ">
							<label className="text-[14px] text-[#3A3A3A] Inter" htmlFor="">
								Section
							</label>
						</div>
						<div className="w-full  ">
							<input
								type="text "
								value={Value}
								className="focus:outline-none border-2 Open Sans text-[14px] border-black w-full px-3 h-11 text-[#3A3A3A] rounded-lg my-4 "
							/>
						</div>
						<div className="flex gap-5 ">
							<div>
								<label for="que" className="text-[14px] text-[#3A3A3A] Inter">
									Max Qustion
								</label>

								<select
									name="que"
									id="que"
									className=" w-[200px] h-11 px-3 Open Sans text-[14px]  border-2 border-black rounded-lg my-4 text-[#3A3A3A]  ">
									<option value="automatic">Un-Controlled</option>
									<option value="explicit">Controlled</option>
								</select>
							</div>
							<div>
								<label for="que" className="Inter text-[#3A3A3A] text-[14px] ">
									Equal Marks
								</label>

								<select
									name="que"
									id="que"
									className=" w-[200px] h-11 px-3 border-2 Open Sans text-[14px]  border-black rounded-lg my-4  text-[#3A3A3A] ">
									<option value="automatic">Yes</option>
									<option value="explicit">No</option>
								</select>
							</div>
						</div>

						<DashBoardButton />
					</form>
				</div>
			</div>
		</div>
	);
};

export default SectionPop;
