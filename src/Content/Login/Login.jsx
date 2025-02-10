import React, { useState } from "react";
import { loginValidation } from "../../Schema/ValidationSchema";
import { useFormik } from "formik";
import Input from "../../Component/Input/Input";
import { TbLockPassword } from "react-icons/tb";
import { MdMail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../mocks/auth";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../FireBase/FireBase";
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const initialValues = {
	email: "",
	password: "",
};

const Login = () => {
	const nav = useNavigate();
	const signupGoogle = async () => {
		const result = await signInWithPopup(auth, googleAuthProvider);
		const token = await result.user.getIdToken();
		try {
			if (token) {
				nav("/");
			} else {
				nav("/login");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const [error, setError] = useState("");
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: initialValues,
			validationSchema: loginValidation,
			onSubmit: async (value, action) => {
				const data = {
					isEmployee: false,
					productId: "9289c385-2943-454c-b44d-1d8e5b8dadf5",
					userName: value.email,
					password: value.password,
				};

				const res = await authApi.login(data);

				if (res.status === 200) {
					alert("Login sucessfully ");
					nav("/profile");
					action.resetForm();
				} else {
					setError(res);
				}
			},
		});
	return (
		<div className=" flex justify-center  min-h-screen w-full px-5  ">
			<div className="flex justify-center    min-h-screen md:flex-row flex-col  ">
				<div className=" bg-purple-200 md:block hidden w-2/4  overflow-hidden     ">
					<div className="w-[400px] h-full flex justify-center md:w-[400px] shadow-lg bg-blue-500">
						<img
							className=" w-[400px] "
							src="/Images/Home/login@4x.png"
							alt="Login"
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
							<li class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] md:after:w-28 after:w-12 after:h-1 after:border-b after:border-blue-500 after:border-4 after:inline-block dark:after:border-blue-800">
								<Link to={"/login"}>
									<span class="flex items-center justify-center w-6 h-6 bg-primary text-white rounded-full md:h-8 md:w-8 dark:bg-gray-700 shrink-0">
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
					<h1 className="text-center font-bold text-black text-2xl">Login</h1>
					{error && (
						<p className=" text-red-600 text-lg text-center py-4">{error}</p>
					)}
					<div>
						<h1 className="text-center pt-5 lg:text-lg text-sm">
							Login to Your Account
						</h1>
						<p className="text-center text-sm pt-1">
							Don't have an account?
							<Link to={"/register"}>
								<span className="text-primary text-xs lg:text-xs">
									Sign Up for Free !!
								</span>
							</Link>
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
							<div className="flex text-xs  justify-end">
								<Link>Forget Password?</Link>
							</div>
							<div className="">
								<input
									type="checkbox"
									id="check"
									name="check"
									value="CheckBox"
									className="w-[16px] h-[12px] "
								/>
								<label htmlFor="check" className="text-xs">
									{" "}
									I agree to the Terms & Conditions
								</label>
								<div className=" flex justify-center mb-2">
									<button
										type="submit"
										className="px-8 py-2 bg-primary text-white rounded-lg shadow-md lg:text-lg text-sm mt-4 ">
										Login
									</button>
								</div>
								<div className="flex justify-center ">
									<p className="font-bold text-black text-sm">OR</p>
								</div>
								<div className=" flex pb-5 justify-center mt-2">
									<button
										type="button"
										onClick={signupGoogle}
										className=" border-2 border-black justify-center items-center flex gap-2 p-2 text-black text-sm lg:text-lg  rounded-lg shadow-md">
										<img
											className="w-5 h-5"
											src="Images/Login/google.png"
											alt=""
										/>
										Sign In With Google
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
