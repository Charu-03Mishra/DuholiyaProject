import React, { useState } from "react";
import UserSideBar from "../../../Layout/UserSideBar/UserSideBar";

import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RxCross1 } from "react-icons/rx";

import { HiViewfinderCircle } from "react-icons/hi2";
import { Switch } from "@mui/material";
import { AssessmentData } from "../../../constant/AssessmentData/AssessmentData";
import Tanent from "../../../Component/dashboard/Tanent/Tanent";
import SearchAndAdd from "../../../Component/dashboard/Tanent/SearchAndAdd";
import { UserPopup } from "./UserPopup";

const UserData = () => {
	const [user, setUserPop] = useState(false);

	const { name } = useParams();

	const filtername = AssessmentData.filter((ele) => ele.name == name);
	console.log(filtername);

	const userdata = filtername && filtername[0]?.users;
	console.log(userdata, "usedata");

	return (
		<>
			<Tanent>
				<div className="grid grid-cols-12 bg-white ">
					<UserSideBar />
					<div className=" col-span-10 px-3 py-5 border-l-2 border-blue-600  relative  ">
						<div className="px-4">
							<h1 className="font-bold text-sm lg:text-[16px]  text-[#3A3A3A] text-justify inter">
								Participants Module
							</h1>
							<p className="text-justify text-xs inter text-[#545454]">
								Seamlessly handle participants in any group. Track engagement
								and manage roles effectively.
							</p>
						</div>
						<SearchAndAdd setstateChange={setUserPop} />

						<div className="absolute z-10 top-[8%] left-1/2 transform -translate-x-1/2 flex justify-center px-4 w-full">
							{user && <UserPopup setUserPop={setUserPop} />}
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
													textAlign: "center",
												}}>
												Name
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													fontFamily: "Manrope",
													fontWeight: "bold",
													color: "#003262",
												}}>
												Tag
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													fontFamily: "Manrope",
													fontWeight: "bold",
													color: "#003262",
												}}>
												Members
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													fontFamily: "Manrope",
													fontWeight: "bold",
													color: "#003262",
												}}>
												Status
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{userdata.map((row, i) => (
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
														fontWeight: "bold",
														textAlign: "center",
													}}>
													{row.name}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														display: "flex",
														color: "#191D23",
														fontWeight: "bold",
														alignItems: "center",
														justifyContent: "center",
														gap: "7px",
													}}>
													{row.email}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														fontWeight: "bold",
														color: "#191D23",
													}}>
													{row.phoneno}
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

export default UserData;
