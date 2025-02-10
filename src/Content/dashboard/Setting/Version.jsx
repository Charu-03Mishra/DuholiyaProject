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
import { TbLocationShare } from "react-icons/tb";
import { IoMdSwitch } from "react-icons/io";
import VersionPop from "./VersionPop";

const Version = () => {
	const [showPop, setPop] = useState(false);
	const showhandler = () => {
		setPop(true);
	};
	const closehandler = () => {
		setPop(false);
	};
	const activePositions = AssessmentData.find((data) => data.name == "version");
	return (
		<>
			<div className=" col-span-10 manrope lg:px-3 py-5 border-l-2 border-blue-600  ">
				<div className="flex lg:justify-end items-center mb-5">
					<div className="bg-primary relative rounded-lg flex  gap-2 text-white items-center sm:px-3 sm:py-2 px-5 py-3 mx-5 ">
						<span>
							<FaPlus
								size={20}
								className="cursor-pointer"
								onClick={showhandler}
							/>
						</span>
						<button className="text-base  text-[16px] Manrope" onClick={showhandler}>
							Add Version
						</button>
					</div>
				</div>

				{showPop && <VersionPop closehandler={closehandler} />}
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
											fontFamily: "Manrope",
											color: "#003262",
											fontSize: "14px",
											textAlign:"center",
												
										}}>
										Versions
									</TableCell>
									<TableCell
										sx={{
											fontFamily: "Manrope",
											color: "#003262",
											fontSize: "14px",
											textAlign: "center",
										}}>
										Set Creations
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
										Action
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{activePositions.version.map((row, i) => (
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
												textAlign: "center",
												fontFamily: "Manrope",
												color: "#191D23",
											
												
											}}>
											{row.setcorrection}
										</TableCell>
										<TableCell
											sx={{
												fontSize: "16px",
												textAlign: "center",
												fontFamily: "Manrope",
												color: "#191D23",
												fontWeight: "bold",
											}}>
											{row.status}
										</TableCell>
										<TableCell
											sx={{
												fontSize: "16px",
												fontFamily: "Manrope",
												display: "flex",
												alignItems: "center",
												gap: "4px",
												justifyContent: "center",
											}}>
											<span className="px-2">{Logo(row.edit, "Green")}</span>
											<div className="flex items-center gap-2 bg-[#003262] px-3 py-2 text-white rounded-lg ">
												<span>
													<TbLocationShare size={20} />
												</span>
												<button className="text-[12.5px] Manrope">
													{row.publish}
												</button>
											</div>
											<div className="flex items-center gap-2 bg-[#003262] px-3 py-2 text-white rounded-lg">
												<span>
													<IoMdSwitch size={20} />
												</span>
												<button className="text-[12.5px] Manrope">
													{row.switch}
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
		</>
	);
};

export default Version;
