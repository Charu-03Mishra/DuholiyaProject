import React from "react";

const Button = ({ className, text, onClick, icon1, icon2 }) => {
 
	return (
		<div>
			<button
				className={`${className} flex justify-center border rounded-full my-2 mt-14  items-center gap-4 px-4 py-2`}
				onClick={onClick}>
				{icon1}
				{text} {icon2}
			</button>
		</div>
	);
};

export default Button;
