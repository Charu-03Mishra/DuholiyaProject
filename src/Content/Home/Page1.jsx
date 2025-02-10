import React from "react";
import { motion } from "framer-motion";

import { FaArrowRight } from "react-icons/fa6";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Page1 = () => {
	const nav = useNavigate();
	const token = localStorage.getItem("authToken");
	const handleNavigate = () => {
		if (token) {
			nav("/corporate/9289c385-2943-454c-b44d-1d8e5b8dadf5");
		} else {
			nav("/login");
		}
	};

	return (
		<motion.div
			drag
			whileDrag={{
				scale: 0.8,
			}}
			dragConstraints={{
				left: 0,
				top: 0,
				right: 1000,
				bottom: 500,
			}}
			dragDirectionLock="true"
			initial={{ opacity: 0, translateY: "-50%" }}
			whileInView={{ opacity: 1, translateY: 0 }}
			transition={{
				duration: 0.75,
				delay: 0.5,
			}}>
			<div
				style={{
					backgroundImage: "url(/Images/Home/bachiImage.png)",
					backgroundRepeat: "no-repeat",
					width: "100%",
				}}
				className=" bg-opacity-30 peer-focus:opacity-100 min-h-[100vh] md:block hidden  bg-cover bg-center ">
				<div className="lg:px-20 px-5">
					<div className="   py-3">
						<p className="text-primary text-3xl  lg:text-6xl ">
							Empowering <span className="text-secondary"> Corporates </span>
							And <span className="text-secondary">Educational </span>{" "}
							Institutions with our Innovative Assessment Solutions
						</p>
					</div>
					<div className="lg:w-[500px]">
						<p className="text-primary text-sm lg:text-lg ">
							Enabled by Artificial Intelligence, cloud-based assessment
							platform easing the process of assessments for invigilators and
							their participants.
						</p>
					</div>
					<div className=" py-3 ">
						<div className="w-44 flex items-center gap-3 justify-center lg:py-2 py-1 border-2 border-primary rounded-lg">
							<button onClick={handleNavigate} className="text-lg text-primary">
								Get Started
							</button>
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
							<button onClick={handleNavigate} className="text-lg text-primary">
								Get Started
							</button>
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

export default Page1;
