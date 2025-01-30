import React from "react";
import Page1 from "../Home/Page1";
import AssmessmentsLibrarySideBar from "../../Layout/AssessmentsLibrarySideBar/AssmessmentsLibrarySideBar";
import { CiSearch } from "react-icons/ci";
import { AssessmentsLibraryData } from "../../constant/AssessmentsLibraryData/AssessmentsLibraryData";
const AssessmentLibrary = () => {
	return (
		<div>
			<Page1 />
			<div className="flex px-3 py-4 lg:px-10 gap-3 lg:gap-10">
				<div className="w-80">
					<AssmessmentsLibrarySideBar />
				</div>
				<div className="w-full">
					<div className="flex w-full flex-row gap-2 items-center px-3 py-2 border-2 border-black rounded-lg">
						<div>
							<CiSearch size={30} />
						</div>
						<div>
							<input type="text" className="focus:outline-none w-full" />
						</div>
					</div>
					<div className="grid py-4 gap-3 lg:gap-5 md:grid-cols-2 :lg:grid-cols-3  lg:col-span-3">
						{AssessmentsLibraryData.AssessmentLibrary.map((data, i) => (
							<div className="rounded-xl border-2   border-black" key={i}>
								<div className="px-3 lg:px-2 py-2">
									<h1 className="lg:text-3xl text-lg text-primary font-bold">
										{data.heading}
									</h1>
								</div>
								<div className="flex flex-col lg:flex-row gap-5 py-2 px-2">
									<div className="rounded-lg border-2 font-bold  border-primary px-2 lg:px-5 py-1">
										{data.technical}
									</div>
									<div className="rounded-lg border-2 font-bold border-primary px-2 lg:px-5 py-1">
										{data.technical}
									</div>
									<div className="rounded-lg flex-nowrap border-2 font-bold border-primary px-2 lg:px-5 py-1">
										{data.technicalLearning}
									</div>
								</div>

								<div className="px-2 py-2">
									<p className="text-justify text-sm lg:text-lg">{data.paragraph}</p>
								</div>
								<div
									className="py-3 rounded-b-lg flex justify-center"
									style={{
										background: "linear-gradient(to right, #A1D6FA, #3584B9)",
									}}>
									<button className="text-lg font-bold">{data.button}</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AssessmentLibrary;
