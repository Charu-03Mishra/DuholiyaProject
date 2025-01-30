import React, { useState } from "react";
import { ProfileDashboardValidation } from "../../../Schema/ValidationSchema";
import { IoIosArrowBack } from "react-icons/io";
import { SlCloudUpload } from "react-icons/sl";
import { FaSquarePlus } from "react-icons/fa6";
import AssessmentAddress from "./AssessmentAddress";
import { useFormik } from "formik";
import TanentDashBorad from "../../../Layout/TanentDashBoardSideNavBar/TanentDashBorad";
import { useLocation, useSearchParams } from "react-router-dom";
import Card from "../../../Component/dashboard/Card";
const initialValue = {
	name: "",
	lastname: "",
	email: "",
	phonenumber: "",
};

const TanentData = () => {
	const [subEdit, setsEdit] = useState(false);

	const { values, handleBlur, handleSubmit, handleChange, touched, errors } =
		useFormik({
			initialValues: initialValue,
			validationSchema: ProfileDashboardValidation,
			onSubmit: (values, action) => {
				action.resetForm();
			},
		});

	const clickhandler = () => {
		setsEdit(!subEdit);
	};

	return (
		<>
			<Card>
				<TanentDashBorad />
				<div className="w-full max-h-screen overflow-y-scroll px-3 py-5 border-l-2 border-blue-600 bg-white">
					<div className="px-4">
						<h1 className="font-bold text-lg">Profile Details</h1>
						<p>
							Manage and organize groups effortlessly. Create, Join or moderate
							positions based on your preferences and objectives.
						</p>
					</div>
					<div className="my-8 rounded-lg shadow-xl shadow-gray-400 bg-white">
						{/* Header Section */}
						<div className="flex justify-between items-center px-4 py-3 border-b-2 border-gray-500">
							<h1 className="text-[#003262] font-bold text-lg">
								Basic Information
							</h1>
							<button
								className="text-white bg-[#003262] shadow-md shadow-black px-8 py-2 rounded-lg"
								onClick={clickhandler}>
								Edit
							</button>
						</div>

						<div className=" px-8 py-5  md:px-10 md:py-10">
							<form onSubmit={handleSubmit}>
								<div className="flex flex-col  flex-wrap gap-6 lg:flex-row lg:flex-wrap lg:items-start">
									<div className=" lg:w-[410px] w-[400px]">
										<label
											htmlFor="name"
											className="block text-sm md:text-base font-medium mb-1">
											First Name
										</label>
										<input
											className="w-full px-4 py-2 md:px-5 md:py-3 rounded-lg text-gray-700 border-2 border-gray-500 focus:outline-none"
											type="text"
											name="name"
											value={values.name}
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="Enter The First Name"
										/>
										{errors.name && touched.name && (
											<p className="text-sm text-red-800 mt-1">{errors.name}</p>
										)}
									</div>

									<div className=" w-[410px]">
										<label
											htmlFor="lastname"
											className="block text-sm md:text-base font-medium mb-1">
											Last Name
										</label>
										<input
											className="w-full px-4 py-2 md:px-5 md:py-3 rounded-lg text-gray-700 border-2 border-gray-500 focus:outline-none"
											type="text"
											name="lastname"
											value={values.lastname}
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="Enter The Last Name"
										/>
										{errors.lastname && touched.lastname && (
											<p className="text-sm text-red-800 mt-1">
												{errors.lastname}
											</p>
										)}
									</div>

									<div className="w-[410px]">
										<label
											htmlFor="email"
											className="block text-sm md:text-base font-medium mb-1">
											Email
										</label>
										<input
											className="w-full px-4 py-2 md:px-5 md:py-3 rounded-lg text-gray-700 border-2 border-gray-500 focus:outline-none"
											type="email"
											name="email"
											value={values.email}
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="Enter The Email"
										/>
										{errors.email && touched.email && (
											<p className="text-sm text-red-800 mt-1">
												{errors.email}
											</p>
										)}
									</div>

									<div className="w-[410px]">
										<label
											htmlFor="phonenumber"
											className="block text-sm md:text-base font-medium mb-1">
											Phone Number
										</label>
										<input
											className="w-full px-4 py-2 md:px-5 md:py-3 rounded-lg text-gray-700 border-2 border-gray-500 focus:outline-none"
											type="text"
											name="phonenumber"
											value={values.phonenumber}
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="Enter The Number"
										/>
										{errors.phonenumber && touched.phonenumber && (
											<p className="text-sm text-red-800 mt-1">
												{errors.phonenumber}
											</p>
										)}
									</div>
								</div>

								<div className="mt-6 flex flex-col items-center lg:items-start">
									<div className="flex items-center gap-3 mb-3">
										<div className="rounded-lg bg-white border-2 border-gray-500 p-2 shadow-sm">
											<IoIosArrowBack size={25} />
										</div>
										<h1 className="text-lg font-bold">Upload Logo</h1>
									</div>
									<div className="w-full px-5 py-5 flex flex-col justify-center items-center border-dashed border-4 rounded-lg shadow-sm">
										<SlCloudUpload size={30} />
										<p className="text-center py-2">
											Browse and choose the files you want to upload from your
											computer.
										</p>
										<FaSquarePlus size={30} />
									</div>
								</div>

								<div className="mt-10 text-center lg:text-left">
									<button
										type="submit"
										className={`${
											subEdit ? "block" : "hidden"
										} bg-blue-600 text-white font-medium rounded-lg px-5 py-3`}>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>

					<AssessmentAddress />
				</div>
			</Card>
		</>
	);
};

export default TanentData;
