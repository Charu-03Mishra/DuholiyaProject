import React from "react";
import { FaBell } from "react-icons/fa";
import { CorporateData } from "../../constant/Product/Corporate";
import { useParams } from "react-router-dom";
import { Logo } from "../../Component/Logo/Logo";
import { motion } from "framer-motion";
const PricingPackage = () => {
	const { id } = useParams();
	const filterData = CorporateData.filter((item) => item.id == id);

	const pricindData = filterData && filterData[0]?.pricingpackage;

	return (
		<>
			<div className="lg:px-28 px-5 mt-8">
				<motion.div
					initial={{ opacity: 0, translateY: "-50%" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					transition={{
						duration: .75,
						delay: 0.5,
						ease: "easeInOut",
					}}>
					<div className="text-center">
						<p className="lg:text-5xl text-2xl font-bold leading-tight">
							We create a monthly pricing package for all standard students
						</p>
						<p className="mt-3 text-lg text-gray-700">
							Basically, we create this package for those who are really
							interested and can benefit from our courses or books. We aim to
							make a low-cost package for them so they can purchase any courses
							with the package they buy from us. Additionally, they will receive
							free books with every package.
						</p>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, translateY: "-50%" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					
					transition={{
						duration: .75,
						delay: .5,
						ease: "easeInOut",
					}}>
					<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
						{pricindData.map((item, i) => (
							<div
								className="px-8 py-6 rounded-3xl  shadow-xl shadow-black "
								key={i}
								style={{ backgroundColor: item.backgroundColor }}>
								<img
									className="mt-5  object-contain"
									src={`/Images/Corporate/${item.image}`}
									alt="Pricing Package"
								/>
								<h1 className="font-bold mt-3 text-xl text-gray-800">
									{item.heading}
								</h1>
								<div className="w-full bg-black h-[2px] mt-2"></div>
								<div className="mt-5">
									{item.subhadingData.map((ele, i) => (
										<div
											className=" flex  mt-2 items-center gap-2 leading-5"
											key={i}>
											{Logo(ele.icon, ele.color)}
											<span className="leading-7  text-[#545454] ">
												{ele.subheading}
											</span>
										</div>
									))}
								</div>
								<p className="text-2xl mt-3 font-bold text-black">
									{item.price}
								</p>
								<div
									className={` h-[50px] mt-5 mb-5 rounded-lg border-2 border-black flex items-center justify-center `}
									style={{
										background: item.button,
									}}>
									<button
										className=" py-1 text-sm  whitespace-nowrap"
										style={{ color: item.text }}>
										Purchase Course
									</button>
								</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default PricingPackage;
