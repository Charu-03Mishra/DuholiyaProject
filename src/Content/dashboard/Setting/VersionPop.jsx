import React from "react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import DashBoardButton from "../../../Component/dashboard/DashBoardButton/DashBoardButton";

const VersionPop = ({ closehandler }) => {
	const [value, setValue] = useState("1.2");
	return (
		<div className=" absolute top-[40%] md:left-[30%] left-[20%] flex justify-center ">
			<div className="bg-white shadow-xl px-5 py-2 lg:w-[700px]   ">
				<div className="flex justify-end">
					<RxCross2
						onClick={closehandler}
						size={20}
						className="cursor-pointer"
					/>
				</div>

				<div className="flex justify-center">
					<p className="text-primary font-bold text-[21px] inter">
						Add New Version
					</p>
				</div>
				<div className="px-24">
					<form action="">
						<div className="mt-7 ">
							<label className="text-[14px] text-[#3A3A3A] Inter" htmlFor="">
								Version
							</label>
						</div>
						<div className="w-full  ">
							<input
								type="text "
								value={value}
								className="focus:outline-none border-2 Open Sans text-[14px]  text-[#3A3A3A] border-black w-full px-3 h-11 rounded-lg my-4 "
							/>
						</div>
						<div>
							<label for="set" className="text-[14px] text-[#3A3A3A] Inter">
								Sets Creation
							</label>
						</div>
						<div>
							<select
								name="set"
								id="set"
								className=" w-full h-11 px-3 border-2 Open Sans text-[14px]  text-[#3A3A3A] border-black rounded-lg my-4  ">
								<option value="automatic">Automatic</option>
								<option value="explicit">Explicit</option>
							</select>
						</div>
						<DashBoardButton />
					</form>
				</div>
			</div>
		</div>
	);
};

export default VersionPop;
