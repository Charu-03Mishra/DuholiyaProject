import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { AssessmentData } from "../../../constant/AssessmentData/AssessmentData";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Logo } from "../../../Component/Logo/Logo";
import SectionPop from "./SectionPop";

const Section = () => {
	const [showPop, setPop] = useState(false);
	const showhandler = () => {
		setPop(true);
	};
	const closehandler = () => {
		setPop(false);
	};
	const activesection = AssessmentData.find((data) => data.name == "section");
	return (
		<div className="col-span-10 lg:px-3 py-5 border-l-2 border-blue-600  ">
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
			{showPop && <SectionPop closehandler={closehandler} />}
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
									Order
								</TableCell>
								<TableCell
									sx={{
										fontFamily: "Manrope",
										color: "#003262",
										fontSize: "14px",
										textAlign: "center",
									}}>
									Section
								</TableCell>
								<TableCell
									sx={{
										fontFamily: "Manrope",
										color: "#003262",
										fontSize: "14px",
										textAlign: "center",
									}}>
									Max Question
								</TableCell>
								<TableCell
									sx={{
										fontFamily: "Manrope",
										color: "#003262",
										fontSize: "14px",
										textAlign: "center",
									}}>
									Equal Marks ?
								</TableCell>
								<TableCell
									sx={{
										fontFamily: "Manrope",
										color: "#003262",
										fontSize: "14px",
										textAlign: "center",
									}}>
									Marks
								</TableCell>
								<TableCell
									sx={{
										fontFamily: "Manrope",
										color: "#003262",
										fontSize: "14px",
										textAlign: "center",
									}}>
									NegitiveMarking
								</TableCell>
								<TableCell
									sx={{
										fontFamily: "Manrope",
										color: "#003262",
										fontSize: "14px",
										textAlign: "center",
									}}>
									Shuffle Question
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
									}}></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{activesection.section.map((row, i) => (
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
											textAlign:"center",
												
										}}>
										{row.order}
									</TableCell>
									<TableCell
										sx={{
											fontSize: "16px",
											fontFamily: "Manrope",
											color: "#191D23",
											textAlign: "center",
										}}>
										{row.section}
									</TableCell>
									<TableCell
										sx={{
											fontSize: "16px",
											fontFamily: "Manrope",
											color: "#191D23",
											textAlign: "center",
										}}>
										{row.maxque}
									</TableCell>
									<TableCell
										sx={{
											fontSize: "16px",
											fontFamily: "Manrope",
											color: "#191D23",
											textAlign: "center",
										}}>
										{row.equalmarks}
									</TableCell>
									<TableCell
										sx={{
											fontSize: "16px",
											fontFamily: "Manrope",
											color: "#191D23",
											textAlign: "center",
											fontWeight: "bold",
										}}>
										{row.mark}
									</TableCell>
									<TableCell
										sx={{
											fontSize: "16px",
											fontFamily: "Manrope",
											color: "#191D23",
											textAlign: "center",
											fontWeight: "bold",
										}}>
										{row.negitivemark}
									</TableCell>
									<TableCell
										sx={{
											fontSize: "16px",
											fontFamily: "Manrope",
											color: "#191D23",
											textAlign: "center",
											fontWeight: "bold",
										}}>
										{row.shuffle}
									</TableCell>
									<TableCell
										sx={{
											fontSize: "16px",
											fontFamily: "Manrope",
											color: "#191D23",
											textAlign: "center",
											fontWeight: "bold",
										}}>
										{row.status}
									</TableCell>
									<TableCell
										sx={{
											fontSize: "16px",
											fontFamily: "Manrope",
											color: "#191D23",
											display: "flex",
											alignItems: "center",
											gap: "4px",
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
	);
};

export default Section;
