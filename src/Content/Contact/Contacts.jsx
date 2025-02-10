import React, { useEffect, useState } from "react";
import { MdContactPhone, MdPhone } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineSubject } from "react-icons/md";
import { useFormik } from "formik";
import { MdOutlineEmail } from "react-icons/md";
import { ContactValidation } from "../../Schema/ValidationSchema";
import Input from "../../Component/Input/Input";
import { RxCross2 } from "react-icons/rx";
import { authApi } from "../../mocks/auth";
import { useNavigate } from "react-router-dom";

const ContactData = {
	name: "",
	phonenumber: "",
	email: "",
	message: "",
	subject: "",
};

const Contacts = () => {
	const nav = useNavigate();
	const [details, setdetails] = useState([]);
	const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
		useFormik({
			initialValues: ContactData,
			validationSchema: ContactValidation,
			onSubmit: async (value, action) => {
				const data = {
					name: value.name,
					subject: value.subject,
					message: value.message,
					email: value.email,
					phone: value.phonenumber,
				};
				const res = await authApi.contact(data);
				console.log(res, "response contact");

				if (res.status === 200) {
					alert("contact");
					nav("/");
					action.resetForm();
				} else {
					console.log(errors);
				}
			},
		});

	const contact = async () => {
		const result = await authApi.contactinfo();
		setdetails(result);
	};
	useEffect(() => {
		contact();
	}, []);
	return (
		<div className=" flex py-5 items-center ">
			<div className="flex  flex-col overflow-hidden rounded-lg border-2 border-gray-400   md:flex-row mx-auto  ">
				<div
					className=" w-[450px] hidden md:block md:w-[500px] md:px-2 md:py-2    md:mb-0"
					style={{
						background: "linear-gradient(to right, #92E6FF, #287EB5, #003262)",
					}}>
					<h1 className="text-lg font-bold px-3 text-white open-sans">Hello</h1>
					<p className="text-white open-sans text-sm md:text-[16px]  text-center mt-1">
						"We’d love to hear from you! Whether you have questions, feedback,
						or need assistance, feel free to get in touch with us."
					</p>
					<div className=" h-52 flex justify-center  ">
						<img
							src="/Images/Contact/giphyemail.gif"
							alt="Contact Animation"
							className=" h-52 "
						/>
					</div>
					<div className="flex flex-col open-sans justify-center items-center mt-8 space-y-6">
						{details?.data?.map((item, index) => (
							<div className="flex justify-center">
								<div
									key={index}
									className="w-[300px]  flex justify-center flex-col max-w-md p-4   rounded-lg">
									<h2 className="text-lg text-center  text-white border-b pb-2 mb-3">
										{item.contactType}
									</h2>

									{Array.isArray(item.email) &&
										item.email.map((email, idx) => (
											<div
												key={idx}
												className="flex  items-center space-x-2 text-white">
												<MdMail className="text-white" />
												<span className="">{email}</span>
											</div>
										))}

									{Array.isArray(item.phone) &&
										item.phone.map((phone, idx) => (
											<div
												key={idx}
												className="flex items-center space-x-2 text-white mt-2">
												<MdPhone className="text-white" />
												<span>{phone}</span>
											</div>
										))}
								</div>
							</div>
						))}
					</div>

					<div className=" mt-5 mb-5">
						<p className="text-xl text-center text-white open-sans font-bold">
							We’ll get back to you as soon as possible!
						</p>
					</div>
				</div>
				<div className="w-[450px] md:w-[500px] md:px-3  px-2 py-2   bg-white">
					<h1 className="text-lg font-semibold text-black text-center">
						Write to Us
					</h1>
					<form onSubmit={handleSubmit} className="px-10 lg:px-14">
						<Input
							label={"Enter Your Name"}
							type={"name"}
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
							label={"Subject"}
							type={"text"}
							autoComplete={"off"}
							value={values.subject}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder={"Enter Your Subject"}
							name={"subject"}
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

						<div className=" flex justify-center mb-2">
							<button
								type="submit"
								className="px-8 py-2 bg-primary text-white rounded-lg shadow-md text-xl mt-4 ">
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
