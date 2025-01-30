import React, { useState } from "react";
import { loginValidation } from "../../Schema/ValidationSchema";
import { useFormik } from "formik";
import Input from "../../Component/Input/Input";
import { TbLockPassword } from "react-icons/tb";
import { MdMail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../mocks/auth";

const initialValues = {
	email: "",
	password: "",
};

const Login = () => {
	const nav = useNavigate();
	const [error, setError] = useState("");
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: initialValues,
			validationSchema: loginValidation,
			onSubmit: async (value, action) => {
				const data = {
					userName: value.email,
					password: value.password,
				};

				const res = await authApi.login(data);
				if (res.status === 200) {
					
					alert("Login sucessfully ");
					nav("/profile");
					action.resetForm();
				}
				else{
                    setError(res)
                }
			},
		});
	return (
		<div className=" flex   items-center justify-center bg-opacity-50">
			<div className="flex   flex-col md:flex-row justify-center  shadow-lg overflow-hidden shadow-gray-400    rounded-lg">
				<div className="w-[450px] hidden md:block md:w-[400px] shadow-lg bg-blue-500">
					<img className="  " src="/Images/Home/login@4x.png" alt="Login" />
				</div>

				<div className="w-[450px] py-3 md:px-5 bg-white px-5 ">
					<div className="lg:px-16 px-20 ">
						<ol class="flex items-center justify-between gap-10 w-full">
							<li class="">
								<span class="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full lg:h-12 lg:w-12   shrink-0">
									1
								</span>
							</li>
							<li class="flex w-full items-center ">
								<span class="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
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
					<h1 className="text-center font-bold text-black text-2xl">Login</h1>
					{error && (
						<p className=" text-red-600 text-lg text-center py-4">{error}</p>
					)}
					<div>
						<h1 className="text-center text-lg">Login to Your Account</h1>
						<p className="text-center text-sm pt-1">
							Don't have an account?{" "}
							<span className="text-primary">Sign Up for Free !!</span>
						</p>
					</div>
					<div className="flex justify-center">
						<form
							onSubmit={handleSubmit}
							className="px-3 md:px-5 w-[450px] md:w-full  ">
							<Input
								type="email"
								label="Email "
								name="email"
								id="email"
								placeholder="Enter your email"
								icon={<MdMail size={20} />}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
							<div>
								{errors.email && touched.email ? (
									<p className="form-error text-sm text-red-800">
										{errors.email}
									</p>
								) : null}
							</div>
							<Input
								label="Password "
								name="password"
								type="password"
								id="password"
								placeholder="Enter your password"
								icon={<TbLockPassword size={20} />}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
							<div>
								{errors.password && touched.password ? (
									<p className="form-error text-sm text-red-800">
										{errors.password}
									</p>
								) : null}
							</div>
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
										Login
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
