import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

import LoginPage from "./Pages/LoginPage/LoginPage.jsx";
import DemoPage from "./Pages/RequestDemoPage/DemoPage.jsx";
import SolutionPage from "./Pages/SolutionPage/SolutionPage.jsx";
import Profilepages from "./Pages/profilepage/Profilepages.jsx";
import AssessmentsPage from "./Pages/ProductPage/AssessmentsPage.jsx";
import KickPage from "./Pages/KickPage/KickPage.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import CorporateHomePage from "./Pages/corporateHomePage/corporateHomePage.jsx";
import ContactPage from "./Pages/ContactPage/ContactPage.jsx";
import Tanent from "./Pages/dashboard/tanent/Tanent.jsx";
import Assesment from "./Pages/dashboard/assesment/Assesment.jsx";
import Dashboard from "./Pages/dashboard/Dashboard.jsx";
import User from "./Pages/dashboard/user/User.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="/" element={<HomePage />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="/Demo" element={<DemoPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/assessment" element={<AssessmentsPage />} />
			<Route path="/profile" element={<Profilepages />} />
			<Route path="/corporate/:id" element={<CorporateHomePage />} />
			<Route path="/solution" element={<SolutionPage />} />
			<Route path="/journey" element={<KickPage />} />
			<Route path="/journey/:id" element={<Dashboard />} />
			<Route path="/journey/assessment/:name" element={<Assesment />} />
			<Route path="/journey/hris/:name" element={<Tanent />} />
			<Route path="/journey/users/:name" element={<User/>} />
		</Route>
	)
);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);

