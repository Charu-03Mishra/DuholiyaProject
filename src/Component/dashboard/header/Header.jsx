import React from "react";
import { BiSolidUserPin } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

const Header = () => {
	const { name } = useParams();
	// useEffect

	return (
		<>
			<div className="sticky top-20 z-10 bg-white">
				<div className="py-4 px-4 sm:px-6 md:px-10 gap-5 md:gap-10 border-b-2 border-black">
					<div className="flex flex-wrap items-center gap-3 md:gap-5">
						<div className="flex items-center gap-2 md:gap-5">
							<MdOutlineDashboard size={20} />
							<Link className="text-base md:text-lg font-bold" to={"/journey"}>
								DashBoard
							</Link>
						</div>

						<IoIosArrowForward className="hidden sm:block" />

						{/* Placeholder Section */}
						<h1 className="text-sm sm:text-base hidden sm:block">....</h1>

						<IoIosArrowForward className="hidden sm:block" />

						<div className="flex items-center gap-2 md:gap-5">
							<LuUsers size={20} />
							<h1 className="text-sm sm:text-base md:text-lg">HIRS</h1>
						</div>

						<div className="flex items-center gap-2 ">
							<BiSolidUserPin
								size={25}
								md:size={30}
								className="text-[#003262]"
							/>

							<h1 className="text-sm sm:text-base md:text-lg text-[#003262] font-bold capitalize ">
								{`${name}`}
							</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
