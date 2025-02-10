import React from "react";
import InstructionHeader from "../../../Component/dashboard/InstructionHeader/InstructionHeader";

import QuestionSideBar from "../../../Layout/QuestionSideNavBar/QuestionSideBar";
import QuestionTop from "../../../Component/QuestionTop/QuestionTop";
import { useParams } from "react-router-dom";

import { AssessmentData } from "../../../constant/AssessmentData/AssessmentData";
import { Logo } from "../../../Component/Logo/Logo";
import Tanent from "../../../Component/dashboard/Tanent/Tanent";

const Question = () => {
	const { name } = useParams();
	console.log(name);
	const filtername = AssessmentData.filter((item) => item.name == name);
	console.log(filtername);
	const questionData = filtername && filtername[0]?.question;

	return (
		<div>
			<InstructionHeader />
			<QuestionTop />
			<Tanent>
				<div className="grid bg-white   grid-cols-12">
					<QuestionSideBar />
					<div className="col-span-10 Manrope lg:col-span-10  border-l-2 border-blue-600  ">
						<div className=" w-full">
							<div className="w-full  Open Sans">
								{questionData.map((item, i) => (
									<div key={i}>
										<div className="flex w-full flex-wrap justify-between border-b-2 px-2 border-black shadow-sm   inter ">
											<div className="py-4 ">
												<p className="text-[16px] ">{item.heading}</p>
											</div>
											<div className="flex items-center flex-wrap gap-5">
												<div className="shadow-sm bg-secondary py-1 px-1 gap-1 shadow-black flex items-center  rounded-sm">
													<span>{Logo(item.radioButton, "White", 10)}</span>
													<button className="text-[11.49px] text-white">
														{item.SingleChoice}
													</button>
												</div>
												<div className="shadow-sm  px-3 shadow-black  text-secondary">
													<button className="text-[11.49px]">{item.tag}</button>
												</div>
												<div className="shadow-sm px-3 shadow-black text-secondary">
													<button className="text-[11.49px]">
														{item.tag2}
													</button>
												</div>

												<div className="shadow-sm px-3 shadow-black text-green-600 ">
													<button className="text-[11.49px]">
														{item.easy}
													</button>
												</div>
												<div className="shadow-sm px-3 shadow-black  text-primary ">
													<button className="text-[11.49px]">
														{item.setA}
													</button>
												</div>
												<div className="shadow-sm px-3 shadow-black  flex items-center">
													<button className="text-[11.49px]">
														{Logo(item.check, "Green")}
													</button>
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
			</Tanent>
		</div>
	);
};

export default Question;
