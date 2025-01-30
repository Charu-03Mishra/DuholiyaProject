import React, { useState } from "react";
import SaveButton from "../../../Component/SaveButton/SaveButton";

const Certificate = () => {
	const [certificate, setCertificate] = useState();

	return (
		<>
			<div className="w-full   py-5 border-l-2 border-blue-600  ">
				<h1 className="text-center py-4 text-xl">Certificate Configuration</h1>
				<div className="flex flex-col items-center px-5">
					<div className="border-2 w-full max-w-[400px] border-blue-800 rounded-lg px-3 py-3">
						<form>
							<div className="py-3">
								<input
									type="radio"
									name="certificate"
									id="certificate"
									value={"certificated"}
									onChange={(e) => setCertificate(e.target.value)}
									className="w-[20px] h-[20px]"
								/>
								 
								<label for="limited" className="px-2 text-lg">
									Yes, Certificate Requried
								</label>
							</div>
							<div className="py-3">
								<input
									type="radio"
									name="certificate"
									id="uncertificate"
									onChange={(e) => setCertificate(e.target.value)}
									value={"uncertificated"}
									className="w-[20px] h-[20px]"
								/>
								<label for="access" className="px-2 text-lg">
									Not, Certificate Requried
								</label>
								 
							</div>
						</form>
					</div>
					{certificate === "certificated" ? (
						<div className="border-2 border-gray-200 mt-20 w-[330px] lg:w-[800px] h-full">
							<div className="lg:mx-10 mx-7 my-10 border-2 border-primary">
								<div className="lg:px-20 px-10">
									<h1 className="lg:text-7xl text-2xl lg:py-4 py-2 text-center">
										CERTIFICATE <br></br>
										<span className="lg:text-4xl text-lg text-primary font-bold">
											Of ACHIEVMENT
										</span>
									</h1>
									<h1 className="lg:text-3xl text-center lg:py-5 py-2">
										PROUDLY PRESENTED TO <br></br>
										<span className="lg:text-4xl text-xl text-primary font-bold">
											Recipient
										</span>
									</h1>
									<div className="border-b border-black"></div>
									<h1 className="text-center py-5">
										Description, example: for completing course
									</h1>

									<div className="flex px-3  flex-wrap mb-10  items-center lg:justify-between">
										<div>
											<h1 className="border-b border-black py-2 px-5">
												August 26, 2022
											</h1>
											<h1 className="text-center">DATE</h1>
										</div>
										<div className="px-12 py-5">
											<img src="/Images/Certificate/Medal.png" alt="" />
										</div>
										<div className="px-7">
											<h1 className="border-b border-black py-1 px-5 text-lg">
												Awarder
											</h1>
											<h1 className="text-center">SIGNATURE</h1>
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
							<p className="text-center">
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
