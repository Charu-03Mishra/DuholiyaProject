import React from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const IndividualsPopUp = ({ setClick }) => {
	return (
		<div className="bg-white shadow-xl px-5 py-4 h-[350px] w-full max-w-lg rounded-lg mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
			<div className="flex justify-end">
				<button
					onClick={() => {
						setClick(false);
					}}>
					<RxCross2 size={20} className="cursor-pointer" />
				</button>
			</div>
			<div className="flex justify-center">
				<p className="text-primary text-[21px] font-bold">Add Individual</p>
			</div>
			<div className="px-4 mt-10 ">
				<form action="">
					<div className="flex items-center border w-full border-gray-200 rounded-lg p-3 text-gray-700">
						<CiSearch />
						<input
							type="search"
							className="focus:outline-none text-sm w-full px-3"
							placeholder="Search by Group"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default IndividualsPopUp;
