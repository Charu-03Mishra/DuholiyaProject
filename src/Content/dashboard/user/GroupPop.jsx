import React, { useState } from "react";
import { RxCross1, RxCross2 } from "react-icons/rx";
import DashBoardButton from "../../../Component/dashboard/DashBoardButton/DashBoardButton";

const GroupPop = ({ setGroupPop }) => {
	const [Value, setValue] = useState("Group 4");
	const [education, setEducation] = useState("Education");
	const [status, setStatus] = useState("InActive");
	return (
		<div className="bg-white shadow-xl px-6 py-4 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl rounded-lg mx-auto">
			<div className="flex justify-end">
				<button
					onClick={() => {
						setGroupPop(false);
					}}>
					<RxCross2 size={20} className="cursor-pointer" />
				</button>
			</div>

			<div className="flex justify-center inter">
				<p className="text-primary text-[21px] Inter font-bold">Add Group</p>
			</div>
			<div className="px-4">
				<form action="">
					<div className="mt-7 ">
						<label className="text-[14px] Inter text-[#3A3A3A]" htmlFor="">
							Name
						</label>
					</div>
					<div className="w-full  ">
						<input
							type="text "
							value={Value}
							className="focus:outline-none border-[2px] border-[#EEEEEE] Open Sans text-[14px]  text-[#3A3A3A] w-full px-3 h-11 rounded-lg my-4 "
						/>
					</div>
					<div className=" ">
						<div>
							<label for="que" className="text-[14px] Inter text-[#3A3A3A]">
								Tag
							</label>

							<div className="w-full my-4 flex items-center px-3 gap-4 border-[1px] text-[#3A3A3A]  rounded-lg  ">
								<div className="border-2 flex text-[9.32px] items-center border-[#003262] rounded-md px-2">
									{education}
									<span>
										<RxCross1 size={10} className="text-[#003262]" />
									</span>
								</div>
								<div className="border-2 text-[9.32px] flex items-center border-[#003262] rounded-md px-2">
									{education}
									<span>
										<RxCross1 size={10} className="text-[#003262]" />
									</span>
								</div>

								<input
									type="text "
									className="focus:outline-none flex px-3 h-11 rounded-lg  "
								/>
							</div>
						</div>
					</div>
					<div className="mt-2 ">
						<label className="text-[14px] Inter text-[#3A3A3A]" htmlFor="">
							Status
						</label>
					</div>
					<div>
						<select
							name="status"
							id="status"
							className=" w-full h-11 px-3 border-[2px] border-[#EEEEEE] Open Sans text-[14px]  text-[#3A3A3A] rounded-lg my-4  ">
							<option value="explicit" className="text-[#3A3A3A]">
								InActive
							</option>
							<option value="automatic" className="text-[#3A3A3A]">
								Active
							</option>
						</select>
					</div>

					<DashBoardButton />
				</form>
			</div>
		</div>
	);
};

export default GroupPop;
