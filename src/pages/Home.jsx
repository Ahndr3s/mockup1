import { useEffect, useRef } from "react";
import { Card } from "../components/Card";
import { ResourceDesign } from "./ResourceDesign";
import { ServPage } from "./ServPage";
import "./HomeStyles.css";
import "./ResourceDesignStyles.css";
import "./ServPageStyle.css";

export const Home = () => {
  
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="titles-container">
        <h1 className="titles">Bienvenido a <p className="typing">IA TUTORES</p></h1>
        <p className="titles">
          En IA tutores, reinventamos el camino hacia la excelencia educativa.
        </p>
      </div>

      <div className="home-txt">
        <h2 className="home-title">Conoce a IA Tutores</h2>
        <p className="home-p">
          Somos IA tutores, una empresa dedicada al coaching educativo. Nuestro
          compromiso es brindar un servicio de calidad que potencie el
          desarrollo académico y personal de maestros y estudiantes.
        </p>

        <p className="home-p">
          Con un equipo de profesionales altamente capacitados, nos esforzamos
          por ofrecer un acompañamiento integral que impulse el éxito y el
          crecimiento de cada uno de nuestros clientes. En IA tutores, nos
          enorgullecemos de ser parte del camino hacia el logro de metas y la
          excelencia educativa.
        </p>

        <p className="home-p">
          En IA Tutores, más que una empresa, somos una comunidad dedicada al
          triunfo educativo.
        </p>
      </div>

      <div className="serv-cards">        
        <Card
          type={1}
          title="Consultoría en Gestión Escolar: Estrategias para el Éxito"
          resume="Eleva tu institución con nuestra consultoría especializada en gestión escolar. Aprende y aplica estrategias efectivas que no solo mejorarán tus proyectos escolares, sino que también los llevarán a un nuevo nivel de excelencia y eficiencia."
          btntxt={`Ver Más`}
          pageRoute={'/servPage'}
          ref={targetRef1}
          />
        <Card
          type={1}
          title="Diseño de Recursos Educativos: Innovación a tu Alcance"
          resume="Descubre nuestro extenso catálogo de recursos educativos, cada uno diseñado para enriquecer tu práctica docente y administrativa"
          info={['Planeaciones y Proyectos Escolares de Mejora Continua', 'Material Administrativo Eficiente']}
          btntxt={`Ver Más`}
          pageRoute={'/resDes'}
          ref={targetRef2}
        />
        <Card
          type={1}
          title="Talleres y Cursos: de Aprendizaje a tu Medida"
          resume="En IA Tutores, transformamos la educación con una oferta diversa de talleres y cursos diseñados para satisfacer tus necesidades específicas. Ya sea online o presenciales, cada sesión es una aventura hacia el conocimiento:"
          info={['Uso de IA en la docencia','Asesorías de Acompañamiento para la Promoción Horizontal','Robótica Inicial y Avanzada']}
          btntxt={`Ver Más`}
          pageRoute={'/courses'}
        />
      </div>
      <ServPage ref={targetRef1}/>
      <ResourceDesign ref={targetRef2}/>
    </>
  );
};
