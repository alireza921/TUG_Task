import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { TUGRoutes } from "./TUGRoutes";
//Pages
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

interface RouterProps
{

}

const Router: FunctionComponent<RouterProps> = () =>
{
	const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);

	if (isAuth)
		return (
			<Routes>
				<Route path={TUGRoutes.Home} element={<HomePage />} />
				<Route path={TUGRoutes.Dashboard} element={<DashboardPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		)
	else
		return (
			<Routes>
				<Route path={TUGRoutes.Login} element={<LoginPage />} />
				<Route path="*" element={<LoginPage />} />
			</Routes>

		)
}

export default Router;