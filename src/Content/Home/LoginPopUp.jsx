import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaGoogle } from "react-icons/fa";
import Input from "../../Component/Input/Input";
import { Link } from "react-router-dom";

const LoginPopUp = ({ closehandle }) => {
	return (
		<>
			<div className=" flex   items-center justify-center bg-opacity-50">
				<div className="flex   flex-col md:flex-row justify-center  shadow-lg overflow-hidden shadow-gray-400    rounded-lg">
					<div className="w-[450px] hidden md:block md:w-[400px] shadow-lg bg-blue-500">
						<img className="  " src="/Images/Home/login@4x.png" alt="Login" />
					</div>

					<div className="w-[450px] py-3 md:px-5 bg-white px-5 ">
						<div className="flex justify-end">
							<RxCross2
								size={20}
								className="cursor-pointer"
								onClick={closehandle}
							/>
						</div>

						<div>
							<h1 className="text-center text-lg">Login to Your Account</h1>
							<p className="text-center text-sm pt-1">
								Don't have an account?{" "}
								<span className="text-primary">Sign Up for Free !!</span>
							</p>
						</div>
						<div className="flex justify-center">
							<form className="px-3 md:px-5 w-[450px] md:w-full ">
								<Input
									type="email"
									label="Email "
									name="email"
									id="email"
									placeholder="Enter your email"
									icon={<MdMail size={20} />}
								/>
								<Input
									label="Password "
									name="password"
									type="password"
									id="password"
									placeholder="Enter your password"
									icon={<TbLockPassword size={20} />}
								/>
								<div className="flex text-sm justify-end">
									<Link>Forget Password?</Link>
								</div>
								<div className="">
									<input
										type="checkbox"
										id="check"
										name="check"
										value="CheckBox"
										className="w-[17px] h-[12px]"
									/>
									<label htmlFor="check" className="text-sm">
										{" "}
										I agree to the Terms & Conditions
									</label>
									<div className=" flex justify-center mb-2">
										<button
											type="submit"
											className="px-8 py-2 bg-primary text-white rounded-lg shadow-md text-xl mt-4 ">
											Sign In
										</button>
									</div>
									<div className="flex justify-center ">
										<p className="font-bold text-black text-sm">OR</p>
									</div>
									<div className=" flex justify-center mt-2">
										<button
											type="button"
											className=" border-2 border-black justify-center items-center flex gap-2 p-2 text-black  rounded-lg shadow-md">
											<FaGoogle size={20} className="text-black" />
											Sign In With Google
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPopUp;
