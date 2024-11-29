import "./AboutStyles.css";
import { ContentList } from "../components/ContentList";

export const About = () => {
  return (
    <>
      <h1 className="page-title">Sobre Nosotros</h1>
      <div className="text-info">
        <p className="p-info">
          En IA Tutores, reinventamos el camino hacia la excelencia educativa.
          Como pioneros en el coaching educativo, nuestra misión trasciende la
          enseñanza tradicional; nos dedicamos a encender la chispa del
          crecimiento tanto académico como personal en maestros y estudiantes
          por igual.
        </p>
      </div>

      <div className="team-container" id="team-container">
        <h3 className="subtitle">Nuestro equipo</h3>
        <p className="txt-team">
          Estamos encantados de presentar al equipo de profesionales dedicados a
          redefinir su experiencia en educacion
        </p>
        <ContentList contentType='3'/>        
        
      </div>
    </>
  );
};
