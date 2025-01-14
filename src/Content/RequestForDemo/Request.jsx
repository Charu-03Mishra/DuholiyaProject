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
			<div className="p-6">
				<div className="flex flex-col lg:flex-row mx-auto w-full lg:max-w-5xl bg-white rounded-lg overflow-hidden shadow-lg">
					<div className=" lg:w-[45%] bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center">
						<img
							className="w-full  "
							src="/Images/Contact/rb_53932.png"
							alt="Contact Illustration"
						/>
					</div>
					<div className=" lg:w-[55%] px-6 py-8 bg-black">
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
									className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
								/>
								<label
									htmlFor="terms-checkbox"
									className="text-lg text-white cursor-pointer">
									I agree to the{" "}
									<span className="text-blue-600 underline">
										Terms & Conditions
									</span>
								</label>
							</div>

							<button
								type="submit"
								className="w-full py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg text-lg transition duration-300 ease-in-out transform hover:bg-blue-500 active:bg-blue-700 hover:shadow-xl active:scale-95">
								Request Demo
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Request;
