import React from "react";

const Input = ({
	className,
	value,
	onChange,
	icon,
	icon2,
	label,
	onClick,
	type,
	id,
	onBlur,
	name,
	autoComplete,
	placeholder,
}) => {
	return (
		<>
			<div className="">
				<label
					htmlFor={id}
					className="block text-base sm:text-lg font-medium text-white mt-6 sm:mt-10 mb-2">
					{label}
				</label>
				<div className="flex items-center bg-white lg:w-[350px]  border-2 border-gray-300 rounded-lg overflow-hidden focus-within:border-blue-500 transition">
					<div className="flex items-center justify-center px-4 text-black">
						{icon}
					</div>
					<input
						type={type}
						id={id}
						autoComplete={autoComplete}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
						name={name}
						placeholder={placeholder}
						className="flex-1 p-2 w-20 text-gray-700 focus:outline-none"
					/>
					<div className="flex items-center justify-center px-4 text-black">
						<button onClick={onClick}>{icon2}</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Input;
