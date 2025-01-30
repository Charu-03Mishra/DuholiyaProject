import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { AssessmentData } from "../../../constant/AssessmentData/AssessmentData";
import { Logo } from "../../../Component/Logo/Logo";
import { Switch } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { HiViewfinderCircle } from "react-icons/hi2";
const Group = () => {
	const GroupData = AssessmentData.find((data) => data.name == "Group");
	console.log(GroupData.group);

	return (
		<div className=" w-full h-full  max-h-screen overflow-y-scroll lg:px-3 py-5 border-l-2 border-blue-600  ">
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
									Name
								</TableCell>
								<TableCell
									sx={{
										fontSize: "18px",
										textAlign: "center",
									}}>
									Tags
								</TableCell>
								<TableCell
									sx={{
										fontSize: "18px",
										textAlign: "center",
									}}>
									Participants
								</TableCell>
								<TableCell
									sx={{
										fontSize: "18px",
										textAlign: "center",
									}}>
									Status
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{GroupData?.group?.map((row, i) => (
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
										{row.name}
									</TableCell>
									<TableCell
										sx={{
											fontSize: "16px",
											textAlign: "center",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											gap: "7px",
										}}>
										<div className="border-2 flex items-center border-[#003262] rounded-md px-2">
											{row.tag}{" "}
											<span>
												<RxCross1 size={15} className="text-[#003262]" />
											</span>
										</div>
										<div className="border-2 flex items-center border-[#003262] rounded-md px-2">
											{row.tag}
											<span>
												<RxCross1 size={15} className="text-[#003262]" />
											</span>
										</div>
										<div className="border-2 flex items-center border-[#003262] rounded-md px-2">
											{row.tag}
											<span>
												<RxCross1 size={15} className="text-[#003262]" />
											</span>
										</div>
									</TableCell>
									<TableCell
										sx={{
											fontSize: "16px",
											textAlign: "center",
										}}>
										<div className="flex justify-center items-center gap-2 py-1 rounded-lg bg-[#003262] text-white">
											<HiViewfinderCircle size={20} />
											<span>{row.participants}</span>
										</div>
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
	);
};

export default Group;
