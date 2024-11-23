import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/Navbar";
import { Home } from "../Home";
import { Courses } from "../Courses";
import { About } from "../About";
import { Blog } from "../Blog";
import { Profile } from "../Profile";
import { CoursePage } from "../CoursePage";
import { ServPage } from "../ServPage";
import { ResourceDesign } from "../ResourceDesign";
import { TeamMember } from "../../components/TeamMember";
import { SearchPage } from "../SearchPage";
import { Contact } from "../Contact";

export const PublicRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />        
        <Route path="servPage" element={<ServPage />} />
        <Route path="resDes" element={<ResourceDesign />} />
        <Route path="contact" element={<Contact />} />
        <Route path="SearchPage" element={<SearchPage />} />  

        <Route path="teamMember/:id" element={<TeamMember />} />     
        <Route path="coursePage/:id" element={<CoursePage />} />        
        <Route path="/" element={<Navigate to={"home"} />} />
      </Routes>
    </>
  );
};
