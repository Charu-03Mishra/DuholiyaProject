import React from "react";

import { useLocation, useParams } from "react-router-dom";
import { AssessmentData } from "../../../constant/AssessmentData/AssessmentData";
import { FaPlus } from "react-icons/fa";
import SideNavBarResult from "../../../Layout/SideNavBarResult/SideNavBarResult";
import { Logo } from "../../../Component/Logo/Logo";
import { CiSearch } from "react-icons/ci";
import Tanent from "../../../Component/dashboard/Tanent/Tanent";

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
			<Tanent>
				<div className="grid grid-cols-12 bg-white  px-3 ">
					<SideNavBarResult />
					<div className=" col-span-10 px-3 border-l-2 border-gray-500">
						<div className="flex flex-col md:flex-row py-3 gap-3 justify-between lg:justify-end">
							<div class="lg:w-full w-full relative lg:hidden block">
								<div class="absolute inset-y-0 start-0 z-[] flex items-center ps-3 pointer-events-none">
									<CiSearch />
								</div>
								<input
									type="search"
									id="default-search"
									className=" w-full py-3 px-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Search Title"
									required
								/>
							</div>
							<div className="  ">
								<div className="flex items-center ">
									<div className="flex Inter items-center py-2  bg-[#0B87AC] px-2 gap-3 inter border-2 border-white text-white rounded-lg">
										<div>
											<FaPlus size={15} />
										</div>
										<div>
											<button className="text-[15px]  font-bold">Create</button>
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
											<div className="flex justify-between border-b-2 px-2 border-black shadow-sm shadow-black open-sans py-6 my-5">
												<div className="flex flex-wrap gap-5">
													<div className="shadow-sm px-3 text-secondary shadow-black">
														<button className="text-[12px]">{item.tag}</button>
													</div>
													<div className="shadow-sm px-3 text-secondary shadow-black ">
														<button className="text-[12px]">{item.tag2}</button>
													</div>
													<div className="shadow-sm px-3 text-red-600 shadow-black">
														<button className="text-[12px]">
															{item.group}
														</button>
													</div>
													<div className="shadow-sm px-3 text-green-600 shadow-black">
														<button className="text-[12px]">{item.esay}</button>
													</div>
													<div className="shadow-sm px-3 text-primary  shadow-black">
														<button className="text-[12px]">{item.set}</button>
													</div>
													<div className="shadow-sm px-3 text-primary  shadow-black">
														<button className="text-[12px]">
															{item.pending}
														</button>
													</div>
													<div className="shadow-sm px-3 text-primary  shadow-black">
														<button className="text-[12px]">
															{item.version}
														</button>
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
			</Tanent>
		</>
	);
};

export default AssessmentResult;
