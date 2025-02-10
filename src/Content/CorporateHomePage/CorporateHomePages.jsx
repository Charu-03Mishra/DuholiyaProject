import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { authApi } from "../../mocks/auth";
import { useLocation } from "react-router-dom";

const CorporateHomePages = () => {
	// const [data, setdata] = useState();
	// const pathname = useLocation();
	// const id = pathname.pathname.split("/")[2];
	// console.log(id, "id");

	// const getProductId = async (id) => {
	// 	const result = await authApi.productId(id);
	// 	setdata(result);
	// 	console.log(result);
	// };
	// useEffect(() => {
	// 	if (id) {
	// 		getProductId(id);
	// 	}
	// }, [id]);
	return (
		<div>
			<motion.div
				initial={{ opacity: 0, translateX: "-50%" }}
				whileInView={{ opacity: 1, translateX: 0 }}
				transition={{
					duration: 0.75,
					delay: 0.5,
				}}>
				<div
					style={{
						backgroundImage: "url(/Images/Corporate/corporate.jpeg)",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						width: "100%",
					}}
					className=" min-h-screen hidden md:block   bg-fuchsia-700   ">
					<div className="lg:px-10  px-5">
						<div className="pt-44 w-[720px] text-5xl">
							<p className="text-white  ">
								Empowering Businesses Through Smarter Assessments
							</p>
						</div>
						<div className="lg:w-[600px] py-2 ">
							<p className="text-[#3A3A3A] text-sm lg:text-sm text-justify ">
								"Streamline your corporate evaluations with our advanced exam
								platform. From hiring to upskilling, we provide secure,
								customizable, and data-driven assessment tools to help you
								unlock your team’s potential and drive organizational success
								Streamline your corporate evaluations with our advanced exam
								platform. From hiring to upskilling, we provide secure,
								customizable, and data-driven assessment tools to help you
								unlock your team’s potential and drive organizational success."
							</p>
						</div>
						<div className=" py-3 ">
							<div className="w-48 rounded-full flex items-center gap-3 justify-center lg:py-2 py-1 border-2 border-primary bg-white ">
								<button className="text-lg text-primary">Free Demo</button>
								<span className="text-primary">
									<FaArrowRight size={20} />
								</span>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, translateX: "-50%" }}
				whileInView={{ opacity: 1, translateX: 0 }}
				transition={{
					duration: 0.75,
					delay: 0.5,
				}}>
				<div
					style={{
						backgroundImage: "url(/Images/Home/dots.png)",
						backgroundRepeat: "no-repeat",
						width: "100%",
						backgroundPosition: "0 70px",
					}}
					className="  md:hidden block   ">
					<div className="lg:px-10  px-5">
						<div className="  text-2xl text-center">
							<p className="text-black  ">
								Empowering Businesses Through Smarter Assessments
							</p>
						</div>
						<div className=" py-2 ">
							<p className="text-[#3A3A3A] text-sm lg:text-sm text-center ">
								"Streamline your corporate evaluations with our advanced exam
								platform. From hiring to upskilling, we provide secure,
								customizable, and data-driven assessment tools to help you
								unlock your team’s potential and drive organizational success
								Streamline your corporate evaluations with our advanced exam
								platform. From hiring to upskilling, we provide secure,
								customizable, and data-driven assessment tools to help you
								unlock your team’s potential and drive organizational success."
							</p>
						</div>
						<div className=" py-3 ">
							<div className="w-48 rounded-full flex items-center gap-3 justify-center lg:py-2 py-1 border-2 border-primary bg-white ">
								<button className="text-lg text-primary">Free Demo</button>
								<span className="text-primary">
									<FaArrowRight size={20} />
								</span>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default CorporateHomePages;
