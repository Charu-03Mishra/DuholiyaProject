import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import DashBoardButton from "../../../Component/dashboard/DashBoardButton/DashBoardButton";

const InvitationPopUp = ({ setInvitaion }) => {
	const [value, setValue] = useState("INVIT4567");
	const [max, setMax] = useState("33");
	const [date, setDate] = useState("01-01-2567");
	return (
		<div className="bg-white shadow-xl px-6 py-4 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl rounded-lg mx-auto">
			<div className="flex justify-end">
				<button onClick={() => setInvitaion(false)}>
					<RxCross2 size={20} className="cursor-pointer" />
				</button>
			</div>

			<div className="flex justify-center">
				<p className="text-primary text-[21px] Inter font-bold">
					Create Access Code
				</p>
			</div>

			<div className="px-4 ">
				<form>
					<div className="mt-7">
						<label className="text-[14px] Inter text-[#3A3A3A]">
							Invitation Code
						</label>
						<input
							type="text"
							value={value}
							onChange={(e) => setValue(e.target.value)}
							className="focus:outline-none border-[2px] border-[#EEEEEE] Open Sans text-[14px]  text-[#3A3A3A] w-full px-3 h-11 rounded-lg mt-2"
						/>
					</div>

					<div className="mt-4">
						<label className="text-[14px] Inter text-[#3A3A3A]">
							Max Invitation
						</label>
						<input
							type="number"
							value={max}
							onChange={(e) => setMax(e.target.value)}
							className="focus:outline-none border-[2px] border-[#EEEEEE] Open Sans text-[14px]  text-[#3A3A3A] w-full px-3 h-11 rounded-lg mt-2"
						/>
					</div>

					<div className="mt-4">
						<label className="text-[14px] Inter text-[#3A3A3A]">Expiry</label>
						<input
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
							className="focus:outline-none border-[2px] border-[#EEEEEE] Open Sans text-[14px]  text-[#3A3A3A] w-full px-3 h-11 rounded-lg mt-2"
						/>
					</div>

					<div className="mt-4">
						<label className="text-[14px] Inter text-[#3A3A3A]">Status</label>
						<select className="w-full h-11 px-3 border-[2px] border-[#EEEEEE] Open Sans text-[14px]  text-[#3A3A3A] rounded-lg mt-2">
							<option value="inactive" className="text-[#3A3A3A]">
								Inactive
							</option>
							<option value="active" className="text-[#3A3A3A]">
								Active
							</option>
						</select>
					</div>

					<div className="mt-4">
						<label className="text-[14px] Inter text-[#3A3A3A]">Group</label>
						<select className="w-full h-11 px-3 border-[2px] border-[#EEEEEE] Open Sans text-[14px]  text-[#3A3A3A] rounded-lg mt-2">
							<option value="optional" className="text-[#3A3A3A]">
								Optional
							</option>
							<option value="group1" className="text-[#3A3A3A]">
								Group 1
							</option>
						</select>
					</div>

					<div className="flex items-center mt-4 border-2 border-primary px-3 py-2 rounded-lg w-48">
						<input
							type="checkbox"
							id="idcard"
							name="idcard"
							className="w-4 h-4"
						/>
						<label
							htmlFor="idcard"
							className="px-3 text-[#4F4F4F] Inter text-[14px]">
							Require
						</label>
					</div>

					<DashBoardButton />
				</form>
			</div>
		</div>
	);
};

export default InvitationPopUp;
