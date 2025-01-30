import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashBoardNavbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<nav className="">
			<div className="flex justify-between px-2 py-5 bg-primary rounded-t-lg">
				<div className="flex gap-8 justify-center items-center">
					<div>
						<Link to={"/"} className="text-3xl font-bold poppins-thin text-[#FFFFFF]">
							Duholiya
						</Link>
					</div>
					<div>
						<h1 className="text-3xl font-bold text-secondary open-sans ">
							Title Here--
						</h1>
					</div>
				</div>

				<div className="hidden md:flex justify-center px-3 items-center gap-5">
					<div>
						<h1 className="text-2xl text-[#00B9E8] open-sans text-right font-bold">
							WelCome Charu
						</h1>
					</div>
					<div>
						<FaRegUserCircle className="text-white" size={30} />
					</div>
					<div>
						<IoNotificationsCircleOutline className="text-white" size={30} />
					</div>
				</div>

				<div className="md:hidden flex items-center">
					<button onClick={toggleMenu} className="text-white">
						<FaBars size={30} />
					</button>
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden bg-[#003262] text-white py-4 px-2">
					<div className="flex justify-between items-center">
						<h1 className="text-2xl open-sans ">WelCome charu</h1>
						<div className="flex gap-5">
							<FaRegUserCircle className="text-white" size={30} />
							<IoNotificationsCircleOutline className="text-white" size={30} />
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default DashBoardNavbar;
