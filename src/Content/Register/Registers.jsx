import React, { useState } from "react";
import { MdContactPhone, MdMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { RxEyeOpen } from "react-icons/rx";
import { useFormik } from "formik";

import Input from "../../Component/Input/Input";
import { authApi } from "../../mocks/auth";
import { Registrationvalidation } from "../../Schema/ValidationSchema";

const initialValues = {
	email: "",
	password: "",
	confirmpassword: "",
};

export const Registers = () => {
	const [isHidden, setIsHidden] = useState(true);

	const handletoggle = () => {
		setIsHidden((prev) => !prev);
	};
	const icons = isHidden ? <GoEyeClosed /> : <RxEyeOpen />;
	
	const nav = useNavigate();
	const [error, setError] = useState("");
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: initialValues,
			validationSchema: Registrationvalidation,
			onSubmit: async (values, action) => {
				const data = {
					userName: values.email,
					password: values.password,
				};
				const res = await authApi.register(data);
				if (res.status === 200) {
					alert("Register sucessfully");
					nav("/login");
					setError("");
					action.resetForm();
				} else {
					setError(res);
				}
			},
		});

	return (
		<>
			<div className=" w-full px-5 py-2 ">
				<div className="flex justify-center  h-full md:flex-row flex-col w-full ">
					<div className=" bg-purple-200 md:block hidden   overflow-hidden     ">
						<div className="px-5 w-[400px] h-full  flex justify-center ">
							<img
								src="/Images/Login/register.png"
								alt="Contact Animation"
								className=" w-[400px] h-[500px] "
							/>
						</div>
					</div>
					<div className=" py-4 bg-white shadow-xl">
						<div className="lg:px-16 px-20 ">
							<ol class="flex items-center gap-10 justify-between w-full">
								<li class=" ">
									<span class="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full lg:h-12 lg:w-12   shrink-0">
										1
									</span>
								</li>
								<li class="flex w-full  ">
									<span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
										2
									</span>
								</li>
								<li class="flex w-full items-center ">
									<span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
										3
									</span>
								</li>
							</ol>
						</div>

						<div className="mt-2    ">
							<h1 className="text-center font-bold text-black text-2xl">
								Register
							</h1>
							{error && (
								<p className=" text-red-600 text-xs text-center py-4">
									{error}
								</p>
							)}
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
								<div>
									{errors.email && touched.email ? (
										<p className="form-error text-sm text-red-800">
											{errors.email}
										</p>
									) : null}
								</div>
								<Input
									type={isHidden ? "password" : "text"}
									label={"Password "}
									name={"password"}
									id={"password"}
									placeholder={"Enter the Password"}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
									icon={<TbLockPassword size={20} />}
									icon2={icons}
									onClick={handletoggle}
								/>

								<div>
									{errors.password && touched.password ? (
										<p className="form-error text-sm text-red-800">
											{errors.password}
										</p>
									) : null}
								</div>
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
								<div>
									{errors.confirmpassword && touched.confirmpassword ? (
										<p className="form-error text-sm text-red-800">
											{errors.confirmpassword}
										</p>
									) : null}
								</div>
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
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
