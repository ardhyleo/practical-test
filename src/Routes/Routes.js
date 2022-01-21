import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Create from "../Pages/Create/Create";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
}
