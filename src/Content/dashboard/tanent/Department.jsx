import React from "react";
import TanentDashBorad from "../../../Layout/TanentDashBoardSideNavBar/TanentDashBorad";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { AssessmentData } from "../../../constant/AssessmentData/AssessmentData";
import { Logo } from "../../../Component/Logo/Logo";
import Button from "@mui/material/Button";

import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";
import Card from "../../../Component/dashboard/Card";

const Department = () => {
	const { name } = useParams();
	const filtername = AssessmentData.filter((ele) => ele.name == name);
	console.log(filtername);

	const departmentdata = filtername && filtername[0]?.department;
	console.log(departmentdata);

	console.log(departmentdata);
	return (
		<>
			<Card>
				<TanentDashBorad />
				<div className=" w-full  max-h-screen overflow-y-scroll lg:px-3 py-5 border-l-2 border-blue-600  ">
					<div className="px-4">
						<h1 className="font-bold text-lg text-justify">Department Module</h1>
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
								minWidth: 180,
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
							className="flex items-center text-white border-2 border-black rounded-lg bg-[#003262] lg:ml-10 ml-2 px-4 ">
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
											Code
										</TableCell>
										<TableCell
											sx={{
												fontSize: "18px",
												textAlign: "center",
											}}>
											Department
										</TableCell>
										<TableCell
											sx={{
												fontSize: "18px",
												textAlign: "center",
											}}>
											Edit/Delete
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{departmentdata.map((row, i) => (
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
												}}>
												{row.number}
											</TableCell>
											<TableCell
												sx={{
													fontSize: "16px",
													textAlign: "center",
												}}>
												{row.data}
											</TableCell>
											<TableCell
												sx={{
													fontSize: "16px",

													display: "flex",
													alignItems: "center",
													justifyContent: "center",
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
			</Card>
		</>
	);
};

export default Department;
