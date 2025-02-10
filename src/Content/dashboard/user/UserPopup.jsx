import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import DashBoardButton from "../../../Component/dashboard/DashBoardButton/DashBoardButton";

export const UserPopup = ({ setUserPop }) => {
	const [Value, setValue] = useState("Group 4");
	const [email, setEmail] = useState("user45656@gmail.com");
	const [phone, setPhone] = useState("98760569469");
	return (
		<div className="bg-white shadow-xl px-6 py-4 w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg">
			<div className="flex justify-end">
				<button onClick={() => setUserPop(false)}>
					<RxCross2 size={24} className="cursor-pointer" />
				</button>
			</div>

			<div className="flex justify-center">
				<p className="text-primary text-[21px] Inter font-bold">Add User</p>
			</div>
			<div className="px-4">
				<form className="space-y-4">
					<div>
						<label className=" text-[14px] Inter text-[#3A3A3A]">Name</label>
						<input
							type="text"
							value={Value}
							className="w-full  px-3 py-2 border-[2px] border-[#EEEEEE] Open Sans text-[14px]  text-[#3A3A3A] rounded-lg focus:outline-none "
						/>
					</div>

					<div>
						<label className="text-[14px] Inter text-[#3A3A3A]">Email</label>
						<input
							type="email"
							value={email}
							className="w-full px-3 py-2 border-[2px] border-[#EEEEEE] Open Sans text-[14px]  text-[#3A3A3A] rounded-lg focus:outline-none "
						/>
					</div>

					<div>
						<label className="text-[14px] Inter text-[#3A3A3A]">
							Phone Number
						</label>
						<input
							type="number"
							value={phone}
							className="w-full px-3 py-2 border-[2px] border-[#EEEEEE] Open Sans text-[14px]  text-[#3A3A3A] rounded-lg focus:outline-none "
						/>
					</div>

					<div>
						<label className="text-[14px] Inter text-[#3A3A3A]">Status</label>
						<select className="w-full px-3 py-2  border-[2px] border-[#EEEEEE] Open Sans text-[14px]  text-[#3A3A3A]  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
							<option value="Inactive">Inactive</option>
							<option value="Active">Active</option>
						</select>
					</div>

					<DashBoardButton />
				</form>
			</div>
		</div>
	);
};
