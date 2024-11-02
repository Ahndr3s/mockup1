import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import "./ContactStyles.css";
import { InstMatrix } from "../components/InstMatrix";
export const Contact = () => {
  const instagramUrl = "https://www.instagram.com/iatutores/";
  const facebookUrl = "https://www.facebook.com/iatutores?mibextid=ZbWKwL";
  const youtubekUrl = "https://www.youtube.com/@IATutores";

  return (
    <>
      <h1 className="page-title">Contáctanos</h1>
      <InstMatrix/>

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
    </>
  );
};
