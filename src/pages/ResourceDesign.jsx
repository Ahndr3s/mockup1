import "./ResourceDesignStyles.css";

export const ResourceDesign = () => {
  return (
    <>
      <div className="serv-title">
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
          <h2 className="subtitle">Modelo de Diseño</h2><hr />
          <div className="superior-lobes">
            <div className="high-lobe">
              <div className="mod-title">Exploración y Comprensión</div>
            </div>
            <div className="high-r-lobe">
              <div className="mod-title">Colaboración y Co-Creación</div>
            </div>
          </div>

          <div className="inferior-lobes">
            <div className="low-lobe">
              <div className="mod-title">Implementación y Refinamiento</div>
            </div>
            <div className="low-r-lobe">
              <div className="mod-title">Adaptación y Maximización</div>
            </div>
          </div>

          
        </div>
      </div>

    </>
  );
};
