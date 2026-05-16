import { Route, Routes } from "react-router-dom";

import { path } from "./path";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate";
import Login from "../templates/AuthTemplate/Login";
import HomePage from "../pages/HomePage";
import BannerSlide from "../pages/BannerSlide/BannerSlide";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HomeTemplate />}>
        <Route path={path.homePage} element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
