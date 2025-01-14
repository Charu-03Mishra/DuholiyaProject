import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../Component/Button/Button";

const Solutions = () => {
	return (
		<>
			<div className="flex justify-center items-center mt-10">
				<div>
					<h1 className="text-center text-2xl">Hii There!!</h1>
					<p className="lg:text-xl text-center">
						Welcome, here you can Transform Ideas into Actionable Solutions.
					</p>
					<div className="flex flex-col items-center justify-center">
						<Button
							text={"Education"}
							className={
								"text-xl hover:bg-purple-200  text-[#7B2AB5] border-[#7B2AB5]"
							}
							icon1={<FaUserCircle size={25} />}
							icon2={<FaArrowRight size={25} />}
						/>
						<Button
							text={"Corporate"}
							className={
								"text-xl hover:bg-purple-200 text-[#7B2AB5] border-[#7B2AB5]"
							}
							icon1={<FaUserCircle size={25} />}
							icon2={<FaArrowRight size={25} />}
						/>
						<Button
							text={"Individual"}
							className={
								" text-xl hover:bg-purple-200 mb-10 text-[#7B2AB5] border-[#7B2AB5]"
							}
							icon1={<FaUserCircle size={25} />}
							icon2={<FaArrowRight size={25} />}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Solutions;
