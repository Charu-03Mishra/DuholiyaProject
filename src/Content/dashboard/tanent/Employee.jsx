import React from "react";
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
import Button from "@mui/material/Button";

import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import Card from "../../../Component/dashboard/Card";

const Employee = () => {
	const { name } = useParams();
	const filteremployee = AssessmentData.filter((ele) => ele.name == name);
	const employee = filteremployee && filteremployee[0]?.employee;
	return (
		<>
			<Card >
				<TanentDashBorad />
				<div className=" w-full max-h-screen overflow-y-scroll px-3 py-5 border-l-2 border-blue-600 bg-white ">
					<div className="px-4">
						<h1 className="font-bold text-lg">Employee Module</h1>
						<p>
							Manage and organize group effortlessly. Create, Join or maderate
							position based on your preference and objectives.
						</p>
					</div>
					<div className="flex items-center justify-between px-4 my-5">
						<Paper
							component="form"
							sx={{
								border: 2,
								display: "flex",
								alignItems: "center",
								width: 800,
							}}>
							<InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search By Name" />
							<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
								<SearchIcon />
							</IconButton>
						</Paper>
						<Stack
							spacing={1}
							direction="row"
							className="flex items-center text-white border-2 border-black rounded-lg bg-[#003262] ml-10 px-4 ">
							<span>
								<FaPlus size={20} />
							</span>
							<Button
								sx={{
									fontSize: "18px",
									color: "white",
								}}>
								Add
							</Button>
						</Stack>
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
												fontSize: "18px",
											}}>
											Id
										</TableCell>
										<TableCell
											sx={{
												fontSize: "18px",
												textAlign: "center",
												whiteSpace: "nowrap",
											}}>
											Name
										</TableCell>
										<TableCell
											sx={{
												fontSize: "18px",
												textAlign: "center",
												whiteSpace: "nowrap",
											}}>
											Email
										</TableCell>
										<TableCell
											sx={{
												fontSize: "18px",
												textAlign: "center",
												whiteSpace: "nowrap",
											}}>
											Phone No.
										</TableCell>
										<TableCell
											sx={{
												fontSize: "18px",
												textAlign: "center",
												whiteSpace: "nowrap",
											}}>
											Designation
										</TableCell>
										<TableCell
											sx={{
												fontSize: "18px",
												textAlign: "center",
												whiteSpace: "nowrap",
											}}>
											Department
										</TableCell>
										<TableCell
											sx={{
												fontSize: "18px",
												textAlign: "center",
												whiteSpace: "nowrap",
											}}>
											Status
										</TableCell>
										<TableCell
											sx={{
												fontSize: "18px",
												textAlign: "center",
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
												}}>
												{row.id}
											</TableCell>
											<TableCell
												sx={{
													fontSize: "16px",
													textAlign: "center",
													whiteSpace: "nowrap",
												}}>
												{row.name}
											</TableCell>
											<TableCell
												sx={{
													fontSize: "16px",
													textAlign: "center",
													whiteSpace: "nowrap",
												}}>
												{row.email}
											</TableCell>
											<TableCell
												sx={{
													fontSize: "16px",
													textAlign: "center",
													whiteSpace: "nowrap",
												}}>
												{row.phoneno}
											</TableCell>
											<TableCell
												sx={{
													fontSize: "16px",
													textAlign: "center",
													whiteSpace: "nowrap",
												}}>
												{row.designatoin}
											</TableCell>
											<TableCell
												sx={{
													fontSize: "16px",
													textAlign: "center",
													whiteSpace: "nowrap",
												}}>
												{row.department}
											</TableCell>
											<TableCell
												sx={{
													fontSize: "16px",

													display: "flex",
													alignItems: "center",
													justifyContent: "center",
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
											<TableCell sx={{ whiteSpace: "nowrap" }}>
												{Logo(row.edit, "Green")}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>
				</div>
			</Card>
		</>
	);
};

export default Employee;
