import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import "../pages/CoursesStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "./Card";

export const Slider = ({ type, cards }) => {
  const [card, setCard] = useState(0);
  const sliderRef = useRef(null);
  let index;
  let sliderOption;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Configurar un temporizador que cambia la diapositiva cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % cards.length);
    }, 2000);
    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [cards.length]);

  // Función para cambiar a una diapositiva específica
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  let onPreviousClick = () => {
    index = card === 0 ? cards.length - 1 : card - 1;
    setCard(index);
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };

  let onNextClick = () => {
    index = card === cards.length - 1 ? 0 : card + 1;
    setCard(index);
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
  };

  // NORMAL SLIDER
  if (type === 1) {
    sliderOption = (
      <div className="slider-container">
        <FontAwesomeIcon
          className="slider-btn"
          icon={faCircleChevronLeft}
          onClick={onPreviousClick}
        />
        <div ref={sliderRef} key={index} className="slide">
          {/* {cards} */}
          {cards.map((card, index) => (
              <Card
                id={card.id}
                key={`t1${index}`}
                type={Number(card.type)}
                title={card.name}
                btntxt={card.btntxt}
                Coursedata={card.Coursedata}
                info={card.info}
                img={card.img}
                user={card.user}

              />
          ))}
        </div>
        <FontAwesomeIcon
          className="slider-btn"
          icon={faCircleChevronRight}
          onClick={onNextClick}
        />
      </div>
    );     
  } // AUTO SLIDER
  else if (type === 2) {
    sliderOption = (
      <div className="slider">
        <div className="slides">
          {cards.map((card, index) => (
            <div
              key={`Sidet2${index}`}
              className={`slideT2 ${index === currentSlide ? "active" : ""}`}
            >
              <Card
                id={card.id}
                key={`t2${index}`}
                type={Number(card.type)}
                title={card.name}
                btntxt={card.btntxt}
                Coursedata={card.Coursedata}
                info={card.info}
                img={card.img}
                user={card.user}
              />
            </div>
          ))}
        </div>

         {/* Puntos de navegación */}
         <div className="dots">
          {cards.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <style>{`
          .slides {
            display: flex;
            transition: transform 0.5s ease-in-out;
            transform: translateX(-${currentSlide * 100}%);
        }
        `}</style>
      </div>
    );
  } //INST IMAGE SLIDER
  else if (type === 3) {
    sliderOption = (
      <div className="slider-container">
        <FontAwesomeIcon
          className="slider-btn"
          icon={faCircleChevronLeft}
          onClick={onPreviousClick}
        />
        <div ref={sliderRef} key={index} className="slide">
          {cards}
        </div>
        <FontAwesomeIcon
          className="slider-btn"
          icon={faCircleChevronRight}
          onClick={onNextClick}
        />
      </div>
    );
  }

  return <>{sliderOption}</>;
};

Slider.propTypes = {
  cards: PropTypes.any,
  type: PropTypes.number,
};
