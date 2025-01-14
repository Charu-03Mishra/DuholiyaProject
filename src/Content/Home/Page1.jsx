import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Page1 = () => {
	return (
		<>
			<div className="bg-black w-full h-screen ">
				<div
					className=" flex min-h-[100vh]  flex-col justify-center items-center p-6 text-center"
					style={{
						backgroundImage:
							"url(/Images/Home/jeremy-bishop-G9i_plbfDgk-unsplash.jpg)",
						backgroundSize: "cover", // Ensures the image covers the entire container
						backgroundPosition: "center", // Centers the image
						backgroundRepeat: "no-repeat", // Prevents the image from repeating
						width: "100%", // Optional: Ensures the div stretches across its parent
					}}>
					<div className="max-w-4xl">
						<p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
							Empowering Innovation With Smarter Limitless Solutions.
						</p>
					</div>
					<div className="mt-5 max-w-3xl">
						<p className="text-sm md:text-base lg:text-lg text-white">
							The place to get support, ask and answer questions, and contribute
							to the open-source learning platform.
						</p>
					</div>

					<div className="mt-10">
						<button className="px-8 py-4 text-sm md:text-lg font-semibold border-2 border-black rounded-full bg-blue-900 text-white hover:bg-blue-800 transition">
							<Link to="/login" className="flex gap-3 ">
								Get Started
								<span className="mt-1">
									<FaArrowRight size={25} />
								</span>
							</Link>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page1;
