import React from "react";
import { BiSolidUserDetail, BiSolidUserPin } from "react-icons/bi";
import { BsPatchCheckFill } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FaUserGraduate } from "react-icons/fa";
import { FcDepartment } from "react-icons/fc";
import { GiShieldOpposition } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { LuUsers, LuUsersRound } from "react-icons/lu";
import { MdInsertInvitation, MdOutlineDashboard } from "react-icons/md";
import { Link, useLocation, useParams } from "react-router-dom";

const Header = () => {
	const { name } = useParams();
	console.log(name);

	const pathname = useParams();
	console.log(pathname);

	return (
		<>
			<div className="sticky top-[75px] z-[10000] max-h-screen overflow-y-scroll  bg-white">
				<div className="py-4 px-4 sm:px-6 md:px-10 gap-5 md:gap-10 border-b-2 border-black">
					<div className="flex flex-wrap items-center gap-3 md:gap-5">
						<div className="flex items-center gap-2 mulish md:gap-5">
							<MdOutlineDashboard size={20} />
							<Link
								className="text-[#6B6B6B] md:text-lg font-bold"
								to={"/journey"}>
								DashBoard
							</Link>
						</div>

						<IoIosArrowForward className="hidden sm:block" />

						{/* Placeholder Section */}
						<h1 className="text-sm sm:text-base hidden sm:block">....</h1>

						<IoIosArrowForward className="hidden sm:block" />

						<div className="flex items-center gap-2 md:gap-5">
							<LuUsers size={20} />

							<h1 className="text-sm sm:text-base md:text-lg">HRIS</h1>
						</div>

						<div className="flex items-center gap-2 ">
							{name == "tanent" ? (
								<BiSolidUserPin className="text-[#003262]" size={20} />
							) : (
								""
							)}
							{name == "department" ? (
								<FcDepartment className="text-[#003262]" size={20} />
							) : (
								""
							)}
							{name == "designations" ? (
								<BiSolidUserDetail className="text-[#003262]" size={20} />
							) : (
								""
							)}
							{name == "positions" ? (
								<GiShieldOpposition className="text-[#003262]" size={20} />
							) : (
								""
							)}
							{name == "employee" ? (
								<CiUser className="text-[#003262]" size={20} />
							) : (
								""
							)}
							{name == "invitation" ? (
								<MdInsertInvitation className="text-[#003262]" size={20} />
							) : (
								""
							)}
							{name == "approve" ? (
								<BsPatchCheckFill className="text-[#003262]" size={20} />
							) : (
								""
							)}
							{name == "Users" ? (
								<LuUsersRound className="text-[#003262]" size={20} />
							) : (
								""
							)}
							{name == "group" ? (
								<FaUserGraduate className="text-[#003262]" size={20} />
							) : (
								""
							)}

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
