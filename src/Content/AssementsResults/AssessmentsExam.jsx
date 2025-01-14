import React from "react";
import Sidenavbar from "../../Layout/SideNavBar/Sidenavbar";
import { useLocation, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { AssessmentData } from "../../constant/AssessmentData/AssessmentData";
import { Logo } from "../../Component/Logo/Logo";

const AssessmentsExam = () => {
	// const location = useLocation(); // Access the full URL location
	// console.log(AssessmentData, "😊😊😊😊😊😊");
	// // Parse query parameters
	// const queryParams = new URLSearchParams(location.search);
	// const status = queryParams.get("page");
	// console.log(status, "query");
	const { id } = useParams();
	console.log(id);
	const filterid = AssessmentData.filter((ele) => ele.id == id);
	const assmentResult = filterid && filterid[0]?.exam;
	console.log(assmentResult);

	return (
		<>
			<div className="flex px-10 ">
				<Sidenavbar />
				<div className=" w-full max-h-screen overflow-y-scroll px-3 border-l-2 border-blue-600 ">
					<div className="flex  justify-end items-center  py-3">
						<div className="flex items-center px-5 py-3 gap-5 bg-[#0B87AC] border-2  border-white rounded-lg">
							<div className="">
								<FaPlus size={20} />
							</div>
							<div className="">
								<button className="text-xl font-bold ">Create</button>
							</div>
						</div>
					</div>

					<div className=" ">
						<div className="">
							{assmentResult.map((item, i) => (
								<div key={i}>
									<div>
										<h1 className="text-lg">{item.title}</h1>
									</div>
									<div className="flex justify-between border-b-2 px-2  border-black   shadow-sm shadow-black py-6 my-5">
										<div className="flex gap-5">
											<div className="shadow-sm px-3 shadow-black">
												<button>{item.tag}</button>
											</div>
											<div className="shadow-sm px-3 shadow-black">
												<button>{item.tag2}</button>
											</div>
											<div className="shadow-sm px-3 shadow-black">
												<button>{item.group}</button>
											</div>
											<div className="shadow-sm px-3 shadow-black">
												<button>{item.esay}</button>
											</div>
											<div className="shadow-sm px-3 shadow-black">
												<button>{item.set}</button>
											</div>
											<div className="shadow-sm px-3 shadow-black">
												<button>{item.pending}</button>
											</div>
											<div className="shadow-sm px-3 shadow-black">
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

export default AssessmentsExam;
