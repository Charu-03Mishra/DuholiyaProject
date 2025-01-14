import React from "react";
import AssessmentCard from "../../Component/ProducrCard/AssessmentCard";

const ProductAssessment = () => {
	return (
		<>
			<div className="px-10 mt-5">
				<div className="">
					<div className="">
						<h1 className=" text-6xl text-purple-700 font-bold">Products</h1>
					</div>
				</div>
				<AssessmentCard />
				<div className=" ">
					<div className="">
						<h1 className=" text-6xl text-purple-700 font-bold">Solutions</h1>
					</div>
					<div className="grid lg:grid-cols-2 px-4 md:px-28 sm:px-4 gap-5 mb-10 mt-10">
						<div>
							<h1 className="text-4xl font-bold">Prepration Tools</h1>
							<div>
								<ul className="list-disc list-inside mt-5  text-xl leading-10 ml-10">
									<li className="">Few Details</li>
									<li>Few Details</li>
									<li>Few Details</li>
									<li>Few Details</li>
								</ul>
							</div>
						</div>
						<div>
							<h1 className="text-4xl font-bold">Prepration Tools</h1>
							<div>
								<ul className="list-disc list-inside mt-5  text-xl leading-10 ml-10">
									<li>Few Details</li>
									<li>Few Details</li>
									<li>Few Details</li>
									<li>Few Details</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductAssessment;
