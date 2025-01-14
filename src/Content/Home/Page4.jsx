import React from "react";


import Card2 from "../../Component/Card/Card2";

const Page4 = () => {
	return (
		<>
			<div className="mt-10 lg:px-28 px-5   ">
				<h1 className="text-center text-5xl mb-5 font-bold">Use Cases</h1>
				<div className=" grid lg:grid-cols-3 gap-6  grid-cols-1   ">
					<div className="    ">
						<Card2 />
					</div>
					<div className="  h-full justify-center w-full   lg:col-span-2  ">
						<img
							className=" h-full   object-center  shadow-xl shadow-black rounded-xl "
							src="/Images/Home/Blog-Banner-3.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page4;
