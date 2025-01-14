import React from "react";
import Card1 from "../../Component/Card/Card1";
import { StudyMeterial } from "../../constant/home/study-meterial-data";

const Page3 = () => {
	return (
		<div className="px-4 md:px-8 lg:px-12 mt-8   lg:h-[500px]  w-full">
			<div className="w-full h-auto rounded-t-xl rounded-bl-3xl rounded-br-3xl bg-gradient-to-r pb-20 from-purple-500 to-pink-500 relative p-6 md:p-8 lg:p-12">
				<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center pt-3 md:pt-5">
					{StudyMeterial.title}
				</h1>
				<p className="text-center mt-3 text-base md:text-lg lg:text-xl">
					{StudyMeterial.subTitle}
				</p>
				<div className="mt-6 flex justify-center w-full px-8 lg:absolute top-36 right-0  ">
					<Card1 />
				</div>
			</div>
		</div>
	);
};

export default Page3;
