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
				<div className=" px-5  grid grid-cols-12  gap-4 md:px-20  mt-10">
					
						<div className="col-span-6 ">
							<img
								className="h-[400px] w-[500px]"
								src={`/Images/Corporate/${learningData.image}`}
								alt=""
							/>
						</div>
				
					
						<div className=" col-span-6  pt-5 ">
							<h1 className="lg:text-3xl text-justify text-[#3A3A3A] font-bold">
								{learningData.heading}
							</h1>

							<p className="text-xs mb-3 pt-2 text-[#545454] text-justify ">
								{learningData.description}
							</p>

							<div className="">
								{learningData.subhadingData.map((item, i) => (
									<div key={i} className="flex gap-3 items-center">
										<div className=" text-primary">
											<IoIosCheckmarkCircle size={20} />
										</div>
										<div className="">
											<ul className=" text-xs leading-10 ">
												<li>{item.subheading}</li>
											</ul>
										</div>
									</div>
								))}
							</div>

							<div className="flex mt-5">
								<div className="">
									<Link className="font-bold text-lg text-primary">
										Learn More
									</Link>
								</div>
								<div className="pl-3">
									<Link className="pt-4 text-primary">
										<FaArrowRightLong size={30} />
									</Link>
								</div>
							</div>
							<div className="w-[140px] h-1  bg-primary"></div>
						</div>
					
				</div>
			</div>
		</>
	);
};

export default Corporate;
