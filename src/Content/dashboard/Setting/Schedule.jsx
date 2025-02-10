import React, { useState } from "react";
import { AssessmentData } from "../../../constant/AssessmentData/AssessmentData";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Logo } from "../../../Component/Logo/Logo";
import { FaPlus } from "react-icons/fa";
import SchedulePop from "./SchedulePop";

const Schedule = () => {
	const [showPop, setPop] = useState(false);
	const showhandler = () => {
		setPop(true);
	};
	const closehandler = () => {
		setPop(false);
	};
	const activeSchedule = AssessmentData.find((data) => data.name == "schedule");
	return (
		<>
			<div className="col-span-10  lg:px-3 py-5 border-l-2 border-blue-600  ">
				<div className="flex lg:justify-end items-center mb-5">
					<div className="bg-primary relative rounded-lg flex  gap-2 text-white items-center sm:px-3 sm:py-2 px-5 py-3 mx-5 ">
						<span>
							<FaPlus
								size={20}
								className="cursor-pointer"
								onClick={showhandler}
							/>
						</span>
						<button
							className="text-base  text-[16px] Manrope"
							onClick={showhandler}>
							Add Version
						</button>
					</div>
				</div>
				{showPop && <SchedulePop closehandler={closehandler} />}
				<div className="">
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
											fontFamily: "Manrope",
											color: "#003262",
											fontSize: "14px",
											textAlign:"center",
												
										}}>
										Version
									</TableCell>
									<TableCell
										sx={{
											fontFamily: "Manrope",
											color: "#003262",
											fontSize: "14px",
											textAlign: "center",
										}}>
										Time Zone
									</TableCell>
									<TableCell
										sx={{
											fontFamily: "Manrope",
											color: "#003262",
											fontSize: "14px",
											textAlign: "center",
										}}>
										From
									</TableCell>
									<TableCell
										sx={{
											fontFamily: "Manrope",
											color: "#003262",
											fontSize: "14px",
											textAlign: "center",
										}}>
										Untill
									</TableCell>
									<TableCell
										sx={{
											fontFamily: "Manrope",
											color: "#003262",
											fontSize: "14px",
											textAlign: "center",
										}}>
										Status
									</TableCell>
									<TableCell
										sx={{
											fontFamily: "Manrope",
											color: "#003262",
											fontSize: "14px",
											textAlign: "center",
										}}>
										Live
									</TableCell>
									<TableCell
										sx={{
											fontFamily: "Manrope",
											color: "#003262",
											fontSize: "14px",
											textAlign: "center",
										}}></TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{activeSchedule.schedules.map((row, i) => (
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
												fontFamily: "Manrope",
												color: "#191D23",
												fontWeight: "bold",
												textAlign:"center",
												
											}}>
											{row.version}
										</TableCell>
										<TableCell
											sx={{
												fontSize: "16px",
												fontFamily: "Manrope",
												color: "#191D23",
												fontWeight: "bold",
												textAlign: "center",
											}}>
											{row.timezone}
										</TableCell>
										<TableCell
											sx={{
												fontSize: "16px",
												fontFamily: "Manrope",
												color: "#191D23",
												textAlign: "center",
											}}>
											{row.from}
										</TableCell>
										<TableCell
											sx={{
												fontSize: "16px",
												fontFamily: "Manrope",
												color: "#191D23",
												textAlign: "center",
											}}>
											{row.untill}
										</TableCell>
										<TableCell
											sx={{
												fontSize: "16px",
												fontFamily: "Manrope",
												color: "#191D23",
												fontWeight: "bold",
												textAlign: "center",
											}}>
											{row.status}
										</TableCell>
										<TableCell
											sx={{
												fontSize: "16px",
												fontFamily: "Manrope",
												color: "#0B87AC",
												fontWeight: "bold",
												textAlign: "center",
											}}>
											{row.live}
										</TableCell>
										<TableCell
											sx={{
												fontSize: "16px",
												display: "flex",
												fontWeight: "bold",
												alignItems: "center",
												gap: "4px",
												justifyContent: "center",
											}}>
											{Logo(row.edit, "Green")}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			</div>
		</>
	);
};

export default Schedule;
