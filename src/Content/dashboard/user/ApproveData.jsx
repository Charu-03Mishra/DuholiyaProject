import React, { useState } from "react";
import { AssessmentData } from "../../../constant/AssessmentData/AssessmentData";
import { useParams } from "react-router-dom";

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
import Tanent from "../../../Component/dashboard/Tanent/Tanent";
import SearchAndAdd from "../../../Component/dashboard/Tanent/SearchAndAdd";
import ApprovePopUp from "./ApprovePopUp";

const ApproveData = () => {
	const { name } = useParams();
	const [approve, setApprove] = useState(false);

	const filtername = AssessmentData.filter((ele) => ele.name == name);
	console.log(filtername);

	const approvedata = filtername && filtername[0]?.approves;
	console.log(approvedata);
	return (
		<>
			<Tanent>
				<div className="grid grid-cols-12 bg-white">
					<UserSideBar />

					<div className=" col-span-10 px-3 py-5 border-l-2 border-gray-500 relative ">
						<div className="px-4">
							<h1 className="font-bold text-sm lg:text-[16px] inter text-[#3A3A3A] text-justify">
								Approvals Module
							</h1>
							<p className="text-justify text-xs inter text-[#545454]">
								Manage and organize group effortlessly. Create, Join or maderate
								position based on your preference and objectives.
							</p>
						</div>
						<SearchAndAdd setstateChange={setApprove} />
						<div className="absolute z-10 top-[8%] left-1/2 transform -translate-x-1/2 flex justify-center px-4 w-full">
							{approve && <ApprovePopUp setApprove={setApprove} />}
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
													fontFamily: "Manrope",
													fontWeight: "bold",
													color: "#003262",
													fontStyle:"Manrope",
													textAlign:"center",
												
												}}>
												Group
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													fontFamily: "Manrope",
													fontWeight: "bold",
													color: "#003262",
													whiteSpace: "nowrap",
												}}>
												Invitaions Code
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													whiteSpace: "nowrap",
													fontFamily: "Manrope",
													fontWeight: "bold",
													color: "#003262",
												}}>
												Name
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													whiteSpace: "nowrap",
													fontFamily: "Manrope",
													fontWeight: "bold",
													color: "#003262",
												}}>
												Email
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													whiteSpace: "nowrap",
													fontFamily: "Manrope",
													fontWeight: "bold",
													color: "#003262",
												}}>
												Phone Number
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													whiteSpace: "nowrap",
													fontFamily: "Manrope",
													fontWeight: "bold",
													color: "#003262",
												}}>
												Status
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													fontFamily: "Manrope",
													fontWeight: "bold",
													color: "#003262",
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
														fontFamily: "Manrope",
														fontWeight: "bold",
														textAlign:"center",
												
													}}>
													{row.group}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														whiteSpace: "nowrap",
														fontFamily: "Manrope",
														fontWeight: "bold",
													}}>
													{row.invitationcode}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														whiteSpace: "nowrap",
														fontFamily: "Manrope",
														fontWeight: "bold",
													}}>
													{row.name}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														whiteSpace: "nowrap",
														fontFamily: "Manrope",
														fontWeight: "bold",
													}}>
													{row.email}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														whiteSpace: "nowrap",
														fontFamily: "Manrope",
														fontWeight: "bold",
													}}>
													{row.phoneno}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														fontFamily: "Manrope",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														fontWeight: "bold",
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
															className=" px-4 py-2 flex items-center gap-2 rounded-lg"
															style={{
																background: row.accpectcolor,
																fontSize: "12.5px",
															}}>
															<span>
																<MdOutlineCheck />
															</span>
															{row.accpect}
														</button>
														<button
															className=" px-4 py-2 flex items-center gap-2 rounded-lg"
															style={{
																background: row.removecolor,
																fontSize: "12.5px",
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
				</div>
			</Tanent>
		</>
	);
};

export default ApproveData;
