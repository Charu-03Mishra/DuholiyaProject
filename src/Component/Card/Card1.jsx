import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { StudyMeterial } from "../../constant/home/study-meterial-data";


const Card1 = () => {
	return (
		<div className="w-full     flex flex-wrap gap-6 md:gap-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
			{StudyMeterial.cardData.map((item,i)=>(	<div className="bg-white border-2 border-gray-200 p-6 rounded-2xl  shadow-lg transition-all transform hover:scale-105 hover:shadow-xl w-full " key={i}>
					<a href="#">
						<h5 className="mb-4 text-lg md:text-xl font-bold text-center text-gray-900 dark:text-white">
							{item.heading}
						</h5>
					</a>
					<p className="mb-4 text-sm md:text-base text-gray-700 dark:text-gray-400 text-center leading-relaxed">
						{item.discription}
					</p>
					<a
						href="#"
						className="inline-flex items-center px-4 py-2 mt-2 text-sm md:text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300">
						Read more
						<span className="ml-2">
							<FaArrowRight />
						</span>
					</a>
				</div>))}

				
			</div>
		</div>
	);
};

export default Card1;
