import { Route, Routes } from "react-router-dom";

import { path } from "./path";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate";
import Login from "../templates/AuthTemplate/Login";
import HomePage from "../pages/HomePage";
import BannerSlide from "../pages/BannerSlide/BannerSlide";
import SignUp from "../templates/AuthTemplate/SignUp";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HomeTemplate />}>
        <Route path={path.homePage} element={<HomePage />} />
      </Route>
      <Route path={path.login} element={<Login />} />
      <Route path={path.signUp} element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
