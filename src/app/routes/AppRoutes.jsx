import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import BareLayout from "../layout/BareLayout";
import MainLayout from "../layout/MainLayout";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Pages with Navbar + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Pages without Navbar + Footer */}
      <Route element={<BareLayout />}></Route>
    </Routes>
  );
}
