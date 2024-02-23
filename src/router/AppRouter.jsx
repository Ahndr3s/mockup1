import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Courses } from "../pages/Courses";
import { About } from "../pages/About";
import { Navbar } from "../ui/components/Navbar";


export const AppRouter = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="about" element={<About />} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </>
  );
};
