import React from "react";
import Nav from "./Layout/Navbar/Nav";

import Footer from "./Layout/Footer/Footer";

import { Outlet, useLocation, useParams } from "react-router-dom";
import DashBoardNavbar from "./Layout/DashBoardNavbar/DashBoardNavbar";
import SideNavBarResult from "./Layout/SideNavBarResult/SideNavBarResult";

const App = () => {
	const path = useLocation();
	const pathname = path.pathname;

	const params = useParams();
	console.log(params);

	return (
		<>
			{pathname == "/login" ||
			pathname == "/profile" ||
			pathname == "/journey" ||
			pathname == `/journey/assesments/${params.id}` ||
			pathname == `/journey/assesments/Result/${params.id}` ? (
				""
			) : (
				<Nav />
			)}

			{pathname == "/journey" ||
			pathname == `/journey/assesments/${params.id}` ||
			pathname == `/journey/assesments/Result/${params.id}` ? (
				<DashBoardNavbar />
			) : (
				""
			)}
			<Outlet />

			{pathname == "/login" ||
			pathname == "/profile" ||
			pathname == "/journey" ||
			pathname == `/journey/assesments/${params.id}` ||
			pathname == `/journey/assesments/Result/${params.id}` ? (
				""
			) : (
				<Footer />
			)}
		</>
	);
};

export default App;

