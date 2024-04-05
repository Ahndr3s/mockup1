import PropTypes from "prop-types";
import { useState } from "react";
import '../pages/CoursesStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft  } from '@fortawesome/free-solid-svg-icons';

export const Slider = ({ cards }) => {
  const [card, setCard] = useState(0);

  let onPreviousClick = () => {
    let index = (card === 0) ? cards.length - 1 : card - 1;
    setCard(index);
  };

  let onNextClick = () => {
    let index = (card === cards.length - 1) ? 0 : card + 1;
    setCard(index);
  };
  return (
    <>
        <div className="slider-container">        
            <FontAwesomeIcon className='slider-btn' icon={faCircleChevronLeft} onClick={onPreviousClick}/>
            <div className="slide">{cards[card]}</div>
            <FontAwesomeIcon className='slider-btn' icon={faCircleChevronRight} onClick={onNextClick}/>
        </div>
    </>
  
  );
};

Slider.propTypes = {
    cards: PropTypes.any,
  };
