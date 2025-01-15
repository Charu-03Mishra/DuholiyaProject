import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
	return (
		<>
			<div className="px-2 pt-5">
				<div className="flex items-center bg-white  mb-10 border-2 border-gray-300  overflow-hidden ">
					<div className="px-1 py-1">
						<CiSearch size={20} />
					</div>
					<div className="">
						<input
							type="text"
							placeholder="Search By Title"
							className="focus:outline-none pl-1 w-40"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Search;
