import React from "react";
import { AssessmentData } from "../../../constant/AssessmentData/AssessmentData";
import { useParams } from "react-router-dom";
import Card from "../../../Component/dashboard/Card";
import UserSideBar from "../../../Layout/UserSideBar/UserSideBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";
import { MdOutlineCheck } from "react-icons/md";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { RxCross2 } from "react-icons/rx";

import SearchIcon from "@mui/icons-material/Search";
import { FaPlus } from "react-icons/fa";

import { Switch } from "@mui/material";

const ApproveData = () => {
	const { name } = useParams();

	const filtername = AssessmentData.filter((ele) => ele.name == name);
	console.log(filtername);

	const approvedata = filtername && filtername[0]?.approves;
	console.log(approvedata);
	return (
		<>
			<Card>
				<UserSideBar />
				<div className=" w-full max-h-screen overflow-y-scroll px-3 py-5 border-l-2 border-blue-600 bg-white ">
					<div className="px-4">
						<h1 className="font-bold text-lg">Approvals Module</h1>
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
											Group
										</TableCell>
										<TableCell
											sx={{
												fontSize: "18px",
												textAlign: "center",
												whiteSpace: "nowrap",
											}}>
											Invitaions Code
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
											Phone Number
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
									{approvedata.map((row, i) => (
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
												{row.group}
											</TableCell>
											<TableCell
												sx={{
													fontSize: "16px",
													textAlign: "center",
													whiteSpace: "nowrap",
												}}>
												{row.invitationcode}
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
												<div className="flex gap-4 items-center justify-center ">
													<button
														className=" px-4 py-2 flex items-center gap-5 rounded-lg"
														style={{
															background: row.accpectcolor,
															fontSize: "18px",
														}}>
														<span>
															<MdOutlineCheck />
														</span>
														{row.accpect}
													</button>
													<button
														className=" px-4 py-2 flex items-center gap-5 rounded-lg"
														style={{
															background: row.removecolor,
															fontSize: "18px",
														}}>
														<span>
															<RxCross2 />
														</span>
														{row.remove}
													</button>
												</div>
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

export default ApproveData;
