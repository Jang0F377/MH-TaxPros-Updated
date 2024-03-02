import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

const MainLayout: FC = () => (
	<div className="h-full scroll-smooth bg-white antialiased" lang="en">
		<main className="flex h-full flex-col">
			<Header />
			<Outlet />
		</main>
	</div>
);

export default MainLayout;
