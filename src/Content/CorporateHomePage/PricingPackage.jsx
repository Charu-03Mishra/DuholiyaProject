import React from "react";
import { FaBell } from "react-icons/fa";
import { CorporateData } from "../../constant/Product/Corporate";
import { useParams } from "react-router-dom";
import { Logo } from "../../Component/Logo/Logo";
const PricingPackage = () => {
	const { id } = useParams();
	const filterData = CorporateData.filter((item) => item.id == id);

	const pricindData = filterData && filterData[0]?.pricingpackage;

	
	return (
		<>
			<div className="lg:px-28 px-5 mt-8">
				<div className="text-center">
					<p className="lg:text-6xl text-2xl font-bold leading-tight">
						We create a monthly pricing package for all standard students
					</p>
					<p className="mt-3 text-lg text-gray-700">
						Basically, we create this package for those who are really
						interested and can benefit from our courses or books. We aim to make
						a low-cost package for them so they can purchase any courses with
						the package they buy from us. Additionally, they will receive free
						books with every package.
					</p>
				</div>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
					{pricindData.map((item, i) => (
						<div
							className=" px-8 py-6 rounded-3xl  shadow-xl shadow-black"
							key={i}>
							<img
								className="mt-5  object-contain"
								src={`/Images/Corporate/${item.image}`}
								alt="Pricing Package"
							/>
							<h1 className="font-bold mt-3 text-xl text-gray-800">
								{item.heading}
							</h1>
							<div className="w-full bg-black h-[2px] mt-2"></div>
							<div className="mt-5">
								{item.subhadingData.map((ele, i) => (
									<div
										className=" flex  mt-2 items-center gap-2 leading-5"
										key={i}>
										{Logo(ele.icon, ele.color)}
										<span className="leading-7  text-black ">
											{ele.subheading}
										</span>
									</div>
								))}
							</div>
							<p className="text-2xl mt-3 font-bold text-black">{item.price}</p>
							<div
								className={` h-[60px] mt-5 mb-5 rounded-2xl border-2 border-black flex items-center justify-center `}
								style={{
									background: item.button,
								}}>
								<button className="px-6 py-2 text-2xl font-bold whitespace-nowrap">
									Purchase Course
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default PricingPackage;