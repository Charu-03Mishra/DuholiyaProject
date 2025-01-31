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
			<div className="px-5  flex justify-center min-h-screen  w-full ">
				<div className="flex justify-center   min-h-screen md:flex-row flex-col  ">
					<div className=" bg-purple-200 md:block hidden w-2/4  overflow-hidden     ">
						<div className="px-5 md:w-[400px] w-[300px] h-full  flex justify-center ">
							<img
								src="/Images/Login/register.png"
								alt="Contact Animation"
								className=" w-[400px] h-[500px] "
							/>
						</div>
					</div>
					<div className=" w-[300px] md:w-[400px] bg-white shadow-xl">
						<div className="flex justify-center py-2   ">
							<ol class="flex items-center ">
								<li class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] md:after:w-28 after:w-12 after:h-1 after:border-b after:border-blue-500 after:border-4 after:inline-block dark:after:border-blue-800">
									<Link to={"/register"}>
										<span class="flex items-center justify-center w-6 h-6 bg-primary text-white rounded-full md:h-8 md:w-8 dark:bg-blue-800 shrink-0">
											1
										</span>
									</Link>
								</li>
								<li class="flex w-full items-center after:content-[''] md:after:w-28 after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-4 after:inline-block dark:after:border-gray-700">
									<Link to={"/login"}>
										<span class="flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full md:h-8 md:w-8 dark:bg-gray-700 shrink-0">
											2
										</span>
									</Link>
								</li>
								<li class="flex items-center w-full">
									<Link to={"/profile"}>
										<span class="flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full md:h-8 md:w-8 dark:bg-gray-700 shrink-0">
											3
										</span>
									</Link>
								</li>
							</ol>
						</div>

						<div className="mt-2    ">
							<h1 className="text-center font-bold text-black text-lg md:text-2xl">
								Register
							</h1>
							{error && (
								<p className=" text-red-600 text-xs text-center py-4">
									{error}
								</p>
							)}
							<form onSubmit={handleSubmit} className=" px-10 lg:px-12">
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
									<Link className="text-xs">Forget Password</Link>
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
										className="px-8 py-2 bg-primary text-white rounded-lg shadow-md text-sm lg:text-lg  mt-4 ">
										Sign In
									</button>
								</div>
								<div className="flex justify-center ">
									<p className="font-bold text-black text-sm">OR</p>
								</div>
								<div className=" flex pb-5 justify-center mt-2">
									<button
										type="button"
										className=" border-2 border-black justify-center items-center flex gap-2 p-2 text-black text-sm lg:text-lg  rounded-lg shadow-md">
										<img  className ="w-5 h-5" src="Images/Login/google.png" alt="" />
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
