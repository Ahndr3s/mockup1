import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/Navbar";
import { Home } from "../Home";
import { Courses } from "../Courses";
import { About } from "../About";
import { Blog } from "../Blog";
import { Profile } from "../Profile";
import { MyCourses } from "../MyCourses";
import { CoursePage } from "../CoursePAge";
import { ServPage } from "../ServPage";
import { TeamMember } from "../../components/TeamMember";
import { SearchPage } from "../SearchPAge";



export const PublicRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="myCourses" element={<MyCourses />} />
        <Route path="profile" element={<Profile />} />
        <Route path="coursePage" element={<CoursePage />} />
        <Route path="servPage" element={<ServPage />} />
        <Route path="SearchPage" element={<SearchPage />} />

        <Route path="teamMember/:id" element={<TeamMember />} />        
        <Route path="/" element={<Navigate to={"home"} />} />
      </Routes>
    </>
  );
};
