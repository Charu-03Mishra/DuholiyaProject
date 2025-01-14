export const Logo = (Icon, color) => {
	console.log(color);

	return (
		<Icon
			className={` text-2xl`}
			style={{
				color: color,
			}}
		/>
	);
};
