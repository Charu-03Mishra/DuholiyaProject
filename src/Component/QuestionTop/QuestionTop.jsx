import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCloudUploadAlt, FaExpandAlt, FaPlus } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import AddPopUp from "./AddPopUp";
import Dialog from "@mui/material/Dialog";

import Slide from "@mui/material/Slide";
const QuestionTop = () => {
	const [animate, setAnimate] = useState(false);

	const handleClick = () => {
		setAnimate(true);
	};
	const handleClose = () => {
		setAnimate(false);
	};

	return (
		<div className="">
			<div className="flex justify-between  items-center px-5 py-3 border-b border-gray-500">
				<div className="flex items-center bg-white px-2 py-1   border-2 border-gray-300  overflow-hidden rounded-lg ">
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
				<div className=" flex items-center gap-6">
					<div className="  flex item-center cursor-pointer  ">
						<span className="pt-2 text-primary block lg:hidden">
							<FaPlus size={20} onClick={handleClick} />
						</span>
						<span className="hidden px-3 text-xl lg:block">
							<button
								className="hidden px-5 py-2 rounded-lg  bg-secondary text-white text-xl lg:block"
								onClick={handleClick}>
								Add
							</button>
						</span>
					</div>

					<div className="   flex item-center  ">
						<span className="pt-2 text-primary block lg:hidden">
							<FaCloudUploadAlt size={20} />
						</span>
						<button className="hidden px-5 py-2 rounded-lg  bg-primary text-white text-xl lg:block">
							Upload
						</button>
					</div>
					<div className="  flex item-center  ">
						<span className="pt-2 text-primary block lg:hidden">
							<IoLibrary size={20} />
						</span>
						<button className="hidden px-5 py-2 rounded-lg  bg-secondary text-white text-xl lg:block">
							Libary
						</button>
					</div>
					<div className="  flex item-center ">
						<span className="pt-2 text-primary block lg:hidden">
							<FaExpandAlt size={20} />
						</span>
						<button className="hidden px-5 py-2 rounded-lg  bg-secondary text-white text-xl lg:block">
							Expand
						</button>
					</div>
				</div>
			</div>
			{animate && <AddPopUp animate={animate} handleClose={handleClose} />}
		</div>
	);
};

export default QuestionTop;
