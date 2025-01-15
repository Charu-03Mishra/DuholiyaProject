import React, { useState } from "react";
import Sidenavbar from "../../Layout/SideNavBar/Sidenavbar";
import { useLocation, useParams } from "react-router-dom";
import { FaPlus, FaRegPlusSquare } from "react-icons/fa";
import { AssessmentData } from "../../constant/AssessmentData/AssessmentData";
import { Logo } from "../../Component/Logo/Logo";
import SideNavBarResult from "../../Layout/SideNavBarResult/SideNavBarResult";
import TanentDashBorad from "../../Layout/TanentDashBoardSideNavBar/TanentDashBorad";
import { IoIosArrowBack } from "react-icons/io";
import { SlCloudUpload } from "react-icons/sl";
import { FaSquarePlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useFormik } from "formik";
import { ProfileDashboardValidation } from "../../Schema/ValidationSchema";
import { IoIosArrowUp } from "react-icons/io";

const initialValue = {
	name: "",
	lastname: "",
	email: "",
	phonenumber: "",
	state: "",
	city: "",
	pincode: "",
	address: "",
};
const AssessmentsExam = () => {
	const [isedit, setedit] = useState(false);
	const [subData, setsubData] = useState("");
	const [isAddress, setAddress] = useState(false);
	const { id } = useParams();
	console.log(id);
	const filterid = AssessmentData.filter((ele) => ele.id == id);
	const assmentResult = filterid && filterid[0]?.exam;
	console.log(assmentResult);
	const path = useLocation();
	const pathname = path.pathname;

	const { values, handleBlur, handleSubmit, handleChange, touched, errors } =
		useFormik({
			initialValues: initialValue,
			validationSchema: ProfileDashboardValidation,
			onSubmit: (values, action) => {
				action.resetForm();
				setsubData(values);
			},
		});
	console.log(values);

	const clickhandler = () => {
		setedit(!isedit);
	};
	const addressHandler = () => {
		setAddress(!isAddress);
	};

	return (
		<>
			<div className="flex px-8 bg-gray-300 ">
				{pathname == `/journey/assesments/1` ? <Sidenavbar /> : ""}
				{pathname == `/journey/assesments/20` ? <SideNavBarResult /> : ""}
				{pathname == `/journey/assesments/2` ? <TanentDashBorad /> : ""}

				{pathname == `/journey/assesments/1` ||
				pathname == `/journey/assesments/20` ? (
					<div className=" w-full max-h-screen overflow-y-scroll px-3 border-l-2 border-blue-600 ">
						<div className="flex  justify-end items-center  py-3">
							<div className="flex items-center px-5 py-3 gap-5 bg-[#0B87AC] border-2  border-white rounded-lg">
								<div className="">
									<FaPlus size={20} />
								</div>
								<div className="">
									<button className="text-xl font-bold ">Create</button>
								</div>
							</div>
						</div>

						<div className=" ">
							<div className="">
								{assmentResult.map((item, i) => (
									<div key={i}>
										<div>
											<h1 className="text-lg">{item.title}</h1>
										</div>
										<div className="flex justify-between border-b-2 px-2  border-black   shadow-sm shadow-black py-6 my-5">
											<div className="flex gap-5">
												<div className="shadow-sm px-3 shadow-black">
													<button>{item.tag}</button>
												</div>
												<div className="shadow-sm px-3 shadow-black">
													<button>{item.tag2}</button>
												</div>
												<div className="shadow-sm px-3 shadow-black">
													<button>{item.group}</button>
												</div>
												<div className="shadow-sm px-3 shadow-black">
													<button>{item.esay}</button>
												</div>
												<div className="shadow-sm px-3 shadow-black">
													<button>{item.set}</button>
												</div>
												<div className="shadow-sm px-3 shadow-black">
													<button>{item.pending}</button>
												</div>
												<div className="shadow-sm px-3 shadow-black">
													<button>{item.version}</button>
												</div>
											</div>
											<div className="">
												{pathname == `/journey/assesments/1` ? (
													<div className="flex gap-5">
														<div>{Logo(item.save, "Blue")}</div>
														<div>{Logo(item.edit, "Green")}</div>
														<div>{Logo(item.delete, "Red")}</div>
													</div>
												) : (
													""
												)}
												{pathname == `/journey/assesments/20` ? (
													<div className="flex gap-5">
														<div>{Logo(item.save, "Blue")}</div>
													</div>
												) : (
													""
												)}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				) : (
					""
				)}

				{pathname == `/journey/assesments/2` ? (
					<div className=" w-full max-h-screen overflow-y-scroll px-3 py-5 border-l-2 border-blue-600 bg-white ">
						<div className="px-4">
							<h1 className="font-bold text-lg">Profile Deatils</h1>
							<p>
								Manage and organize group effortlessly. Create, Join or maderate
								position based on your preference and objectives.
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

							<div className="mx-auto px-5 py-5 md:px-20 md:py-10">
								<form onSubmit={handleSubmit}>
									<div className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:items-start">
										<div className="flex-1 min-w-[250px]">
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
												<p className="text-sm text-red-800 mt-1">
													{errors.name}
												</p>
											)}
										</div>

										<div className="flex-1 min-w-[250px]">
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

										<div className="flex-1 min-w-[250px]">
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

										<div className="flex-1 min-w-[250px]">
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
												isedit ? "block" : "hidden"
											} bg-blue-600 text-white font-medium rounded-lg px-5 py-3`}>
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>

						<div className="my-8 rounded-lg shadow-xl shadow-gray-400">
							<div className="flex justify-between items-center px-4 py-3 border-b-2 border-gray-500">
								<button
									className="text-[#003262] font-bold text-lg flex items-center gap-2"
									onClick={addressHandler}>
									Add Address
									<span className="pt-1">
										{isAddress ? <IoIosArrowDown /> : <IoIosArrowUp />}
									</span>
								</button>
								<button className="text-white bg-[#003262] shadow-md shadow-black px-8 py-2 rounded-lg">
									Edit
								</button>
							</div>

							<div
								className={`${
									isAddress ? "block" : "hidden"
								} px-5 py-5 md:px-20 md:py-10`}>
								<form onSubmit={handleSubmit}>
									<div className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:items-center">
										<div className="flex-1 min-w-[250px]">
											<label
												htmlFor="name"
												className="block text-sm md:text-base font-medium mb-1">
												First Name
											</label>
											<input
												className="w-full px-4 py-2 md:px-5 md:py-3 rounded-lg text-gray-700 border-2 border-gray-500 focus:outline-none"
												type="text"
												name="name"
												placeholder="Enter The First Name"
												value={values.name}
												onBlur={handleBlur}
												onChange={handleChange}
											/>
											{errors.name && touched.name && (
												<p className="form-error text-sm text-red-800 mt-1">
													{errors.name}
												</p>
											)}
										</div>

										<div className="flex-1 min-w-[250px]">
											<label
												htmlFor="pincode"
												className="block text-sm md:text-base font-medium mb-1">
												Pincode
											</label>
											<input
												className="w-full px-4 py-2 md:px-5 md:py-3 rounded-lg text-gray-700 border-2 border-gray-500 focus:outline-none"
												type="text"
												name="pincode"
												placeholder="Enter The Pincode"
												value={values.pincode}
												onBlur={handleBlur}
												onChange={handleChange}
											/>
											{errors.pincode && touched.pincode && (
												<p className="form-error text-sm text-red-800 mt-1">
													{errors.pincode}
												</p>
											)}
										</div>

										<div className="flex-1 min-w-[250px]">
											<label
												htmlFor="state"
												className="block text-sm md:text-base font-medium mb-1">
												State
											</label>
											<input
												className="w-full px-4 py-2 md:px-5 md:py-3 rounded-lg text-gray-700 border-2 border-gray-500 focus:outline-none"
												type="text"
												name="state"
												placeholder="Enter The State"
												value={values.state}
												onBlur={handleBlur}
												onChange={handleChange}
											/>
											{errors.state && touched.state && (
												<p className="form-error text-sm text-red-800 mt-1">
													{errors.state}
												</p>
											)}
										</div>

										<div className="flex-1 min-w-[250px]">
											<label
												htmlFor="city"
												className="block text-sm md:text-base font-medium mb-1">
												City/District/Town
											</label>
											<input
												className="w-full px-4 py-2 md:px-5 md:py-3 rounded-lg text-gray-700 border-2 border-gray-500 focus:outline-none"
												type="text"
												name="city"
												value={values.city}
												onBlur={handleBlur}
												onChange={handleChange}
											/>
											{errors.city && touched.city && (
												<p className="form-error text-sm text-red-800 mt-1">
													{errors.city}
												</p>
											)}
										</div>

										{/* Address */}
										<div className="w-full">
											<label
												htmlFor="address"
												className="block text-sm md:text-base font-medium mb-1">
												Address
											</label>
											<textarea
												name="address"
												rows={4}
												value={values.address}
												onBlur={handleBlur}
												onChange={handleChange}
												className="w-full rounded-lg px-4 py-2 text-gray-700 border-2 border-gray-500 focus:outline-none"
												placeholder="Enter Your Address"
											/>
											{errors.address && touched.address && (
												<p className="form-error text-sm text-red-800 mt-1">
													{errors.address}
												</p>
											)}
										</div>

										{/* Save Button */}
										<div className="w-full lg:w-auto flex justify-center mt-4">
											<button
												type="submit"
												className="bg-blue-700 text-white text-lg font-medium px-5 py-3 rounded-lg hover:bg-blue-800 focus:outline-none">
												Save
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>

						<div className="my-8 px-5 md:px-20 py-5 bg-zinc-200 rounded-lg shadow-xl shadow-gray-400">
							<h1 className="text-2xl font-bold text-center mb-5">
								Save Address
							</h1>

							<div className="rounded-lg border-2 border-gray-500 px-5 md:px-10 py-4 my-4 bg-white">
								<div className="flex justify-between items-center pb-3 border-b-2 border-gray-300">
									<h1 className="bg-green-800 text-white px-5 md:px-9 py-1 rounded-lg shadow-md font-bold text-lg text-center">
										Office
									</h1>

									<button className="text-red-700 hover:text-red-900">
										<MdDelete size={30} />
									</button>
								</div>

								<div className="pt-4">
									{subData && (
										<p className="text-justify text-base md:text-lg text-gray-700">
											{subData.address}
										</p>
									)}
								</div>
							</div>
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
};

export default AssessmentsExam;
