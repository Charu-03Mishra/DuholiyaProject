import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
	return (
		<>
			<div className="hidden  lg:block  mt-2  mb-10  border-2 border-gray-200  overflow-hidden ">
				<div className="flex justify-between">
					<div className="flex justify-center py-1 items-center">
						<div className="px-1">
							<CiSearch size={20} />
						</div>
						<div className="">
							<input
								type="text"
								placeholder="Search By Title"
								className="focus:outline-none text-[14px]  "
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Search;
