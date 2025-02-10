import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import DashBoardButton from "../../../Component/dashboard/DashBoardButton/DashBoardButton";

const ApprovePopUp = ({ setApprove }) => {
	const [value, setValue] = useState("Write Your Issue here");
	return (
		<div className="bg-white shadow-xl px-6 py-4 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl rounded-lg mx-auto">
			<div className="flex justify-end">
				<button
					onClick={() => {
						setApprove(false);
					}}>
					<RxCross2 size={20} className="cursor-pointer" />
				</button>
			</div>

			<div className="flex justify-center inter">
				<p className="text-primary text-[21px] Inter font-bold">
				Reject Submission
				</p>
			</div>
			<div className="px-4">
				<form action="">
					<div className="w-full  ">
						<textarea
							type="text "
							rows={10}
							className="focus:outline-none text-[14px] Open Sans border-[2px] text-[#3A3A3A]  border-[#EEEEEE] w-full px-3 py-2 rounded-lg my-4 ">
							{value}
						</textarea>
					</div>

					<DashBoardButton />
				</form>
			</div>
		</div>
	);
};

export default ApprovePopUp;
