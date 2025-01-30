import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { StudyMeterial } from "../../constant/home/study-meterial-data";
import { Logo } from "../Logo/Logo";

const Card1 = () => {
	return (
		<div className="w-full flex flex-wrap gap-6 md:gap-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
				{StudyMeterial.cardData.map((item, i) => (
					<div
						className="bg-white border-2 border-gray-200 p-6 rounded-2xl  shadow-lg transition-all transform hover:scale-105 hover:shadow-xl w-full "
						key={i}>
						<h1 className="text-primary ">{Logo(item.individual)}</h1>
						<h5 className="mb-4 text-lg md:text-xl pt-5   text-gray-900 dark:text-white">
							{item.heading}
						</h5>

						<p className="mb-4 text-lg md:text-base text-gray-700 dark:text-gray-400 text-justify ">
							{item.discription}
						</p>
						<div className="flex items-center  justify-center mx-10 py-2 mt-2 text-lg md:text-lg font-medium text-center text-primary  rounded-lg hover:bg-secondary border-primary border-2 transition duration-300">
							<button className="">Explor More</button>
							<span className="ml-2">
								<FaArrowRight />
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Card1;
