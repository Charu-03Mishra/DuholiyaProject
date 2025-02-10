import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const DepartmentPopUp = ({ setDepart }) => {
	const [desgn, setDesig] = useState("Research and Development");
	return (
		<div className="bg-white shadow-xl px-5 py-4 w-full max-w-lg rounded-lg mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
			<div className="flex justify-end">
				<button onClick={() => setDepart(false)}>
					<RxCross2 size={20} className="cursor-pointer" />
				</button>
			</div>
			<div className="flex justify-center">
				<p className="text-primary text-xl font-bold">Add Department</p>
			</div>
			<div className="px-4 ">
				<form action="">
					<div className="mt-7">
						<label className="text-[14px]" htmlFor="department">
							Department
						</label>
					</div>
					<div className="w-full">
						<input
							type="text"
							id="department"
							value={desgn}
							className="focus:outline-none text-[14px] border border-gray-300 w-full px-3 h-11 rounded-lg my-4"
						/>
					</div>

					<div className="flex justify-center mt-6">
						<button
							type="submit"
							className="bg-primary font-bold text-white px-10 py-2 text-sm rounded-lg hover:bg-primary-dark transition">
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default DepartmentPopUp;
