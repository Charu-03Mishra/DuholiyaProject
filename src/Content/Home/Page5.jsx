import React from "react";
import Card3 from "../../Component/Card/Card3";
import { easeInOut, motion } from "framer-motion";

const Page5 = () => {
	return (
		<motion.div
			initial={{ opacity: 0, translateX: "-50%" }}
			whileInView={{ opacity: 1, translateX: 0 }}
			transition={{ duration: 0.75, delay: 0.5 }}>
			<div className="w-full  p-5  items-center justify-center pt-5">
				<h1 className="text-3xl pt-5 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
					Why Choose Us?
				</h1>
				<p className="text-lg sm:text-xl md:text-2xl text-center  px-5 mt-3">
					We Deliver Excellence, Innovation, and Results that Redefine
					Possibilities
				</p>

				<div className=" ">
					<Card3 />
				</div>
			</div>
		</motion.div>
	);
};

export default Page5;
