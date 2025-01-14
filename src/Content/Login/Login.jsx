import React, { useState } from "react";
import { MdContactPhone, MdMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { RxEyeOpen } from "react-icons/rx";
import { useFormik } from "formik";
import { loginValidation } from "../../Schema/ValidationSchema";
import Input from "../../Component/Input/Input";

const initialValues = {
	email: "",
	password: "",
	confirmpassword: "",
};

export const Login = () => {
	const [isHidden, setIsHidden] = useState(true);

	const handletoggle = () => {
		setIsHidden((prev) => !prev);
	};
	const icons = isHidden ? <GoEyeClosed /> : <RxEyeOpen />;
	const [register, setRegister] = useState("register");
	const nav = useNavigate();

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: initialValues,
			validationSchema: loginValidation,
			onSubmit: (values, action) => {
				setRegister("profile");
				nav("/profile");
				action.resetForm();
			},
		});

	return (
		<>
			<div className="w-full  flex px-5  ">
				<div className="grid md:grid-cols-2 mx-auto w-full lg:max-w-5xl ">
					<div className="w-full bg-purple-200    flex items-center justify-center  overflow-hidden   md:mb-0 border-r-2 border-blue-600 rounded-l-lg rounond">
						<div className="">
							<img
								src="/Images/Login/register.png"
								alt="Contact Animation"
								className="w-full   rounded-xl"
							/>
						</div>
					</div>
					<div className=" md:px-6 py-4  bg-black">
						<div className="px-28">
							<ol class="flex items-center justify-center w-full">
								<li class="flex w-full items-center text-black dark:text-blue-500 after:content-[''] md:after:w-[200px] after:w-[400px]  after:h-1 after:border-b ">
									<span class="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full lg:h-12 lg:w-12   shrink-0">
										1
									</span>
								</li>
								<li class="flex w-full items-center ">
									<span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
										2
									</span>
								</li>
							</ol>
						</div>

						<div className="mt-2    ">
							<h1 className="text-center font-bold text-white text-2xl">
								Register
							</h1>
							<form onSubmit={handleSubmit} className=" px-10 lg:px-14">
								<Input
									type={"email"}
									label={"Email "}
									name={"email"}
									id={"email"}
									placeholder={"Enter the email"}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									icon={<MdMail size={20} />}
								/>
								{/* <div>
									{errors.email && touched.email ? (
										<p className="form-error text-sm text-red-800">
											{errors.email}
										</p>
									) : null}
								</div> */}
								<Input
									type={isHidden ? "password" : "text"}
									label={"Password "}
									name={"password"}
									id={"phonenumber"}
									placeholder={"Enter the Password"}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
									icon={<TbLockPassword size={20} />}
									icon2={icons}
									onClick={handletoggle}
								/>

								{/* <div>
									{errors.phonenumber && touched.phonenumber ? (
										<p className="form-error text-sm text-red-800">
											{errors.phonenumber}
										</p>
									) : null}
								</div> */}
								<div className="flex justify-end">
									<Link>Forget Password</Link>
								</div>
								<Input
									type={"password"}
									label={"Confirm Password "}
									name={"confirmpassword"}
									id={"confirmpasswaord"}
									placeholder={"*********"}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.confirmpassword}
									icon={<TbLockPassword size={20} />}
								/>
								<div className=" sm:mx-12  p-4 flex justify-center">
									<button
										type="submit"
										className="w-full py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-black border-2 border-white rounded-lg shadow-md text-base sm:text-xl mt-4 font-bold">
										Sign Up
									</button>
								</div>
								<div className="flex justify-center mt-2">
									<p className="font-bold text-white text-sm sm:text-lg">OR</p>
								</div>
								<div className="flex justify-center sm:mx-10 mt-3 mb-6 bg-blue-700 border-2 border-white rounded-lg">
									<div className="mt-4 sm:mt-6 text-white">
										<FaGoogle size={20} />
									</div>
									<div className="flex justify-center">
										<button
											type=""
											className="py-2 sm:py-3 pl-2 text-black font-bold rounded-lg shadow-md text-base sm:text-xl mt-1 sm:mt-2">
											Sign Up With Google
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
