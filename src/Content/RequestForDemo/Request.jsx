import React from "react";
import { MdContactPhone } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { FaCompress } from "react-icons/fa";
import Input from "../../Component/Input/Input";
import { useFormik } from "formik";
import { RequestValidation } from "../../Schema/ValidationSchema";

const DemoData = {
	name: "",
	phonenumber: "",
	email: "",
	company: "",
};
const Request = () => {
	const {
		errors,
		handleBlur,
		onBlur,
		handleChange,
		touched,
		handleSubmit,
		values,
	} = useFormik({
		initialValues: DemoData,
		validationSchema: RequestValidation,
		onSubmit: (value, action) => {
			action.resetForm();
		},
	});
	return (
		<>
			<div className="px-5 py-5  flex justify-center min-h-screen  w-full ">
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
								type={"text"}
								label={"Name "}
								name={"name"}
								id={"name"}
								placeholder={"Enter the Name"}
								onChange={onchange}
								onBlur={onBlur}
								value={values.name}
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
								type={"number"}
								label={"Phone Number "}
								name={"phonenumber"}
								id={"phonenumber"}
								placeholder={"Enter the Phone Number"}
								onChange={onchange}
								onBlur={onBlur}
								value={values.phonenumber}
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
								label={"Company "}
								name={"company"}
								id={"compnay"}
								placeholder={"Enter Your Company Name"}
								onChange={onchange}
								onBlur={onBlur}
								value={values.company}
								icon={<FaCompress size={20} />}
							/>
							<div>
								{errors.company && touched.company ? (
									<p className="form-error text-sm text-red-800">
										{errors.company}
									</p>
								) : null}
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
		</>
	);
};

export default Request;
