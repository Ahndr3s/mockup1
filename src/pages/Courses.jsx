import { Card } from "../components/Card";
import { Slider } from "../components/Slider";
import { CoursesList } from "../components/CoursesList";
import "./CoursesStyles.css";

export const Courses = () => {
 

  return (
    <>
      <h1 className="page-title">Cursos y Talleres</h1>

      <div className="banner">
        <h3 className="c-subtitle">Nuevos Lanzamientos</h3>
        <Slider cards={<CoursesList />} />        
        
      </div>
      <div className="categorie">
        <h4 >Categoria 1</h4>
        <hr />
        <Card type={2} title='Taller del uso Didáctico del cubo RUBIK'/>        
        
      </div>
      <div className="categorie">
        <h4>Categoria 2</h4>
        <hr />
        <Card type={2} title='Enseñanza con IA: Implementación Práctica en el Aula'  />                
      </div>
    </>
  );
};
