import React from "react";
import InstructionHeader from "../../../Component/dashboard/InstructionHeader/InstructionHeader";

import QuestionSideBar from "../../../Layout/QuestionSideNavBar/QuestionSideBar";
import QuestionTop from "../../../Component/QuestionTop/QuestionTop";
import { useParams } from "react-router-dom";

import { AssessmentData } from "../../../constant/AssessmentData/AssessmentData";
import { Logo } from "../../../Component/Logo/Logo";
import Card from "../../../Component/dashboard/Card";
const Question = () => {
	const { name } = useParams();
	console.log(name);
	const filtername = AssessmentData.filter((item) => item.name == name);
	console.log(filtername);
	const questionData = filtername && filtername[0]?.question;

	return (
		<div className="sticky top-0 max-h-screen overflow-y-scroll">
			<InstructionHeader />
			<QuestionTop />
			<div className="grid  grid-cols-12">
				<QuestionSideBar />
				<div className="col-span-10 lg:col-span-10  border-l-2 border-blue-600  ">
					<div className=" w-full">
						<div className="w-full">
							{questionData.map((item, i) => (
								<div key={i}>
									<div className="flex w-full flex-wrap justify-between border-b-2 px-2 border-black shadow-sm   inter ">
										<div className="py-4">
											<p className="text-lg ">{item.heading}</p>
										</div>
										<div className="flex items-center flex-wrap gap-5">
											<div className="shadow-sm bg-secondary py-1 px-1 gap-1 shadow-black flex items-center  rounded-sm">
												<span>{Logo(item.radioButton,"White",10)}</span>
												<button className="text-sm text-white">{item.SingleChoice}</button>
											</div>
											<div className="shadow-sm  px-3 shadow-black  text-secondary">
												<button>{item.tag}</button>
											</div>
											<div className="shadow-sm px-3 shadow-black text-secondary">
												<button>{item.tag2}</button>
											</div>

											<div className="shadow-sm px-3 shadow-black text-green-600 ">
												<button>{item.easy}</button>
											</div>
											<div className="shadow-sm px-3 shadow-black  text-primary ">
												<button>{item.setA}</button>
											</div>
											<div className="shadow-sm px-3 shadow-black  flex items-center">
												<button>{Logo(item.check, "Green")}</button>
											</div>
										</div>
										<div className="flex py-5 flex-wrap gap-5">
											<div>{Logo(item.expand, "Gray")}</div>
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
		</div>
	);
};

export default Question;
