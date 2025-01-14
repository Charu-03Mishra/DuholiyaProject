import React from "react";
import { MdContactPhone } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineSubject } from "react-icons/md";
import { useFormik } from "formik";
import { MdOutlineEmail } from "react-icons/md";
import { ContactValidation } from "../../Schema/ValidationSchema";
import Input from "../../Component/Input/Input";

const ContactData = {
	name: "",
	phonenumber: "",
	email: "",
	company: "",
};

const Contacts = () => {
	const {
		values,
		handleBlur,
		handleChange,
		handleSubmit,
		onBlur,
		errors,
		touched,
	} = useFormik({
		initialValues: ContactData,
		validationSchema: ContactValidation,
		onSubmit: (value, action) => {
			action.resetForm();
		},
	});
	return (
		<div className="w-full  flex items-center justify-center px-4">
			<div className="flex flex-col lg:flex-row mx-auto w-full lg:max-w-5xl py-10">
				<div className="w-full p-3 bg-gradient-to-r from-sky-500 to-indigo-500 mb-8 md:mb-0">
					<h1 className="text-2xl font-bold text-black">Hello</h1>
					<p className="text-black text-lg font-bold text-center mt-2">
						"We’d love to hear from you! Whether you have questions, feedback,
						or need assistance, feel free to get in touch with us."
					</p>
					<div className="w-full  overflow-hidden ">
						<img
							src="/Images/Contact/check-your-mail.gif"
							alt="Contact Animation"
							className="w-full object-cover"
						/>
					</div>
					<div className="flex flex-col items-center mt-8">
						<div>
							<h1 className="text-2xl font-bold text-center">Sales:</h1>
							<div className="flex items-center w-full cursor-pointer mt-2">
								<MdContactPhone size={25} />
								<p className="text-lg pl-3">+91 45676678667</p>
							</div>
							<div className="flex items-center w-full cursor-pointer">
								<MdOutlineEmail size={25} />
								<p className="text-lg pl-4">xyz@gmail.com</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center mt-6">
						<div>
							<h1 className="text-2xl font-bold text-center">Support:</h1>
							<div className="flex items-center w-full cursor-pointer mt-2">
								<MdContactPhone size={25} />
								<p className="text-lg pl-3">+91 45676678667</p>
							</div>
							<div className="flex items-center w-full cursor-pointer">
								<MdOutlineEmail size={25} />
								<p className="text-lg pl-4">xyz@gmail.com</p>
							</div>
						</div>
					</div>
					<div className=" mt-12 mb-5">
						<p className="text-xl text-center font-bold">
							We’ll get back to you as soon as possible!
						</p>
					</div>
				</div>
				<div className="w-full md:px-6 py-4 bg-black">
					<h1 className="text-2xl font-semibold text-white text-center mb-6">
						Write to Us
					</h1>
					<form onSubmit={handleSubmit} className="px-10 lg:px-14">
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
								<p className="form-error text-sm text-red-800">{errors.name}</p>
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
							icon={<MdOutlineEmail size={20} />}
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
							label={"Subject "}
							name={"subject"}
							id={"subject"}
							onChange={onchange}
							onBlur={onBlur}
							value={values.subject}
							icon={<MdOutlineSubject size={20} />}
						/>
						<div>
							{errors.subject && touched.subject ? (
								<p className="form-error text-sm text-red-800">
									{errors.subject}
								</p>
							) : null}
						</div>

						<div className="pb-5 mt-5">
							<label
								htmlFor="message"
								className="block text-lg font-medium text-white mb-2">
								Message
							</label>
							<div className="flex items-center bg-white border-2 border-gray-300 rounded-lg overflow-hidden focus-within:border-blue-500 transition">
								<textarea
									rows="4"
									id="message"
									className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"></textarea>
							</div>
						</div>
						<button
							type="submit"
							className="w-full md:w-52 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-black border-2 border-white font-semibold rounded-lg shadow-md text-xl mt-4">
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
