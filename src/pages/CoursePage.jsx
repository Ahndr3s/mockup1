import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useVideoStore } from "../hooks/useVideoStore";
import { useCourseStore } from "../hooks/useCourseStore";
import { getConsultorById } from "../helpers/getConsultorById";
import {
  faClock,
  faCalendar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "../pages/CoursePageStyles.css";

export const CoursePage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { type } = location.state || {};
  const { videos } = useVideoStore();
  const { courses } = useCourseStore();
  let content;

  if (type === 2) {
    content = getConsultorById(type, courses, id);
  } else if (type === 4) {
    content = getConsultorById(type, videos, id);
  }
  // console.dir(content);
  return (
    <>
      <div className="course-wrapper">
        <div
          className="course-header"
          style={{ backgroundImage: `url(${content.img})` }}
        >
          <div className="course-info">
            <h1 className="page-title">{content.name}</h1>
            <div className="course-data">
              <p className="c-details">
                <FontAwesomeIcon icon={faClock} /> {content.Coursedata[0]}
              </p>
              <p className="c-details">
                <FontAwesomeIcon icon={faCalendar} /> {content.Coursedata[1]}
              </p>
              <p className="c-details">
                <FontAwesomeIcon icon={faLocationDot} /> {content.Coursedata[2]}
              </p>
            </div>
            <div className="c-info">
              <p className="c-resume">{content.resume}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
