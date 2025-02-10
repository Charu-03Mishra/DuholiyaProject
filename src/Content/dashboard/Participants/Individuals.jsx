import React, { useState } from "react";
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
import IndividualsPopUp from "./IndividualsPopUp";
const Individuals = () => {
	const [click, setClick] = useState();
	const IndividualData = AssessmentData.find(
		(data) => data.name == "individual"
	);
	const clickHAndler = () => {
		setClick(true);
	};
	return (
		<div className="col-span-10">
			<div className="  px-3 py-5 border-l-2 border-blue-600 bg-white ">
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
							<FaPlus onClick={clickHAndler} size={20} />
						</span>
						<Button
							onClick={clickHAndler}
							sx={{
								fontSize: "18px",
								color: "white",
							}}>
							Add
						</Button>
					</Stack>
				</div>
				<div className="absolute z-10 top-[8%] left-1/2 transform -translate-x-1/2 flex justify-center px-4 w-full">
					{click && <IndividualsPopUp setClick={setClick} />}
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
											fontWeight: "bold",
											color: "#003262",
											fontStyle: "Manrope",
											textAlign: "center",
										}}>
										Name
									</TableCell>
									<TableCell
										sx={{
											fontSize: "14px",
											fontWeight: "bold",
											color: "#003262",
											fontStyle: "Manrope",
											textAlign: "center",
										}}>
										Email
									</TableCell>
									<TableCell
										sx={{
											fontSize: "14px",
											fontWeight: "bold",
											color: "#003262",
											fontStyle: "Manrope",
											textAlign: "center",
										}}>
										Phone No.
									</TableCell>

									<TableCell
										sx={{
											fontSize: "14px",
											fontWeight: "bold",
											color: "#003262",
											fontStyle: "Manrope",
											textAlign: "center",
										}}>
										Status
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{IndividualData.individual.map((row, i) => (
									<TableRow
										key={i}
										sx={{
											textAlign: "center",
										}}>
										<TableCell
											sx={{
												fontSize: "16px",
												fontFamily: "Manrope",
												fontWeight: "bold",
												textAlign: "center",
												whiteSpace: "nowrap",
											}}>
											{row.name}
										</TableCell>
										<TableCell
											sx={{
												fontSize: "16px",
												fontFamily: "Manrope",
												fontWeight: "bold",
												textAlign: "center",
												whiteSpace: "nowrap",
											}}>
											{row.email}
										</TableCell>
										<TableCell
											sx={{
												fontSize: "16px",
												fontFamily: "Manrope",
												fontWeight: "bold",
												textAlign: "center",
												whiteSpace: "nowrap",
											}}>
											{row.phoneno}
										</TableCell>

										<TableCell
											sx={{
												fontSize: "16px",
												fontFamily: "Manrope",
												fontWeight: "bold",
												textAlign: "center",
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
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			</div>
		</div>
	);
};

export default Individuals;
