import React, { useEffect, useState } from "react";
import AssessmentCard from "../../Component/ProducrCard/AssessmentCard";
import { easeIn, easeOut, motion } from "framer-motion";
import { authApi } from "../../mocks/auth";
const ProductAssessment = () => {
	// const [data, Setdata] = useState();
	// const getallProduct = async () => {
	// 	const result = await authApi.product();
	// 	Setdata(result);
	// 	// console.log(result, "result");
	// 	console.log(data, "data");
	// };
	// useEffect(() => {
	// 	getallProduct();
	// }, []);
	return (
		<>
			<div className="px-10 mt-5">
				<motion.div
					initial={{ opacity: 0, translateY: "-50%" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					transition={{
						delay: 0.5,
						duration: 1,
						ease: easeIn,
					}}>
					<div className="">
						<div className="">
							<h1 className=" text-6xl text-purple-700 font-bold">Products</h1>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, translateX: "-50%" }}
					whileInView={{ opacity: 1, translateX: 0 }}
					transition={{
						delay: 0.5,
						duration: 1,
						ease: easeOut,
					}}>
					<AssessmentCard />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, translateX: "-50%" }}
					whileInView={{ opacity: 1, translateX: 0 }}
					transition={{
						delay: 1,
						duration: 1,
						ease: easeIn,
					}}>
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
				</motion.div>
			</div>
		</>
	);
};

export default ProductAssessment;
