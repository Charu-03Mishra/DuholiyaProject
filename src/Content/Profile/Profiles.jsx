import { MdContactPhone } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { FaRegFileImage } from "react-icons/fa";
import { useFormik } from "formik";
import { profileValidation } from "../../Schema/ValidationSchema";
import { useRef, useState } from "react";
import Input from "../../Component/Input/Input";
import { Link, useNavigate } from "react-router-dom";

const InitialProfileData = {
	usage: "",
	name: "",
	phonenumber: "",
	email: "",
	file: "",
};

const Profiles = () => {
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
		onSubmit: (value, action) => {
			nav("/journey");
			action.resetForm();
		},
	});

	const [fileName, setFileName] = useState("");
	const fileInputRef = useRef();

	const handleButtonClick = () => {
		fileInputRef.current.click();
	};
	return (
		<>
			<div className="w-full  flex px-5  ">
				<div className="grid md:grid-cols-2 mx-auto w-full lg:max-w-5xl ">
					<div className="w-full bg-purple-200    flex items-center justify-center  overflow-hidden   md:mb-0 border-r-2 border-blue-600 rounded-l-lg rounond">
						<div className="">
							<img
								src="/Images/Login/login_bg.png"
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
									<span class="flex items-center justify-center w-10 h-10 bg-blue-500  rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
										2
									</span>
								</li>
							</ol>
						</div>

						<div className="mt-2    ">
							<h1 className="text-center font-bold text-white text-2xl">
								Profile
							</h1>
							<form
								onSubmit={handleSubmit}
								className="lg:w-[380px] px-10 lg:px-14">
								<div className=" ">
									<label
										htmlFor="usage"
										className="text-lg font-medium text-white mt-10 mb-2">
										Usage By
									</label>
									<div className="flex items-center lg:w-[350px] bg-white border-2 border-gray-300 rounded-lg overflow-hidden focus-within:border-blue-500 transition">
										<select
											name="usage"
											id="usage"
											value={values.usage}
											onChange={handleChange}
											onBlur={handleBlur}
											className="flex-1 text-lg h-12 px-2 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-0">
											<option value="individual">Individual</option>
											<option value="educational">Educational</option>
											<option value="organaizational">Organaizational</option>
										</select>
									</div>
								</div>
								<Input
									type={"text"}
									label={"Name "}
									name={"name"}
									id={"name"}
									placeholder={"Enter the Name"}
									onChange={handleChange}
									onBlur={onBlur}
									value={values.name}
									icon={<FaUserGraduate size={20} />}
								/>
								{/* <div>
									{errors.name && touched.name ? (
										<p className="form-error text-sm text-red-800">
											{errors.name}
										</p>
									) : null}
								</div> */}
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
								{/* <div>
									{errors.email && touched.email ? (
										<p className="form-error text-sm text-red-800">
											{errors.email}
										</p>
									) : null}
								</div> */}
								<Input
									type={"number"}
									label={"Phone Number "}
									name={"number"}
									id={"phonenumber"}
									placeholder={"Enter the Phone Number"}
									onChange={handleChange}
									onBlur={onBlur}
									value={values.phonenumber}
									icon={<MdContactPhone size={20} />}
								/>
								{/* <div>
									{errors.phonenumber && touched.phonenumber ? (
										<p className="form-error text-sm text-red-800">
											{errors.phonenumber}
										</p>
									) : null}
								</div> */}

								<div className="pb-2">
									<label
										htmlFor="file-upload"
										className="block text-lg font-medium text-gray-800 mt-5 mb-2">
										Upload Logo
									</label>
									<div className="flex items-center lg:w-[350px] bg-white border border-gray-300 rounded-lg overflow-hidden focus-within:border-blue-500 transition">
										<div className="flex items-center justify-center px-4 text-gray-600">
											<FaRegFileImage size={20} />
										</div>
										<button
											type="button"
											onClick={handleButtonClick}
											className="flex-1 text-base h-12 px-4 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none">
											{fileName || "Attach files"}
										</button>
									</div>
									{/* Hidden file input */}
									<input
										type="file"
										ref={fileInputRef}
										className="hidden"
										name="file"
										value={values.file}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
								{/* <div>
									{errors.file && touched.file ? (
										<p className="form-error text-lg text-red-800">
											{errors.file}
										</p>
									) : null}
								</div> */}

								<div className="   p-4 flex justify-center">
									<button
										type="submit"
										className="w-full py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-black border-2 border-white rounded-lg shadow-md text-base sm:text-xl mt-4 font-bold">
										Continue as Individual
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
