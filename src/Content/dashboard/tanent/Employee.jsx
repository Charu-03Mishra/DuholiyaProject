import React, { useState } from "react";
import TanentDashBorad from "../../../Layout/TanentDashBoardSideNavBar/TanentDashBorad";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { AssessmentData } from "../../../constant/AssessmentData/AssessmentData";
import { Logo } from "../../../Component/Logo/Logo";
import { Switch } from "@mui/material";

import Tanent from "../../../Component/dashboard/Tanent/Tanent";
import SearchAndAdd from "../../../Component/dashboard/Tanent/SearchAndAdd";
import EmployeePopUp from "./EmployeePopUp";

const Employee = () => {
	const { name } = useParams();
	const [employees, setEmployee] = useState();
	const filteremployee = AssessmentData.filter((ele) => ele.name == name);
	const employee = filteremployee && filteremployee[0]?.employee;
	return (
		<>
			<Tanent>
				<div className="grid grid-cols-12 inter bg-white">
					<TanentDashBorad />
					<div className=" col-span-10 px-3 py-5 border-l-2 relative border-gray-500  ">
						<div className="px-4">
							<h1 className="font-bold text-sm lg:text-[16px]  text-[#3A3A3A] text-justify">
								Employee Module
							</h1>
							<p className="text-justify text-xs text-[#545454]">
								Manage and organize group effortlessly. Create, Join or maderate
								position based on your preference and objectives.
							</p>
						</div>

						<SearchAndAdd setstateChange={setEmployee} />
						<div className="absolute z-10 top-[8%] left-1/2 transform -translate-x-1/2 flex justify-center px-4 w-full">
							{employees && <EmployeePopUp setEmployee={setEmployee} />}
						</div>

						<div className="px-4">
							<TableContainer component={Paper}>
								<Table
									sx={{
										minWidth: 550,
									}}
									aria-label="simple table">
									<TableHead>
										<TableRow
											sx={{
												textAlign: "center",
											}}>
											<TableCell
												sx={{
													fontSize: "14px",
													color: "#003262",
													fontWeight: "bold",
													fontStyle:"Manrope",
													textAlign:"center",
												
												}}>
												Id
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													color: "#003262",
													fontWeight: "bold",
													textAlign: "center",
													whiteSpace: "nowrap",
													fontStyle:"Manrope"
												}}>
												Name
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													color: "#003262",
													fontWeight: "bold",
													textAlign: "center",
													whiteSpace: "nowrap",
													fontStyle:"Manrope"
												}}>
												Email
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													color: "#003262",
													fontWeight: "bold",
													textAlign: "center",
													whiteSpace: "nowrap",
													fontStyle:"Manrope"
												}}>
												Phone No.
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													color: "#003262",
													fontWeight: "bold",
													textAlign: "center",
													whiteSpace: "nowrap",
													fontStyle:"Manrope"
												}}>
												Designation
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													color: "#003262",
													fontWeight: "bold",
													textAlign: "center",
													whiteSpace: "nowrap",
													fontStyle:"Manrope"
												}}>
												Department
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													color: "#003262",
													fontWeight: "bold",
													textAlign: "center",
													whiteSpace: "nowrap",
													fontStyle:"Manrope"
												}}>
												Status
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													color: "#003262",
													fontWeight: "bold",
													textAlign: "center",
													fontStyle:"Manrope"
												}}></TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{employee.map((row, i) => (
											<TableRow
												key={i}
												sx={{
													textAlign: "center",
												}}>
												<TableCell
													component="th"
													scope="row"
													sx={{
														fontSize: "16px",
														whiteSpace: "nowrap",
														fontWeight: "bold",
														fontStyle:"Manrope",
														textAlign:"center",
												
													}}>
													{row.id}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														whiteSpace: "nowrap",
														fontWeight: "bold",
														fontStyle:"Manrope"
													}}>
													{row.name}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														whiteSpace: "nowrap",
														fontWeight: "bold",
														fontStyle:"Manrope"
													}}>
													{row.email}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														whiteSpace: "nowrap",
														fontWeight: "bold",
														fontStyle:"Manrope"
													}}>
													{row.phoneno}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														whiteSpace: "nowrap",
														fontWeight: "bold",
														fontStyle:"Manrope"
													}}>
													{row.designatoin}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														whiteSpace: "nowrap",
														fontWeight: "bold",
														fontStyle:"Manrope"
													}}>
													{row.department}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														fontWeight: "bold",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														fontStyle:"Manrope"
													}}>
													<Switch
														checked={row.active}
														sx={{
															" & .css-161ms7l-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked":
																{
																	color: "#5bc17f",
																},
														}}
													/>
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														whiteSpace: "nowrap",
														fontWeight: "bold",
														fontStyle:"Manrope",
														
												

													}}>
													{Logo(row.edit, "Green")}
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</div>
					</div>
				</div>
			</Tanent>
		</>
	);
};

export default Employee;
