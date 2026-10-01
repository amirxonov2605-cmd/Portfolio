import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Placeholder from "./Placeholder";
import Home from "./AllPages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="placeholder" element={<Placeholder />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;