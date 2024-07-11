import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { SimpleForm } from "./SimpleForm";
import { useSelector } from "react-redux";
import { useCourseStore } from "../hooks/useCourseStore";



export const Modal = ({ modalType, formType, openModal, info, closeModal, children }) => {
  const ref = useRef();
  const activeCourse = useSelector((state) => state.course.activeCourse);
  const instagramUrl = "https://www.instagram.com/iatutores/";
  const { startDeletingCourse } = useCourseStore();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  const handleDelete = () => {
    startDeletingCourse()
  }

  return (
    // <dialog className="course-dialog" ref={ref} onCancel={closeModal}>
    <dialog className="course-dialog" ref={ref} >
      <div className="dialog-header">
        <div className="header-inst-icon">
          <h3>{children}</h3>
          {!modalType && (
            <a              
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          )}
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          size="2x"
          onClick={closeModal}
          style={{ color: `#fff` }}
        />
      </div>
      {modalType === 0 && (
        <div className="instPost">
          {info.media_type === "IMAGE" && (
            <>
              <img
                className="instPost-img"
                src={info.media_url}
                alt={info.caption}
              />
              <p>{info.caption}</p>
            </>
          )}
          {info.media_type === "VIDEO" && (
            <>
              <video className="instPost-video" controls>
                <source src={info.media_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>{info.caption}</p>
            </>
          )}
          {info.media_type === "CAROUSEL_ALBUM" && (
            <>
              <img
                className="instPost-img"
                src={info.media_url}
                alt={info.caption}
              />
              <p>{info.caption}</p>
            </>
          )}
        </div>
      )}
      {modalType === 1 && (
        <SimpleForm type={formType} info={activeCourse} close={closeModal} />
      )}
      {modalType === 2 && (
        <div className="confirmDel">
          <button className="serv-btn" onClick={handleDelete} >Aceptar</button>          
        </div>
      )}
    </dialog>
  );
};

Modal.propTypes = {
  modalType: PropTypes.number,
  formType: PropTypes.number,
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node,
  info: PropTypes.object,
};
