import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addPosition } from "../../../Slice/Slice";
import { nanoid } from "@reduxjs/toolkit";

const PositionPopUp = ({ setPosition }) => {
	const [name, setName] = useState("");
	const [web, setWeb] = useState("");
	const [role, setRole] = useState("");
	const [active, setactive] = useState("");
	const [emp, setemp] = useState();
	const [assign, setassign] = useState("");
	const [status, setstatus] = useState("");
	const dispatch = useDispatch();

	const addHandler = (e) => {
		const data = {
			id: nanoid(),
			name: name, // Ensure 'name' is defined
			application: web, // Fixed typo
			employee: emp, // Ensure 'emp' is defined
			role: role, // Ensure 'role' is defined
			active: false, // Meaningful default value
			employeeassign: assign, // Ensure 'assign' is defined
			status: status, // Ensure 'status' is defined
		};

		e.preventDefault();
		dispatch(addPosition(data));
		setPosition(false);
	};

	return (
		<div className="bg-white z-10 shadow-xl p-5 w-full max-w-lg md:max-w-2xl mx-auto rounded-lg">
			<div className="flex justify-end">
				<button onClick={() => setPosition(false)}>
					<RxCross2 size={20} className="cursor-pointer" />
				</button>
			</div>

			<div className="text-center">
				<p className="text-primary text-xl font-bold">Assign New Member</p>
			</div>

			<div className="flex flex-wrap gap-6 px-4 md:px-12 justify-between py-4 mt-6  text-sm">
				<div>
					<h1 className="text-gray-500">Name:</h1>
					<p>User 1</p>
				</div>
				<div>
					<h1 className="text-gray-500">Application:</h1>
					<p>Web Application</p>
				</div>
				<div>
					<h1 className="text-gray-500">Role:</h1>
					<p>Software Engineer</p>
				</div>
			</div>

			<div className="px-4 ">
				<form onSubmit={addHandler}>
					<div className="flex items-center border border-gray-200 rounded-lg p-3 text-gray-700">
						<CiSearch />
						<input
							type="search"
							className="focus:outline-none text-sm w-full px-3"
							placeholder="Search by Name, Email, Phone no"
						/>
					</div>
					<div className="mt-4">
						<label className="text-sm font-medium">Name</label>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full border border-gray-200 rounded-lg p-3 text-sm mt-2 focus:outline-none"
						/>
					</div>

					<div className="mt-4">
						<label className="text-sm font-medium">Application</label>
						<input
							type="text"
							value={web}
							onChange={(e) => setWeb(e.target.value)}
							className="w-full border border-gray-200 rounded-lg p-3 text-sm mt-2 focus:outline-none"
						/>
					</div>
					<div className="mt-4">
						<label className="text-sm font-medium">Employee Id/Name</label>
						<input
							type="text"
							value={emp}
							onChange={(e) => setemp(e.target.value)}
							className="w-full border border-gray-200 rounded-lg p-3 text-sm mt-2 focus:outline-none"
						/>
					</div>

					<div className="mt-4">
						<label className="text-sm font-medium">Role</label>
						<input
							type="text"
							value={role}
							onChange={(e) => setRole(e.target.value)}
							className="w-full border border-gray-200 rounded-lg p-3 text-sm mt-2 focus:outline-none"
						/>
					</div>

					<div className="mt-4">
						<label className="text-sm font-medium">Active/Inactive</label>
						<select
							onChange={(e) => {
								setactive(e.target.value);
							}}
							
							className="w-full border border-gray-200 rounded-lg p-3 text-sm mt-2">
							<option value="">Inactive</option>
							<option value="">Active</option>
						</select>
					</div>

					<div className="mt-4">
						<label className="text-sm font-medium">Employee Assign</label>
						<input
							type="text"
							value={assign}
							onChange={(e) => setassign(e.target.value)}
							className="w-full border border-gray-200 rounded-lg p-3 text-sm mt-2 focus:outline-none"
						/>
					</div>
					<div className="mt-4">
						<label className="text-sm font-medium">Status</label>
						<input
							type="text"
							value={status}
							onChange={(e) => setstatus(e.target.value)}
							className="w-full border border-gray-200 rounded-lg p-3 text-sm mt-2 focus:outline-none"
						/>
					</div>

					<div className="flex justify-end mt-6 gap-4">
						<button
							type="button"
							className="bg-white text-primary border-2 border-gray-200 px-6 py-2 text-sm rounded-lg font-bold">
							Cancel
						</button>
						<button
							type="submit"
							className="bg-primary text-white px-6 py-2 text-sm rounded-lg font-bold">
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default PositionPopUp;
