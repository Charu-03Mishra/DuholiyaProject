import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { CorporateData } from "../../constant/Product/Corporate";
import { Link, useLocation, useParams } from "react-router-dom";
import { Logo } from "../../Component/Logo/Logo";
import { motion } from "framer-motion";
import { authApi } from "../../mocks/auth";
import { RxCrossCircled } from "react-icons/rx";
import { CiCircleCheck } from "react-icons/ci";
const PricingPackage = () => {
	const [data, setdata] = useState([]);
	const pathname = useLocation();
	const id = pathname.pathname.split("/")[2];

	const getProductId = async (id) => {
		try {
			const result = await authApi.productId(id);
			setdata(result);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		if (id) {
			getProductId(id);
		}
	}, [id]);
	// const { id } = useParams();
	// const filterData = CorporateData.filter((item) => item.id == id);

	// const pricindData = filterData && filterData[0]?.pricingpackage;
	return (
		<>
			<div className="lg:px-28 px-5 mt-8">
				<motion.div
					initial={{ opacity: 0, translateY: "-50%" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					transition={{
						duration: 0.75,
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
						duration: 0.75,
						delay: 0.5,
						ease: "easeInOut",
					}}>
					<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
						{data?.map((item, i) => (
							<div
								className="px-8 py-6 rounded-3xl  shadow-xl shadow-black "
								key={i}>
								{/* <img
									className="mt-5  object-contain"
									src={`/Images/Corporate/${item.image}`}
									alt="Pricing Package"
								/> */}
								<h1 className="font-bold mt-3 text-xl text-gray-800">
									{item.pricingPlan}
								</h1>
								<div className="w-full bg-black h-[2px] mt-2"></div>
								<div className="mt-5">
									{item?.productPlanDetails.map((ele, i) => (
										<div
											className=" flex  mt-2 items-center gap-2 leading-5"
											key={i}>
											<h1>
												{ele.isIncluded ? (
													<CiCircleCheck className="text-green-600" />
												) : (
													<RxCrossCircled className="text-red-700" />
												)}
											</h1>
											<span className="leading-7  text-[#545454] ">
												{ele.itemTitle}
											</span>
										</div>
									))}
								</div>
								<p className="text-2xl mt-3 font-bold text-black">$299</p>
								<div
									className={` h-[50px] mt-5 mb-5 rounded-lg border-2 bg-primary text-white border-black flex items-center justify-center `}>
									<Link to={"/journey"}>
										<button className=" py-1 text-sm  whitespace-nowrap">
											Purchase Course
										</button>
									</Link>
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
