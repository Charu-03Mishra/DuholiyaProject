import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
const Page2 = () => {
	return (
		<div className="w-full h-full px-4 md:px-8 lg:px-24">
			<div className="w-full mt-5 flex items-center justify-between flex-col gap-10  md:flex-row">
				<motion.div
					initial={{ opacity: 0, translateX: "-50%" }}
					whileInView={{ opacity: 1, translateX: 0 }}
					transition={{
						duration: 0.75,
						delay: 0.5,
					}}
					className="w-full md:w-1/2 text-center md:text-left">
					<h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
						We are Focusing On Your Study Goals
					</h1>
					<p className="text-justify mt-4  md:text-lg text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
						dolores, corporis soluta sequi omnis molestiae? Tempora modi quam
						aspernatur nostrum, id assumenda dolorem explicabo placeat impedit,
						ea quo voluptatum ut. Impedit non velit itaque ut? Reiciendis,
						culpa! Velit molestiae pariatur nisi quo nemo.
					</p>
					<p className="text-justify mt-4  md:text-lg text-gray-500">
						Neque sequi suscipit quasi vitae doloribus odio accusamus nesciunt,
						distinctio consequatur nemo vel minus optio, voluptas architecto?
						Ipsa odio facilis animi, ad fugiat non! Veritatis facere nulla non,
						esse odio voluptatum sed dolore, architecto ipsam officiis nisi vel
						aperiam obcaecati deserunt veniam rum, numquam culpa sit
						consequuntur!
					</p>
					<div className="flex items-center w-56 justify-center  py-2 mt-2 text-lg md:text-lg font-medium text-center text-primary  rounded-lg hover:bg-secondary border-primary border-2 transition duration-300">
						<button className="">Explor More</button>
						<span className="ml-2">
							<FaArrowRight />
						</span>
					</div>
				</motion.div>

				{/* Image Section */}
				<motion.div
					initial={{ opacity: 0, rotateX: "90deg" }}
					whileInView={{ opacity: 1, rotateX: 0 }}
					transition={{ duration: 2 }}>
					<div className="lg:w-[400px] mt-5  w-full">
						<img
							className="lg:h-[400px]  shadow-xl shadow-black px-5"
							style={{ borderRadius: "15px 50px" }}
							src="/Images/Home/pngtree-university-or-college-student-study-online-at-home-png-image_11996657.png"
							alt="Study Goals"
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Page2;
