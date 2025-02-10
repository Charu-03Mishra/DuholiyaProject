import React, { useState } from "react";
import SaveButton from "../../../Component/SaveButton/SaveButton";

const Certificate = () => {
	const [certificate, setCertificate] = useState();

	return (
		<>
			<div className="col-span-10    py-5 border-l-2 border-blue-600  ">
				<h1 className="text-center Inter py-4 text-xl">
					Certificate Configuration
				</h1>
				<div className="flex flex-col items-center px-5">
					<div className="border-2 w-full max-w-[400px] border-primary rounded-lg px-3 py-3">
						<form>
							<div className="py-3 flex gap-3 items-center">
								<input
									type="radio"
									name="certificate"
									id="certificate"
									value={"certificated"}
									onChange={(e) => setCertificate(e.target.value)}
									className="w-[18px] h-[18px]"
								/>
								 
								<label
									for="limited"
									className="open-sans text-[14px]  text-[#3A3A3A]">
									Yes, Certificate Requried
								</label>
							</div>
							<div className="py-3 flex gap-3 items-center">
								<input
									type="radio"
									name="certificate"
									id="uncertificate"
									onChange={(e) => setCertificate(e.target.value)}
									value={"uncertificated"}
									className="w-[18px] h-[18px]"
								/>
								<label
									for="access"
									className="open-sans text-[14px]  text-[#3A3A3A]">
									Not, Certificate Requried
								</label>
								 
							</div>
						</form>
					</div>
					{certificate === "certificated" ? (
						<div className="border-2 border-gray-200 mt-20 w-[400px] lg:w-[649.59px] ">
							<div className="lg:mx-10 mx-7 Inter my-10 border-[1px] border-primary">
								<div className=" px-10">
									<h1 className="lg:text-[50.39px] text-[35px]   text-[#3A3A3A]  text-center">
										CERTIFICATE <br></br>
										<span className="lg:text-[22.87px] text-[15px] text-primary ">
											Of ACHIEVMENT
										</span>
									</h1>
									<h1 className="lg:text-[12.6px] text-[9px] pb-3 Inter text-[#3A3A3A] text-center ">
										PROUDLY PRESENTED TO <br></br>
										<span className="lg:text-[39.37px] text-[20px]  text-primary ">
											Recipient
										</span>
									</h1>
									<div className="border-b-[2px] border-[#3A3A3A]"></div>
									<h1 className="text-center text-[12px] lg:text-[15.75px] text-[#3A3A3A] py-5">
										Description, example: for completing course
									</h1>

									<div className="flex justify-between    mb-10  items-center ">
										<div className="">
											<h1 className="border-b text-[6px] lg:text-[12.6px] text-[#3A3A3A] border-black py-2 ">
												August 26, 2022
											</h1>
											<h1 className="text-center text-[#3A3A3A] text-[6px] lg:text-[10.24px]">
												DATE
											</h1>
										</div>
										<div className=" py-5">
											<img src="/Images/Certificate/Medal.png" alt="" />
										</div>
										<div className="">
											<h1 className="border-b border-black  text-[#3A3A3A]  py-1 px-5  text-[6px] lg:text-[12.6px] ">
												Awarder
											</h1>
											<h1 className="text-center text-[6px] lg:text-[10.24px]  text-[#3A3A3A] ">
												SIGNATURE
											</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					) : (
						""
					)}
					{certificate === "certificated" && (
						<div className="my-5 flex justify-center px-20">
							<p className="text-center text-[12.5px] text-[#3A3A3A]">
								To enable certificate issuance, select 'Yes, I want a
								certificate.' Next, choose a preferred template from the
								dropdown menu and proceed to generate the certificate.
							</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Certificate;
