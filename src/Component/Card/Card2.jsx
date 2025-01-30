import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Card2 = () => {
	return (
		<div className=" ">
			<div className="px-4  shadow-xl shadow-black rounded-xl  py-5  ">
				<h1 className="text-2xl pt-5 text-center">Details of use cases</h1>
				<p className="text-justify   ml-2 mb-5 mt-4 ">
					<span className="">
						<img
							className="w-[50px] h-[50px]"
							src="/Images/Home/691373_shapes_512x512.png"
							alt=""
						/>
					</span>
					Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
					vulputate libero et velit interdum, ac aliquet odio mattis. Class
					aptent taciti sociosqu ad litora torquent per conubia nostra, per
					inceptos himenaeos. Curabitur tempus urna at turpis condimentum
					lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
					condimentum ac, vestibulum eu nisl.
				</p>
			</div>
			<div className=" flex justify-center mt-6">
				<button className="inline-flex items-center px-5 py-2 text-sm md:text-lg font-medium text-center text-primary bg-white rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 whitespace-nowrap border-2 border-primary">
					E Book
					<span className="ml-3">
						<FaArrowDown />
					</span>
				</button>
			</div>
		</div>
	);
};

export default Card2;
