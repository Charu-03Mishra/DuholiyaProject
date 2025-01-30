import React from "react";
import Card1 from "../../Component/Card/Card1";
import { StudyMeterial } from "../../constant/home/study-meterial-data";
import { motion } from "framer-motion";
const Page3 = () => {
	return (
		<div>
			<motion.div
				initial={{ opacity: 0, translateX: "-50%" }}
				whileInView={{ opacity: 1, translateX: 0 }}
				transition={{ duration: 2, delay: 1, ease: "easeInOut" }}>
				<div className="px-4 md:px-8 lg:px-24 mt-8   lg:h-[550px]  w-full">
					<div
						className="w-full h-auto rounded-t-xl rounded-bl-3xl rounded-br-3xl  relative p-6 md:p-8 lg:p-12"
						style={{
							background: "linear-gradient(to right, #BCF0D9, #90B8FC)",
						}}>
						<h1 className="text-2xl md:text-3xl text-gray-100  lg:text-4xl font-bold text-center pt-3 md:pt-5">
							{StudyMeterial.title}
						</h1>
						<p className="text-center mt-3 text-gray-100 text-base md:text-lg lg:text-xl">
							{StudyMeterial.subTitle}
						</p>
						<div className="mt-6 flex justify-center w-full px-8 lg:absolute top-36 right-0  ">
							<Card1 />
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Page3;
