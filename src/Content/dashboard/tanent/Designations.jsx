import React, { useState } from "react";
import TanentDashBorad from "../../../Layout/TanentDashBoardSideNavBar/TanentDashBorad";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import { AssessmentData } from "../../../constant/AssessmentData/AssessmentData";
import { Logo } from "../../../Component/Logo/Logo";
import Tanent from "../../../Component/dashboard/Tanent/Tanent";
import SearchAndAdd from "../../../Component/dashboard/Tanent/SearchAndAdd";
import DesignationPopUp from "./DesignationPopUp";
const Designations = () => {
	const { name } = useParams();
	const [des, setDesign] = useState(false);
	const filterdesign = AssessmentData.filter((ele) => ele.name == name);
	console.log(filterdesign);
	const designdata = filterdesign && filterdesign[0]?.designation;

	return (
		<>
			<Tanent>
				<div className="grid grid-cols-12 inter bg-white">
					<TanentDashBorad />
					<div className="col-span-10 px-3 py-5 border-l-2 border-gray-500 relative  ">
						<div className="px-4">
							<h1 className="font-bold  text-sm lg:text-[16px]  text-[#3A3A3A] text-justify">
								Designations Module
							</h1>
							<p className="text-justify text-xs  text-[#545454]">
								Manage and organize group effortlessly. Create, Join or maderate
								position based on your preference and objectives.
							</p>
						</div>
						<SearchAndAdd setstateChange={setDesign} />
						<div className="absolute z-10 top-[8%] left-1/2 transform -translate-x-1/2 flex justify-center px-4 w-full">
							{des && <DesignationPopUp setDesign={setDesign} />}
						</div>
						<div className="px-4 inter">
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
													fontWeight: "bold",
													color: "#003262",
													fontStyle:"Manrope",
													textAlign:"center",
												
												}}>
												Code
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													fontWeight: "bold",
													color: "#003262",
													fontStyle:"Manrope"
												}}>
												Department
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													fontWeight: "bold",
													color: "#003262",
													fontStyle:"Manrope"
												}}>
												Designations
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													fontWeight: "bold",
													color: "#003262",
													fontStyle:"Manrope"
												}}>
												Edit/Delete
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{designdata.map((row, i) => (
											<TableRow
												key={i}
												sx={{
													textAlign: "center",
													fontWeight: "bold",
													fontStyle:"Manrope",
													
												
												}}>
												<TableCell
													component="th"
													scope="row"
													sx={{
														fontSize: "16px",
														fontWeight: "bold",
														fontStyle:"Manrope",
														textAlign:"center",
												
													}}>
													{row.number}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														fontWeight: "bold",
														fontStyle:"Manrope"
													}}>
													{row.data}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														fontWeight: "bold",
														fontStyle:"Manrope",
														
													}}>
													{row.secondData}
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
													{Logo(row.edit, "Green")}
													{Logo(row.delete, "Red")}
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

export default Designations;
