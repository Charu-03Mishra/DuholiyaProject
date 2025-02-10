import React from "react";
import { RxCross2 } from "react-icons/rx";

const EmployeePopUp = ({ setEmployee }) => {
	return (
		<div className="bg-white shadow-xl px-5 py-4 w-full max-w-lg rounded-lg">
			<div className="flex justify-end">
				<button
					onClick={() => {
						setEmployee(false);
					}}>
					<RxCross2 size={20} className="cursor-pointer" />
				</button>
			</div>
			<div className="flex justify-center">
				<p className="text-primary text-xl mb-5 font-bold">Add Employee</p>
			</div>
			<div className="px-4 ">
				<form>
					<div className="flex flex-col md:flex-row gap-4 md:gap-2 items-center">
						<div className="w-full">
							<label className="text-sm font-medium">First Name</label>
							<input
								type="text"
								className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
							/>
						</div>
						<div className="w-full">
							<label className="text-sm font-medium">Middle Name</label>
							<input
								type="text"
								className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
							/>
						</div>
						<div className="w-full">
							<label className="text-sm font-medium">Last Name</label>
							<input
								type="text"
								className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
							/>
						</div>
					</div>

					<div className="mt-4">
						<label className="text-sm font-medium">Designation</label>
						<input
							type="text"
							className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
						/>
					</div>

					<div className="flex justify-center mt-4">
						<button
							type="submit"
							className="bg-primary text-white font-bold px-6 py-2 rounded-lg w-full md:w-auto">
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EmployeePopUp;
