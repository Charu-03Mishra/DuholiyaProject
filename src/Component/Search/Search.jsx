import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
	return (
		<>
			
				<div className="hidden lg:block  mx-1 my-2 mb-10  border-2 border-[#0B87AC]  overflow-hidden  rounded-lg ">
					<div className="flex justify-between">
						<div className="flex justify-center items-center">
							<div className="px-1 py-1">
								<CiSearch size={20} />
							</div>
							<div className="">
								<input
									type="text"
									placeholder="Search By Title"
									className="focus:outline-none pl-1 "
								/>
							</div>
						</div>
					</div>
				</div>
			
		</>
	);
};

export default Search;
