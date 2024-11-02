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

        <p className="p-info">
          Nuestra esencia se centra en el compromiso inquebrantable con la
          calidad y la innovación. Con un equipo de expertos apasionados y
          altamente capacitados, abordamos cada desafío como una oportunidad
          para impulsar el éxito. A través de un acompañamiento integral,
          personalizado y vanguardista, facilitamos experiencias de aprendizaje
          transformadoras que preparan a nuestros clientes no solo para alcanzar
          sus metas, sino para superarlas.
        </p>

        <p className="p-info">
          En IA Tutores, más que una empresa, somos una comunidad dedicada al
          triunfo educativo. Nos enorgullecemos de caminar junto a nuestros
          clientes en cada paso de su viaje hacia la excelencia, celebrando cada
          logro y aprendiendo de cada desafío. Porque en IA Tutores, creemos que
          la educación es el vehículo más poderoso para el cambio, y juntos,
          estamos configurando el futuro del aprendizaje.
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
