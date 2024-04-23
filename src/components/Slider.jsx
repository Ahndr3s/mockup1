import PropTypes from "prop-types";
import { useState, useRef} from "react";
import '../pages/CoursesStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft  } from '@fortawesome/free-solid-svg-icons';

export const Slider = ({ cards }) => {
  const [card, setCard] = useState(0);
  const sliderRef = useRef(null);
  let index

  let onPreviousClick = () => {
    index = (card === 0) ? cards.length - 1 : card - 1;
    setCard(index);
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };

  let onNextClick = () => {
    index = (card === cards.length - 1) ? 0 : card + 1;
    setCard(index);
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
  };
  return (
    <>
        <div className="slider-container" ref={sliderRef} style={{ display: 'flex', overflow: 'hidden', width: '100%' }}>        
            <FontAwesomeIcon className='slider-btn' icon={faCircleChevronLeft} onClick={onPreviousClick}/>
              <div key={index} className="slide" style={{ display: 'flex', transition: 'scroll 0.3s ease' }}>
                {cards}
              </div>
            <FontAwesomeIcon className='slider-btn' icon={faCircleChevronRight} onClick={onNextClick}/>
        </div>
    </>
  
  );
};

Slider.propTypes = {
    cards: PropTypes.any,
  };
