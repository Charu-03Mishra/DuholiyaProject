import React from "react";
import { ResultData } from "../../constant/home/Result";


const Card3 = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-4 md:px-8 lg:px-20 py-10 md:py-20 gap-8 md:gap-12 justify-center items-center">
			{ResultData.card.map((ele, i)=>( <div className=" p-4 bg-white rounded-3xl shadow-2xl" key={i}>
					<div className="flex items-start justify-between">
					<span className="text-gray-500 text-lg font-semibold">{ele.number}</span>
					</div>
					<h3 className="text-xl font-bold text-gray-800 mt-4">
						{ele.title}
						
					</h3>
					<p className="text-gray-600 text-sm md:text-base text-justify mt-2">
					{ele.paragraph}
					</p>
			</div>))}
			
		
		</div>
	);
};

export default Card3;
