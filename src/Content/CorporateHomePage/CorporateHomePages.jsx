import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const CorporateHomePages = () => {
	return (
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
					backgroundSize:"cover"
				}}
				className=" min-h-screen bg-fuchsia-300  md:block hidden   ">
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
							customizable, and data-driven assessment tools to help you unlock
							your team’s potential and drive organizational success Streamline
							your corporate evaluations with our advanced exam platform. From
							hiring to upskilling, we provide secure, customizable, and
							data-driven assessment tools to help you unlock your team’s
							potential and drive organizational success."
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
			<div
				style={{
					backgroundImage: "url(/Images/Home/dots.png)",
					backgroundPosition: "0 70px",
					backgroundRepeat: "no-repeat",
					width: "100%",
				}}
				className=" min-h-[60vh]  md:hidden block  ">
				<div className="px-4">
					<div className=" py-7">
						<p className="text-primary text-center text-3xl  ">
							Empowering <span className="text-secondary"> Corporates </span>
							And <span className="text-secondary">Educational </span>{" "}
							Institutions with our Innovative Assessment Solutions
						</p>
					</div>
					<div className="py-1">
						<p className="text-primary text-center  text-lg  ">
							Enabled by Artificial Intelligence, cloud-based assessment
							platform easing the process of assessments for invigilators and
							their participants.
						</p>
					</div>
					<div className=" py-3 flex justify-center ">
						<div className="w-44 flex items-center justify-center gap-5  lg:py-2 py-1 border-2 border-primary rounded-lg">
							<button className="text-lg text-primary">Get Started</button>
							<span>
								<FaArrowRight size={20} />
							</span>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default CorporateHomePages;
