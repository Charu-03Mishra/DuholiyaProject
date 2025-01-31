import { MdContactPhone } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { FaRegFileImage } from "react-icons/fa";
import { useFormik } from "formik";
import { profileValidation } from "../../Schema/ValidationSchema";
import { useRef, useState } from "react";
import Input from "../../Component/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { authApi } from "../../mocks/auth";
import { BsGenderFemale } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";

const InitialProfileData = {
	firstname: "",
	lastname: "",
	phone: "",
	email: "",
	dob: "",
	gender: "",
};

const Profiles = () => {
	const [error, seterror] = useState();
	const nav = useNavigate();

	const {
		errors,
		handleBlur,
		onBlur,
		handleChange,
		touched,
		handleSubmit,
		values,
	} = useFormik({
		initialValues: InitialProfileData,
		validationSchema: profileValidation,
		onSubmit: async (value, action) => {
			const data = {
				firstName: value.firstname,
				middleName: "",
				lastName: value.lastname,
				dob: `${value.dob}`,
				gender: value.gender,
				email: value.email,
				phone: `${value.phone}`,
			};

			const res = await authApi.profile(data);
			if (res.status === 200) {
				nav("/journey");
				action.resetForm();
			} else {
				seterror(res);
			}
		},
	});

	return (
		<>
			<div className=" flex justify-center  min-h-screen w-full px-5  ">
				<div className="flex justify-center   min-h-screen md:flex-row flex-col  ">
					<div className=" bg-purple-200 md:block hidden w-2/4  overflow-hidden     ">
						<div className="px-5 md:w-[400px] w-[300px] h-full  flex justify-center ">
							<img
								src="/Images/Login/login_bg.png"
								alt="Contact Animation"
								className=" w-[400px]  h-[600px]   rounded-xl"
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
										<span class="flex items-center justify-center w-6 h-6 bg-primary text-white rounded-full md:h-8 md:w-8 dark:bg-gray-700 shrink-0">
											3
										</span>
									</Link>
								</li>
							</ol>
						</div>

						<div className="mt-2  ">
							<h1 className="text-center font-bold text-black text-2xl">
								Profile
							</h1>
							{error && (
								<p className="text-red-500 text-xs text-center">{error}</p>
							)}
							<form onSubmit={handleSubmit} className=" px-10 lg:px-14">
								<Input
									type={"text"}
									label={"First Name "}
									name={"firstname"}
									id={"name"}
									placeholder={"Enter the First Name"}
									onChange={handleChange}
									onBlur={onBlur}
									value={values.firstname}
									icon={<FaUserGraduate size={20} />}
								/>
								<div>
									{errors.name && touched.name ? (
										<p className="form-error text-sm text-red-800">
											{errors.name}
										</p>
									) : null}
								</div>
								<Input
									type={"text"}
									label={"Last Name "}
									name={"lastname"}
									id={"lastname"}
									placeholder={"Enter the Last Name"}
									onChange={handleChange}
									onBlur={onBlur}
									value={values.lastname}
									icon={<FaUserGraduate size={20} />}
								/>
								<div>
									{errors.lastname && touched.lastname ? (
										<p className="form-error text-sm text-red-800">
											{errors.lastname}
										</p>
									) : null}
								</div>
								<Input
									type={"email"}
									label={"Email "}
									name={"email"}
									id={"email"}
									placeholder={"Enter the email"}
									onChange={handleChange}
									onBlur={onBlur}
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
									type={"text"}
									label={"Phone Number "}
									name={"phone"}
									id={"phone"}
									placeholder={"Enter the Phone Number"}
									onChange={handleChange}
									onBlur={onBlur}
									value={values.phone}
									icon={<MdContactPhone size={20} />}
								/>
								<div>
									{errors.phone && touched.phone ? (
										<p className="form-error text-sm text-red-800">
											{errors.phone}
										</p>
									) : null}
								</div>
								<Input
									type={"date"}
									label={"Date Of Birth"}
									name={"dob"}
									id={"dob"}
									placeholder={"Enter the Date of Birth"}
									onChange={handleChange}
									onBlur={onBlur}
									value={values.dob}
									icon={<CgCalendarDates size={20} />}
								/>
								<div>
									{errors.dob && touched.dob ? (
										<p className="form-error text-sm text-red-800">
											{errors.dob}
										</p>
									) : null}
								</div>
								<Input
									type={"text"}
									label={"Gender"}
									name={"gender"}
									id={"gender"}
									onChange={handleChange}
									onBlur={onBlur}
									value={values.gender}
									icon={<BsGenderFemale size={20} />}
								/>
								<div>
									{errors.gender && touched.gender ? (
										<p className="form-error text-sm text-red-800">
											{errors.gender}
										</p>
									) : null}
								</div>

								<div className=" flex justify-center mb-2">
									<button
										type="submit"
										className="px-2 py-2 border-2 border-black bg-primary text-white rounded-lg shadow-md text-sm mt-4 ">
										Continoue as Individual
									</button>
								</div>
								<div className="flex justify-center ">
									<p className="font-bold text-black text-sm">OR</p>
								</div>

								<div className=" flex justify-center pb-4 mt-2">
									<button
										type="button"
										className=" border-2 border-black text-sm justify-center items-center flex gap-2 p-2 bg-primary  text-white rounded-lg shadow-md">
										Register as Tanent
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

export default Profiles;
