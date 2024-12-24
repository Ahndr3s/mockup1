import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./ContactStyles.css";

export const Contact = () => {
  const instagramUrl = "https://www.instagram.com/iatutores/";
  const facebookUrl = "https://www.facebook.com/iatutores?mibextid=ZbWKwL";
  const youtubekUrl = "https://www.youtube.com/@IATutores";

  return (
    <>
      <h1 className="page-title">Contáctanos</h1>
      <div className="socials-container">
        <h2 className="socials-subtitle">Únete a la comunidad</h2>
        <div className="socials-icons">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>
          <a href={youtubekUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="3x" />
          </a>
        </div>
      </div>

      <h2>Casos de éxito</h2>
      <div className="testimony-container">
        <div className="testimony-res">
          <img
            className="res-img"
            src="https://res.cloudinary.com/dfpbzr7n0/image/upload/v1732864871/gzenotjwhjb8cssi0qrx.png"
          />
          <div className="res-header">
            <p className="res-title">Conoce a Gaby Lemus, estudiante de Medicina</p>
            <p className="res-date">Septiembre 2024</p>
            <p className="res-txt">
              Gaby Lemus, aficionada del diseño UX/UI, ha revolucionado su
              enfoque creativo tras completar nuestro curso de automatización en
              la vida diaria.
            </p>
          </div>
        </div>
        <div className="testimony-quote">
          <p className="t-quote">
            "Una sesión productiva y de aprendizaje; los agentes educativos
            necesitamos actualizarnos en el uso de la tecnología."
          </p>
          <div className="quoted">
            <p className="quoted-txt">Gaby Lemus // México</p>
            <img
              className="quoted-img"
              src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t39.30808-6/470234875_8165233976911167_4241629748937989963_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EQOTKJ9S70MQ7kNvgE_eI_h&_nc_oc=Adh3-jexupwMfRHPtfNKHCaR6AaxzhGy0Is2p3z7A8ExEOr27mBu4bHp76k8KABNx-abpXMKnUZt2u8jW90uXOl2&_nc_zt=23&_nc_ht=scontent.fgdl3-1.fna&_nc_gid=A-seYSDxnS0AiRMdS4phYM_&oh=00_AYCX64DnlPQtMB8BUS9H9ORMGpdZgCzXD77uFIB0mwJ4DQ&oe=6770FBF6"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
