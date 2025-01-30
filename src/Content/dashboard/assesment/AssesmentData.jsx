import React from "react";
import { FaPlus } from "react-icons/fa";
import { AssessmentData } from "../../../constant/AssessmentData/AssessmentData";
import { Link, useLocation, useParams } from "react-router-dom";
import Sidenavbar from "../../../Layout/SideNavBar/Sidenavbar";
import { Logo } from "../../../Component/Logo/Logo";
// import Logo from "../../../Component/Logo/Logo";

const AssesmentData = () => {
	const { name } = useParams();
	console.log(name);
	const filterData = AssessmentData.filter((ele) => ele.name == name);
	const assmentResult = filterData && filterData[0]?.exam;

	return (
		<>
			<div className="grid grid-cols-12 px-3 ">
				<Sidenavbar />
				<div className="w-full col-span-10  max-h-screen overflow-y-scroll px-3 lg:border-l-2 lg:border-blue-600">
					<div className="flex lg:justify-end items-center py-3">
						<div className="flex items-center px-5 py-3 gap-5 bg-[#0B87AC] border-2 border-white rounded-lg text-white">
							<Link
								className="flex items-center gap-6 inter"
								to={"/journey/assissment/assessments/question"}>
								<div>
									<FaPlus size={20} />
								</div>
								<div>
									<button className="text-xl font-bold">Create</button>
								</div>
							</Link>
						</div>
					</div>

					<div>
						<div>
							{assmentResult &&
								assmentResult?.map((item, i) => (
									<div key={i}>
										<div>
											<h1 className="text-lg inter font-bold text-secondary">
												{item.title}
											</h1>
										</div>
										<div className="flex open-sans flex-wrap justify-between border-b-2 px-2 border-black shadow-sm shadow-black py-6 my-5">
											<div className="flex flex-wrap gap-5">
												<div className="shadow-sm shadow-black px-3 text-secondary ">
													<Link to="/journey/assissment/assessments/instruction">
														<button>{item.tag}</button>
													</Link>
												</div>
												<div className="shadow-sm shadow-black px-3 text-secondary ">
													<button>{item.tag2}</button>
												</div>
												<div className="shadow-sm px-3 text-red-600 shadow-black">
													<button>{item.group}</button>
												</div>
												<div className="shadow-sm px-3 text-green-600 shadow-black">
													<button>{item.esay}</button>
												</div>
												<div className="shadow-sm px-3 text-primary shadow-black">
													<button>{item.set}</button>
												</div>
												<div className="shadow-sm text-primary px-3 shadow-black">
													<button>{item.pending}</button>
												</div>
												<div className="shadow-sm text-primary px-3 shadow-black">
													<button>{item.version}</button>
												</div>
											</div>
											<div className="flex gap-5">
												<div>{Logo(item.save, "Blue")}</div>
												<div>{Logo(item.edit, "Green")}</div>
												<div>{Logo(item.delete, "Red")}</div>
											</div>
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

export default AssesmentData;
