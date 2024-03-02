import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/landing-page/LandingPage";
import { ErrorPage } from "./pages/error/ErrorPage";

const IndexRoutes: FC = () => (
	<BrowserRouter>
		<Routes>
			<Route element={<MainLayout />}>
				<Route path={"/"} element={<LandingPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

export default IndexRoutes;
