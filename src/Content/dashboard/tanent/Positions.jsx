import React, { useEffect, useState } from "react";
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
import { Switch } from "@mui/material";
import Tanent from "../../../Component/dashboard/Tanent/Tanent";
import { CiSearch } from "react-icons/ci";
import SearchAndAdd from "../../../Component/dashboard/Tanent/SearchAndAdd";
import PositionPopUp from "./PositionPopUp";
import { useSelector, useDispatch } from "react-redux";

const Positions = () => {
	const pos = useSelector((state) => state.position.positions);
	console.log(pos, "pos");

	useEffect(() => {
		if (pos && pos.length > 0) {
			localStorage.setItem("positions", JSON.stringify(pos));
		}
	}, [pos]);
	const storedPositions = JSON.parse(localStorage.getItem("positions")) || [];
	console.log(storedPositions);

	const [positions, setPosition] = useState(false);

	return (
		<>
			<Tanent>
				<div className="grid grid-cols-12 inter bg-white">
					<TanentDashBorad />
					<div className=" w-full col-span-10 px-3 py-5 border-l-2 relative border-gray-500 ">
						<div className="px-4">
							<h1 className="font-bold text-sm lg:text-lg  text-[#545454] text-justify">
								Positions Module
							</h1>
							<p className="text-justify text-xs text-[#545454]">
								Manage and organize group effortlessly. Create, Join or maderate
								position based on your preference and objectives.
							</p>
						</div>

						<SearchAndAdd setstateChange={setPosition} />
						<div className="absolute z-10 top-[8%] left-1/2 transform -translate-x-1/2 flex justify-center px-4 w-full">
							{positions && <PositionPopUp setPosition={setPosition} />}
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
													fontStyle: "Manrope",
													textAlign: "center",
												}}>
												Id
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													whiteSpace: "nowrap",
													color: "#003262",
													fontWeight: "bold",
													fontStyle: "Manrope",
												}}>
												Name
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													whiteSpace: "nowrap",
													color: "#003262",
													fontWeight: "bold",
													fontStyle: "Manrope",
												}}>
												Application
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													whiteSpace: "nowrap",
													color: "#003262",
													fontWeight: "bold",
													fontStyle: "Manrope",
												}}>
												Employee Id/Name
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													whiteSpace: "nowrap",
													color: "#003262",
													fontWeight: "bold",
													fontStyle: "Manrope",
												}}>
												Role
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													whiteSpace: "nowrap",
													color: "#003262",
													fontWeight: "bold",
													fontStyle: "Manrope",
												}}>
												Active/Inactive
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													color: "#003262",
													fontWeight: "bold",
													fontStyle: "Manrope",
												}}>
												Status
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													color: "#003262",
													fontWeight: "bold",
													fontStyle: "Manrope",
												}}></TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{(pos.length > 0 ? pos : storedPositions)?.map((row, i) => (
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
														fontStyle: "Manrope",
														textAlign: "center",
													}}>
													{row.id}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														whiteSpace: "nowrap",
														fontStyle: "Manrope",
														fontWeight: "bold",
													}}>
													{row.name}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														whiteSpace: "nowrap",
														fontWeight: "bold",
														fontStyle: "Manrope",
													}}>
													{row.appication}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														whiteSpace: "nowrap",
														fontWeight: "bold",
														fontStyle: "Manrope",
													}}>
													{row.employee}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														whiteSpace: "nowrap",
														fontWeight: "bold",
														fontStyle: "Manrope",
													}}>
													{row.role}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														fontWeight: "bold",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														fontStyle: "Manrope",
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
														fontStyle: "Manrope",
													}}>
													{row.status}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														whiteSpace: "nowrap",
														fontWeight: "bold",
														fontStyle: "Manrope",
													}}>
													{row.employeeassign}
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

export default Positions;
