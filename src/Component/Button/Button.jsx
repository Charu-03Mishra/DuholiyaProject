import React from "react";
import { FaPlus } from "react-icons/fa";

const Button = () => {
	return (
		<div className="flex  items-center justify-center mx-3 my-2  lg:py-2 py-2  text-white   rounded-lg bg-secondary  lg:px-5 ">
			<button className="flex items-center gap-3 Inter " onClick={() => {}}>
				<span>
					<FaPlus size={15} />
				</span>
				Add
			</button>
		</div>
	);
};

export default Button;
