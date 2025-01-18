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
import { Logo } from "../../../Component/Logo/Logo";

const InvitationData = () => {
	const { name } = useParams();

	const filtername = AssessmentData.filter((ele) => ele.name == name);

	const invitationdata = filtername && filtername[0]?.invitation;

	return (
		<>
			<Card>
				<UserSideBar />
				<div className=" w-full max-h-screen overflow-y-scroll px-3 py-5 border-l-2 border-blue-600 bg-white ">
					<div className="px-4">
						<h1 className="font-bold text-lg">Invitation Code Module</h1>
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
											Codes
										</TableCell>
										<TableCell
											sx={{
												fontSize: "18px",
												textAlign: "center",
												whiteSpace: "nowrap",
											}}>
											Max Invitaions
										</TableCell>
										<TableCell
											sx={{
												fontSize: "18px",
												textAlign: "center",
												whiteSpace: "nowrap",
											}}>
											Expiry
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
												whiteSpace: "nowrap",
											}}></TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{invitationdata.map((row, i) => (
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
												{row.code}
											</TableCell>
											<TableCell
												sx={{
													fontSize: "16px",
													textAlign: "center",
													whiteSpace: "nowrap",
												}}>
												{row.maxinvitation}
											</TableCell>
											<TableCell
												sx={{
													fontSize: "16px",
													textAlign: "center",
													whiteSpace: "nowrap",
												}}>
												{row.expiry}
											</TableCell>
											<Switch
												checked={row.active}
												sx={{
													" & .css-161ms7l-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked":
														{
															color: "#5bc17f",
														},
												}}
											/>
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

export default InvitationData;
