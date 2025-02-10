import React, { useEffect, useState } from "react";
import { Product } from "../../constant/Product/Product";
import { Link, NavLink } from "react-router-dom";
import { authApi } from "../../mocks/auth";

const AssessmentCard = () => {
	const [data, Setdata] = useState([]);
	const getallProduct = async () => {
		const result = await authApi.product();
		Setdata(result);
		console.log(result, "result");
		console.log(data, "data");
	};
	useEffect(() => {
		getallProduct();
	}, []);
	console.log(Product);

	return (
		<>
			<div className=" grid  lg:grid-cols-2 px-4 md:px-28 sm:px-4 gap-5 mt-10 ">
				{data.map((ele, i) => (
					<div className=" " key={i}>
						<img
							className="lg:h-[450px] sm:h-[300px]  w-full rounded-3xl border-black border-4 shadow-lg shadow-black"
							src="/Images/Product/0a4e816bd6c4f1fbcfb1ddb32598ddd1.jpg"
							alt=""
						/>
						<div className=" mt-5">
							<Link to={`/corporate/${ele.id}`}>
								<h1 className=" text-center text-2xl font-bold">
									{ele.productName}
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
