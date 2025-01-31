import React from "react";

import Page4 from "../Home/Page4";
import { motion } from "framer-motion";
const DeatilsOfUseCase = () => {
	return (
		<>
			<Page4 />
			<motion.div
				initial={{ opacity: 0, translateY: "-50%" }}
				whileInView={{ opacity: 1, translateY: 0 }}
				transition={{
					duration: .75,
					delay: .5,
					ease: "easeInOut",
				}}>
				<div className="mt-10 lg:px-28 px-5   ">
					<div className="mt-14">
						<h1 className="text-center text-[#3A3A3A] lg:text-4xl text-2xl font-bold">
							Unlock Success with Use Cases
						</h1>
						<p className="text-center lg:text-xl text-sm mt-5 text-primary font-bold">
							Transform Ideas into Actionable Solutions
						</p>
						<p className="text-center text-[#545454] lg:text-sm text-sm mt-5 mb-5">
							Use cases are your blueprint for success, bridging the gap between
							vision and execution. They clarify user needs, streamline
							workflows, and ensure every interaction is purposeful—empowering
							teams to deliver systems that truly perform.
						</p>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default DeatilsOfUseCase;
