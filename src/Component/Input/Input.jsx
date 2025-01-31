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
					className={`block sm:text-sm text-xs font-medium  mt-5 ${className} `}>
					{label}
				</label>
				<div className="flex items-center bg-white   border-2 border-gray-300 rounded-lg overflow-hidden focus-within:border-blue-500 transition">
					<div className="flex items-center justify-center px-2 text-black ">
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
						className="flex-1 py-2 w-20 text-gray-700 text-xs focus:outline-none"
					/>
					<div className={`flex items-center justify-center px-4 text-black `}>
						<button onClick={onClick}>{icon2}</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Input;
