import { forwardRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./ServPageStyle.css";


export const ServPage = forwardRef((props, ref) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className="serv-title" ref={ref}>
        <h1 className="titles">Consultoría en Gestión Escolar</h1>
      </div>

      <div className="home-txt">
        <p className="home-p">
          En IATutores, fusionamos tecnología de vanguardia, como la
          Inteligencia Artificial, con métodos de educación docente probados
          para ofrecer soluciones innovadoras a instituciones educativas.
          Nuestro enfoque se centra en optimizar la gestión escolar para mejorar
          los resultados académicos y promover un entorno de aprendizaje
          efectivo.
        </p>
      </div>

      <div className="serv-list-container">
        <div className="spec-serv-container">
          <h2 className="serv-subtitle">Servicios Especializados</h2>

          <ol className="spec-serv-list">
            <li className="spec-serv">
              Implementación de tecnología avanzada en gestión escolar.
            </li>
            <li className="spec-serv">
              Consultoría en gestión escolar con enfoque pedagógico
            </li>
            <li className="spec-serv">
              Desarrollo de estrategias pedagógicas personalizadas.
            </li>
            <li className="spec-serv">
              Talleres y cursos enfocados en el uso de IA para directivos y
              docentes
            </li>
          </ol>
        </div>
        <p className="home-p">
          Como expertos en materia de educación ofrecemos un conjunto de
          servicios enfoncados a identificar necesidades y proponer soluciones
          satisfatorias e integras para cualquier problemática didáctica en su
          institución.
        </p>
        <ul className="serv-list">
          <li className="serv">
            <b>Evaluación y diagnóstico institucional</b>: Análisis exhaustivo
            del estado actual de instituciones educativas, identificando áreas
            de mejora y oportunidades de desarrollo.
          </li>
          <li className="serv">
            <b>Diseño curricular</b>: Desarrollo de planes de estudio y
            programas educativos adaptados a las necesidades y estándares
            educativos locales o internacionales.
          </li>
          <li className="serv">
            <b>Formación y capacitación docente</b>: Diseño e implementación de
            programas de formación para docentes, orientados a mejorar sus
            habilidades pedagógicas, uso de tecnología en el aula, gestión del
            aula, entre otros.
          </li>
          <li className="serv">
            <b>Desarrollo de recursos educativos</b>: Creación de materiales
            didácticos, multimedia y recursos digitales para enriquecer el
            proceso de enseñanza-aprendizaje.
          </li>
          <li className="serv">
            <b>Implementación de tecnología educativa</b>: Asesoramiento en la
            selección, implementación y uso efectivo de herramientas
            tecnológicas en el aula, como plataformas de aprendizaje en línea,
            aplicaciones educativas, etc.
          </li>
        </ul>
      </div>
    </>
  );
});

ServPage.displayName = "ServPage";

ServPage.propTypes = {
  ref: PropTypes.string,
};
