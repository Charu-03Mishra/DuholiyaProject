import { useFormik } from "formik";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AddressDeshBoardValidation } from "../../../Schema/ValidationSchema";
import { MdDelete } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";

const initialValue = {
	name: "",
	state: "",
	city: "",
	pincode: "",
	address: "",
};
const AssessmentAddress = () => {
	const [subData, setsubData] = useState([]);
	const [isAddress, setAddress] = useState(false);
	const { values, handleBlur, handleSubmit, handleChange, touched, errors } =
		useFormik({
			initialValues: initialValue,
			validationSchema: AddressDeshBoardValidation,
			onSubmit: (values, action) => {
				action.resetForm();
				setAddress(false);

				setsubData((prev) => [...prev, values]);
			},
		});
	const addressHandler = () => {
		setAddress(!isAddress);
	};
	const DeleteHandler = () => {
		setsubData((prev) => {
			const data = [...prev];
			data.pop();
			return data;
		});
	};

	console.log(subData);

	return (
		<>
			<div className="my-8 rounded-lg shadow-xl shadow-gray-400">
				<div className="flex justify-between items-center px-4 py-3 border-b-2 border-gray-500">
					<button
						className="text-[#003262]  font-bold text-lg flex items-center gap-2"
						onClick={addressHandler}>
						<span>
							<FaSquarePlus size={20} />
						</span>
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
				<h1 className="text-2xl font-bold text-center mb-5">Save Address</h1>
				{subData.map((item, i) => (
					<div
						className="rounded-lg border-2 border-gray-500 px-5 md:px-10 py-4 my-4 bg-white"
						key={i}>
						<div className="flex justify-between items-center pb-3 border-b-2 border-gray-300">
							<h1 className="bg-green-800 text-white px-5 md:px-9 py-1 rounded-lg shadow-md font-bold text-lg text-center">
								Office
							</h1>

							<button
								className="text-red-700 hover:text-red-900 "
								onClick={DeleteHandler}>
								<MdDelete size={30} />
							</button>
						</div>

						<div className="pt-4">
							{subData && (
								<p className="text-justify text-base md:text-lg text-gray-700">
									{item.address}
								</p>
							)}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default AssessmentAddress;
