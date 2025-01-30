import React from "react";
import Page1 from "../Home/Page1";
import { Link, useParams } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CorporateData } from "../../constant/Product/Corporate";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
const Corporate = () => {
	const { id } = useParams();
	console.log(id);
	const filterData = CorporateData.filter((item) => item.id == id);

	const learningData = filterData && filterData[0]?.learning;

	return (
		<>
			<div className="">
				<Page1 />

				<div className="grid lg:grid-cols-2 px-5  gap-4 md:px-28  mt-10">
					<motion.div
						initial={{ opacity: 0, translateX: "-50%" }}
						whileInView={{ opacity: 1, translateX: 0 }}
						exit={{
							translateX: "50%",
							opacity: 0,
							transition: {
								duration: 0.25,
								delay: 2,
								ease: "easeIn",
							},
						}}
						transition={{
							duration: 2,
							delay: 0.5,
							ease: "easeInOut",
						}}>
						<div className="relative ">
							<img
								className="w-full lg:h-[450px] sm:h-[300px] md:h-[350px]"
								src={`/Images/Corporate/${learningData.image}`}
								alt=""
							/>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, translateX: "-50%" }}
						whileInView={{ opacity: 1, translateX: 0 }}
						exit={{
							translateX: "50%",
							opacity: 0,
							transition: {
								duration: 0.25,
								delay: 2,
								ease: "easeIn",
							},
						}}
						transition={{
							duration: 2,
							delay: 0.5,
							ease: "easeInOut",
						}}>
						<div className=" lg:pl-24 pt-5 ">
							<h1 className="lg:text-xl text-justify   font-bold">
								{learningData.heading}
							</h1>

							<p className="text-lg mb-3 pt-2 text-justify ">
								{learningData.description}
							</p>

							<div className="">
								{learningData.subhadingData.map((item, i) => (
									<div key={i} className="flex">
										<div className="mt-2 text-blue-950">
											<IoIosCheckmarkCircle size={25} />
										</div>
										<div className="ml-6">
											<ul className=" text-xl leading-10 ">
												<li>{item.subheading}</li>
											</ul>
										</div>
									</div>
								))}
							</div>

							<div className="flex mt-5">
								<div className="">
									<Link className="font-bold text-lg text-purple-900">
										Learn More
									</Link>
								</div>
								<div className="pl-3">
									<Link className="pt-4 text-purple-900">
										<FaArrowRightLong size={30} />
									</Link>
								</div>
							</div>
							<div className="w-[140px] h-1  bg-purple-900"></div>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Corporate;
