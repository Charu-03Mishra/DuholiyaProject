import React, { useState } from "react";
import { MdContactPhone } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { FaCompress } from "react-icons/fa";
import Input from "../../Component/Input/Input";
import { useFormik } from "formik";
import { RequestValidation } from "../../Schema/ValidationSchema";
import { authApi } from "../../mocks/auth";
import { useNavigate } from "react-router-dom";
import RequestPopUp from "../../Component/RequesPopUp/RequestPopUp";

const DemoData = {
	name: "",
	phonenumber: "",
	email: "",
	company: "",
	message: "",
};
const Request = () => {
	const nav = useNavigate();
	const [submit, setsubmit] = useState("");
	const { errors, handleBlur, handleChange, touched, handleSubmit, values } =
		useFormik({
			initialValues: DemoData,
			validationSchema: RequestValidation,
			onSubmit: async (value, action) => {
				const data = {
					name: value.name,
					company: value.company,
					message: value.message,
					email: value.email,
					phone: value.phonenumber,
				};
				const res = await authApi.Request(data);
				if (res.status === 200) {
					action.resetForm();
					setsubmit(true);
				} else {
					console.log("error");
				}
			},
		});

	return (
		<>
			<div className="px-5 py-5 relative flex justify-center   w-full ">
				<div className="flex justify-center   min-h-screen md:flex-row flex-col  ">
					<div className=" bg-purple-200 md:block hidden w-2/4  overflow-hidden     ">
						<div className=" md:w-[400px] w-[300px] h-full  flex justify-center ">
							<img
								className="w-full  "
								src="/Images/Contact/Rectangle21002.png"
								alt="Contact Illustration"
							/>
						</div>
					</div>
					<div className=" w-[300px] md:w-[400px] px-5 bg-white shadow-xl">
						<h1 className="text-2xl font-semibold text-white text-center mb-6">
							Get A Free Demo
						</h1>
						<form onSubmit={handleSubmit} className="space-y-5">
							<Input
								label={"Enter Your Name"}
								type={"text"}
								autoComplete={"off"}
								value={values.name}
								onChange={handleChange}
								onBlur={handleBlur}
								placeholder={"Enter Your Name"}
								name={"name"}
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
								label={"Enter Your Email/Phone Number"}
								type={"email"}
								autoComplete={"off"}
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
								placeholder={"Enter Your Email"}
								name={"email"}
								icon={<MdContactPhone size={20} />}
							/>

							<div>
								{errors.email && touched.email ? (
									<p className="form-error text-sm text-red-800">
										{errors.email}
									</p>
								) : null}
							</div>
							<Input
								label={"Enter Your Phone Number"}
								type={"text"}
								autoComplete={"off"}
								value={values.phonenumber}
								onChange={handleChange}
								onBlur={handleBlur}
								placeholder={"Enter Your Phone Number"}
								name={"phonenumber"}
								icon={<MdContactPhone size={20} />}
							/>
							<div>
								{errors.phonenumber && touched.phonenumber ? (
									<p className="form-error text-sm text-red-800">
										{errors.phonenumber}
									</p>
								) : null}
							</div>
							<Input
								type={"text"}
								label={"Company"}
								autoComplete={"off"}
								value={values.company}
								onChange={handleChange}
								onBlur={handleBlur}
								placeholder={"Enter Your Compnay Name"}
								name={"company"}
								icon={<FaCompress size={20} />}
							/>
							<div>
								{errors.company && touched.company ? (
									<p className="form-error text-sm text-red-800">
										{errors.company}
									</p>
								) : null}
							</div>
							<div className="pb-5 mt-5">
								<label
									htmlFor="message"
									className="block text-lg font-medium text-black mb-2">
									Message
								</label>
								<div className="flex items-center bg-white border-2 border-gray-300 rounded-lg overflow-hidden focus-within:border-blue-500 transition">
									<textarea
										rows="4"
										type={"message"}
										autoComplete={"off"}
										value={values.message}
										onChange={handleChange}
										onBlur={handleBlur}
										name={"message"}
										className="appearance-none border w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"></textarea>
								</div>
							</div>
							<div className="flex items-center space-x-2">
								<input
									id="terms-checkbox"
									type="checkbox"
									className="form-checkbox h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
								/>
								<label
									htmlFor="terms-checkbox"
									className="lg:text-sm text-sm text-black cursor-pointer">
									I agree to the{" "}
									<span className="text-blue-600 lg:text-sm text-sm underline">
										Terms & Conditions
									</span>
								</label>
							</div>
							<div className="flex justify-center py-3">
								<button
									type="submit"
									className=" w-[200px] py-3 bg-primary text-white font-semibold  shadow-lg text-sm transition duration-300 ease-in-out transform hover:bg-blue-500 active:bg-blue-700 hover:shadow-xl active:scale-95">
									Request Demo
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div
				className={`absolute top-[15%] left-0 right-0 bottom-0 ${
					submit ? "block" : "hidden"
				}`}>
				<RequestPopUp setsubmit={setsubmit} />
			</div>
		</>
	);
};

export default Request;
