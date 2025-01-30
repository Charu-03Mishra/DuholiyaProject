import React from "react";

import { useLocation, useParams } from "react-router-dom";
import { AssessmentData } from "../../../constant/AssessmentData/AssessmentData";
import { FaPlus } from "react-icons/fa";
import SideNavBarResult from "../../../Layout/SideNavBarResult/SideNavBarResult";
import { Logo } from "../../../Component/Logo/Logo";
import { CiSearch } from "react-icons/ci";

const AssessmentResult = () => {
	const { id } = useParams();
	const path = useLocation();
	const pathname = path.pathname;
	console.log(pathname);
	const { name } = useParams();
	console.log(name == "results");
	const filterData = AssessmentData.filter((ele) => ele.id == id);
	const assmentResult = filterData && filterData[0]?.exam;
	return (
		<>
			<div className="grid grid-cols-12  px-3 ">
				<SideNavBarResult />
				<div className="w-full col-span-10 max-h-screen overflow-y-scroll px-3 border-l-2 border-blue-600">
					<div className="flex flex-col md:flex-row  justify-between">
						<div className="flex items-center   ">
							<div className="lg:hidden block sm:mt-2 mt-2">
								<div className="flex items-center   border-2 rounded-lg border-black">
									<div className="px-1 py-1">
										<CiSearch size={20} />
									</div>
									<div className="py-1 px-1">
										<input
											type="text"
											placeholder="Search By Title"
											className="focus:outline-none pl-1 sm:w-full w-36  "
										/>
									</div>
								</div>
							</div>
						</div>
						<div className=" py-3">
							<div className="flex items-center ">
								<div className="flex items-center   bg-[#0B87AC] px-5 py-3 gap-5 inter border-2 border-white text-white rounded-lg">
									<div>
										<FaPlus size={20} />
									</div>
									<div>
										<button className="text-xl  font-bold">Create</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div>
							{assmentResult &&
								assmentResult?.map((item, i) => (
									<div key={i}>
										<div>
											<h1 className="text-lg text-secondary inter font-bold">
												{item.title}
											</h1>
										</div>
										<div className="flex flex-wrap justify-between border-b-2 px-2 border-black shadow-sm shadow-black open-sans py-6 my-5">
											<div className="flex flex-wrap gap-5">
												<div className="shadow-sm px-3 text-secondary shadow-black">
													<button>{item.tag}</button>
												</div>
												<div className="shadow-sm px-3 text-secondary shadow-black ">
													<button>{item.tag2}</button>
												</div>
												<div className="shadow-sm px-3 text-red-600 shadow-black">
													<button>{item.group}</button>
												</div>
												<div className="shadow-sm px-3 text-green-600 shadow-black">
													<button>{item.esay}</button>
												</div>
												<div className="shadow-sm px-3 text-primary  shadow-black">
													<button>{item.set}</button>
												</div>
												<div className="shadow-sm px-3 text-primary  shadow-black">
													<button>{item.pending}</button>
												</div>
												<div className="shadow-sm px-3 text-primary  shadow-black">
													<button>{item.version}</button>
												</div>
											</div>
											<div className="">{Logo(item.save, "#003262")}</div>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AssessmentResult;
