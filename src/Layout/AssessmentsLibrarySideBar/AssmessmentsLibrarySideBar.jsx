import React from "react";
import { CiUser } from "react-icons/ci";
import { CiShoppingTag } from "react-icons/ci";
import { GiDuration } from "react-icons/gi";
import { TbTools } from "react-icons/tb";
const AssmessmentsLibrarySideBar = () => {
	return (
		<div>
			<div className="flex lg:gap-3 items-center px-2 lg:px-4 py-2 gap-2 mb-5 border-2 border-black rounded-lg">
				<div>
					<CiUser size={30} />
				</div>
				<div>
					<h1 className="lg:text-lg">Filter By Category</h1>
				</div>
			</div>
			<div className="flex lg:gap-3 items-center px-2 lg:px-4 py-2 gap-2 mb-5 border-2 border-black rounded-lg">
				<div>
					<TbTools size={30} />
				</div>
				<div>
					<h1 className="lg:text-lg">Filter By Tools</h1>
				</div>
			</div>
			<div className="flex lg:gap-3 items-center px-2 lg:px-4 py-2 gap-2 mb-5 border-2 border-black rounded-lg">
				<div>
					<GiDuration size={30} />
				</div>
				<div>
				<h1 className="lg:text-lg">Filter By Exams</h1>
				</div>
			</div>
			<div className="flex lg:gap-3 items-center px-2 lg:px-4 py-2 gap-2 mb-5 border-2 border-black rounded-lg">
				<div>
					<CiShoppingTag size={30} />
				</div>
				<div>
				<h1 className="lg:text-lg">Filter By Tag</h1>
				</div>
			</div>
		</div>
	);
};

export default AssmessmentsLibrarySideBar;
