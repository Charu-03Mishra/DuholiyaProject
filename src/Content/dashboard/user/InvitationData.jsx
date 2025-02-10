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

import { Switch } from "@mui/material";
import { Logo } from "../../../Component/Logo/Logo";
import Tanent from "../../../Component/dashboard/Tanent/Tanent";
import SearchAndAdd from "../../../Component/dashboard/Tanent/SearchAndAdd";
import InvitationPopUp from "./InvitationPopUp";

const InvitationData = () => {
	const [invitation, setInvitaion] = useState(false);
	const { name } = useParams();

	const filtername = AssessmentData.filter((ele) => ele.name == name);

	const invitationdata = filtername && filtername[0]?.invitation;

	return (
		<>
			<Tanent>
				<div className="grid grid-cols-12 bg-white">
					<UserSideBar />
					<div className=" col-span-10 px-3 py-5 border-l-2 relative border-blue-600">
						<div className="px-4">
							<h1 className="font-bold text-sm lg:text-[16px] inter  text-[#3A3A3A] text-justify">
								Invitation Code Module
							</h1>
							<p className="text-justify text-xs inter  text-[#545454]">
								Manage and organize group effortlessly. Create, Join or maderate
								position based on your preference and objectives.
							</p>
						</div>
						<SearchAndAdd setstateChange={setInvitaion} />
						<div className="absolute z-10 top-[8%] left-1/2 transform -translate-x-1/2 flex justify-center px-4 w-full">
							{invitation && <InvitationPopUp setInvitaion={setInvitaion} />}
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
												}}>
												Codes
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
												Max Invitaions
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
												Expiry
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
													whiteSpace: "nowrap",
													fontFamily: "Manrope",
													fontWeight: "bold",
													color: "#003262",
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
														fontFamily: "Manrope",
														fontWeight: "bold",
														textAlign:"center",
												
													}}>
													{row.code}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														whiteSpace: "nowrap",
														fontFamily: "Manrope",
														fontWeight: "bold",
													}}>
													{row.maxinvitation}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														whiteSpace: "nowrap",
														fontFamily: "Manrope",
														fontWeight: "bold",
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
				</div>
			</Tanent>
		</>
	);
};

export default InvitationData;
