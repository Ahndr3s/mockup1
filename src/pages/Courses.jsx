import { Card } from "../components/Card";
import { Slider } from "../components/Slider";
import "./CoursesStyles.css";

export const Courses = () => {
  let cards = [
    <Card
      key={0}
      type={2}
      title="Taller del uso Didáctico del cubo RUBIK"
      btntxt="Inscribirse"
      Coursedata={['16:00 hrs', 'Sábado 8/03/2024', 'Jaime Sabines']}    
      info={['Introducción a la Cultura Rubik', 'Benefiios del uso del cubo Rubik', 'Aprendizaje Basado en Proyectos (ABP)', 'Clase Práctica y Demostración del cubo Rubik']}
      />,
      <Card
      key={1}
      type={2}
      title="Diseño y Elaboración de Planeaciones Educativas"
      btntxt="Inscribirse"
      Coursedata={['15:00 hrs', 'PROXIMAMENTE', '-']}    
      info={['Diseño Y Argumentacion de Planeación Didáctica (Curso Teórico-práctico)', 'Instrumentos de Evaluación Incluidos']}
      />,
      <Card
      key={2}
      type={2}
      title="Enseñanza con IA: Implementación Práctica en el Aula"
      btntxt="Inscribirse"
      Coursedata={['15:00 hrs', 'Viernes 1/03/2024', 'Educación Municipal de León']}
      info={['Inducción a Inteligencia Aritficial (1 Hora)', 'Herramientas de IA para la Gestón Educativa (1 Hora)', 'Aplicaciones de IA para los Alumnos (1 Hora)', 'Clase Práctica de Demostración con IA (1 Hora)']}
    />,
    <Card
      key={3}
      type={2}
      title="Automatización de Inscripciones Escolares con Microsoft Apps"
      btntxt="Inscribirse"
      Coursedata={['18:00 hrs', 'Viernes 8/03/2024', 'Zoom']}
      resume='Curso diseñado para capacitar al personal administrativo y docente en eel uso de herramietnas dfe Microsoft'
      info={['Excel', 'Power Automate', 'Forms', 'Share Point', 'Creacion de Sistema de Inscripciones Escolares Automatizado']}
    />,
  ];

  return (
    <>
      <h1 className="page-title">Cursos</h1>

      <div className="grid-banner">
        <h3>Nuevos Lanzamientos</h3>
        <Slider cards={cards} />
      </div>
      <div className="categorie">
        <h4>Categoria 1</h4>
        <hr />
        <Card type={2} title='Taller del uso Didáctico del cubo RUBIK'/>        
        {/* <Card type={2} title='Diseño y Elaboración de Planeacioes Educativas'  /> */}
      </div>
      <div className="categorie">
        <h4>Categoria 2</h4>
        <hr />
        <Card type={2} title='Enseñanza con IA: Implementación Práctica en el Aula'  />        
        {/* <Card type={2} title='Automatización de Inscripciones Escolares con Microsoft Apps'  /> */}
      </div>
    </>
  );
};
