import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

import { useLocation } from "react-router-dom";

const SearchAndAdd = ({ setstateChange }) => {
	const path = useLocation();
	console.log(path);

	return (
		<div className="flex sm:flex-row gap-5 py-5 flex-col lg:items-center lg:justify-between px-4 ">
			<div class="lg:w-full w-full relative">
				<div class="absolute inset-y-0 start-0 z-[] flex items-center ps-3 pointer-events-none">
					<CiSearch />
				</div>
				<input
					type="search"
					id="default-search"
					className="block w-full py-3 px-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Search Title"
					required
				/>
			</div>
			<div className="flex w-32 items-center justify-center  lg:py-2 py-2  text-white border-2 border-black rounded-lg bg-[#003262]  lg:px-5 ">
				<button
					className="flex items-center gap-3 "
					onClick={() => {
						setstateChange(true);
					}}>
					<span>
						<FaPlus size={20} />
					</span>
					Add
				</button>
			</div>
		</div>
	);
};

export default SearchAndAdd;
