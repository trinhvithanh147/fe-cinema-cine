import { Route, Routes } from "react-router-dom";

import { path } from "./path";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={path.homeTemplate} element={<HomeTemplate />} />
    </Routes>
  );
};

export default AppRoutes;
