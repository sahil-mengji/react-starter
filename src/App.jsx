import React, { Suspense, lazy, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ResumePage from "./pages/ResumePage/ResumePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage";

export default function App() {
	// const [isLoadingComplete, setIsLoadingComplete] = useState(false);
	// const location = useLocation();

	// // This function will be called when the StartLoader is done loading
	// const handleLoaderComplete = () => {
	// 	setIsLoadingComplete(true);
	// };

	return (
		<>
			{/* <StartLoader onComplete={handleLoaderComplete} />
			{isLoadingComplete && ( */}

			<Navbar />
			{/* <Suspense fallback={<Loader />}> */}
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/resume" element={<ResumePage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/contact" element={<ContactPage />} />

				<Route path="*" element={<HomePage />} />
			</Routes>
			{/* </Suspense> */}
		</>
	);
}
