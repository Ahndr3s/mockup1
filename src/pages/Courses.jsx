import { useEffect, useState } from "react";
import { useAuthStore } from "../hooks/useAuthStore";
import { Slider } from "../components/Slider";
// import { ContentList } from "../components/ContentList";
import { NewsBanner } from "../components/NewsBanner";
import { Modal } from "../components/Modal";
import "./CoursesStyles.css";
import { useCourseStore } from "../hooks/useCourseStore";

export const Courses = () => {
  const [courseModal, setcourseModal] = useState(false);
  const [videoModal, setvideoModal] = useState(false);
  const { status } = useAuthStore();
  const { courses, startLoadingCourses } = useCourseStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCreateCourse = () => {
    setcourseModal(true);
  };
  const handleCreateVideo = () => {
    setvideoModal(true);
  };

  useEffect(() => {
    startLoadingCourses();
  }, [startLoadingCourses]);

  // console.log(courses);
  return (
    <>
      <h1 className="page-title">Cursos y Talleres</h1>

      <div className="banner">
        <h3 className="c-subtitle">Nuevos Lanzamientos</h3>
        <NewsBanner />
        {status === "Authenticated" && (
          <>
            <div className="admin-btns">
              <button onClick={handleCreateCourse} className="serv-btn">
                Crear Curso
              </button>
              <Modal
                modalType={1}
                formType={4}
                openModal={courseModal}
                closeModal={() => setcourseModal(false)}
              >
                Crear Curso
              </Modal>
              <button onClick={handleCreateVideo} className="serv-btn">
                Crear VideoBlog
              </button>
              <Modal
                modalType={1}
                formType={5}
                openModal={videoModal}
                closeModal={() => setvideoModal(false)}
              >
                Crear VideoBlog
              </Modal>
            </div>
          </>
        )}
      </div>

      <div className="categorie">
        <h4>Más Populares</h4>
        {/* <Slider type={1} cards={<ContentList contentType='2'/>} />*/}
        <Slider type={1} cards={courses} />
      </div>
      <div className="categorie">
        <h4>Mejores Reseñas</h4>
        <hr />
        {/* <Slider type={1} cards={<ContentList contentType='2'/>} /> */}
        <Slider type={1} cards={courses} />
      </div>
      <div className="categorie">
        <h4>Recomendaciones para tí</h4>
        <hr />
        {/* <Slider type={1} cards={<ContentList contentType='2'/>} />*/}
        <Slider type={1} cards={courses} />
      </div>
    </>
  );
};
