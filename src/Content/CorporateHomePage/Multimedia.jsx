import React from "react";
import Page1 from "../Home/Page1";
import { Link, useParams } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CorporateData } from "../../constant/Product/Corporate";
import { FaArrowRightLong } from "react-icons/fa6";

const Multimedia = () => {
	const { id } = useParams();

	const filterData = CorporateData.filter((item) => item.id == id);

	const multimediaData = filterData && filterData[0]?.multimedia;
	return (
		<>
			<div className=" lg:h-[480px] md:h-[710px] ">
				<div className="grid lg:grid-cols-2 px-5  gap-4 md:px-28  mt-10">
					<div className=" relative ">
						<img
							className="w-full  lg:h-[450px] sm:h-[300px] md:h-[350px]"
							src={`/Images/Corporate/${multimediaData.image}`}
							alt=""
						/>
						<div className="absolute lg:left-[280px] lg:top-52 md:left-10 md:top-32 left-5 top-20 z-10">
							<div className="h-auto w-[90%] rounded-3xl overflow-hidden mx-auto">
								<img
									src="/Images/Corporate/Short detials.png"
									alt="Short Details"
									className="w-full h-auto object-cover"
								/>
							</div>
						</div>
					</div>
					<div className=" lg:pl-24 pt-5 ">
						<h1 className="lg:text-xl text-justify   font-bold">
							{multimediaData.heading}
						</h1>
						<p className="lg:text-lg mb-3 pt-2 text-justify ">
							{multimediaData.description}
						</p>
						<div className="">
							{multimediaData.subhadingData.map((item, i) => (
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
				</div>
			</div>
		</>
	);
};

export default Multimedia;