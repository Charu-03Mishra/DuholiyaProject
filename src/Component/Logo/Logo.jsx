export const Logo = (Icon, color, size) => {
	console.log(color);

	return (
		<Icon
			className={` text-lg`}
			style={{
				color: color,
				size: size,
			}}
		/>
	);
};
