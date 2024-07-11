import { forwardRef, useEffect, useState } from "react";
import "./ResourceDesignStyles.css";
import PropTypes from "prop-types";


export const ResourceDesign = forwardRef((props, ref) => {
  const lobe1 = `../../assets/lobe1.png`;
  const lobe2 = `../../assets/lobe2.png`;
  const lobe3 = `../../assets/lobe3.png`;
  const lobe4 = `../../assets/lobe4.png`;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [visibleTitle1, setVisibleTitle1] = useState(null);
  const [visibleTitle2, setVisibleTitle2] = useState(null);
  const [visibleTitle3, setVisibleTitle3] = useState(null);
  const [visibleTitle4, setVisibleTitle4] = useState(null);

  const handleClick1 = (title) => {
    setVisibleTitle1(visibleTitle1 === title ? null : title);
  };
  const handleClick2 = (title) => {
    setVisibleTitle2(visibleTitle2 === title ? null : title);
  };
  const handleClick3 = (title) => {
    setVisibleTitle3(visibleTitle3 === title ? null : title);
  };
  const handleClick4 = (title) => {
    setVisibleTitle4(visibleTitle4 === title ? null : title);
  };

  return (
    <>
      <div className="serv-title" ref={ref}>
        <h1 className="titles">Diseño de Recursos Educativos</h1>
      </div>

      <div className="home-txt">
        <p className="home-p">
          En este espacio, convergen dos pilares fundamentales: el diseño
          centrado en el estudiante y la integración de la inteligencia
          artificial como herramienta facilitadora del aprendizaje. Nos
          distinguimos por su enfoque colaborativo, donde educadores y expertos
          en IA trabajan en conjunto para crear recursos educativos efectivos y
          adaptativos.
        </p>
        <p className="home-p">
          Nuestro enfoque se basa en la comprensión profunda de las necesidades
          y estilos de aprendizaje de los estudiantes, así como en la aplicación
          de metodologías docentes innovadoras. Utilizamos técnicas de IA para
          analizar datos y retroalimentación en tiempo real, lo que nos permite
          ajustar continuamente nuestros recursos educativos para maximizar el
          impacto del aprendizaje.
        </p>

        <div className="brain">
          <h2 className="subtitle">Modelo de Diseño</h2>
          <hr />
          <div className="superior-lobes">
            {/* <div className="high-lobe" style={{ background: `url(${lobe1}), linear-gradient(90deg, #f82f5c, #f66c49, #650577)` }}> */}
            <div
              className="high-lobe"
              onClick={() => handleClick1("Exploración y Comprensión")}
            >
              <img className="high-lobe" src={lobe4}></img>
              {visibleTitle1 === "Exploración y Comprensión" && (
                <div className="mod-title">Exploración y Comprensión</div>
              )}
            </div>
            {/* <div className="high-r-lobe" style={{ background: `url(${lobe2}), linear-gradient(90deg, #650577, #b3d9d7, #87e0f7)` }}>               */}
            <div
              className="high-r-lobe"
              onClick={() => handleClick2("Colaboración y Co-Creación")}
            >
              <img className="high-r-lobe" src={lobe3}></img>
              {visibleTitle2 === "Colaboración y Co-Creación" && (
                <div className="mod-title">Colaboración y Co-Creación</div>
              )}
            </div>
          </div>

          <div className="inferior-lobes">
            {/* <div className="low-lobe" style={{ background: `url(${lobe3}), linear-gradient(90deg, #e595f9, #d51a74, #650577)` }}> */}
            <div
              className="low-lobe"
              onClick={() => handleClick3("Implementación y Refinamiento")}
            >
              <img className="low-lobe" src={lobe2}></img>
              {visibleTitle3 === "Implementación y Refinamiento" && (
                <div className="mod-title">Implementación y Refinamiento</div>
              )}
            </div>
            {/* <div className="low-r-lobe" style={{ background: `url(${lobe4}), linear-gradient(90deg, #650577, #e31de0, #5760a3)` }}> */}
            <div className="low-r-lobe">
              <img
                className="low-r-lobe"
                src={lobe1}
                onClick={() => handleClick4("Adaptación y Maximización")}
              ></img>
              {visibleTitle4 === "Adaptación y Maximización" && (
                <div className="mod-title">Adaptación y Maximización</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

ResourceDesign.displayName = "ResourceDesign";
ResourceDesign.propTypes = {
  ref: PropTypes.string,
};
