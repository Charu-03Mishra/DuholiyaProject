import React from "react";
import { Product } from "../../constant/Product/Product";
import { Link, NavLink } from "react-router-dom";

const AssessmentCard = () => {
	console.log(Product);

	return (
		<>
			<div className=" grid  lg:grid-cols-2 px-4 md:px-28 sm:px-4 gap-5 mt-10 ">
				{Product.productData.map((ele, i) => (
					<div className=" " key={i}>
						<img
							className="lg:h-[450px] sm:h-[300px]  w-full rounded-3xl border-black border-4 shadow-lg shadow-black"
							src={`/Images/Product/${ele.image}`}
							alt=""
						/>
						<div className=" mt-5">
							<Link to={`/corporate/${ele.id}`}>
								<h1 className=" text-center text-2xl font-bold">
									{ele.heading}
								</h1>
							</Link>

							<p className="text-xl text-center mt-2 mb-5">{ele.description}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default AssessmentCard;
