import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faClock,
  faCalendar,
  faLocationDot,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { forwardRef, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Modal } from "./Modal";
import { useAuthStore } from "../hooks/useAuthStore";
import { onSetActiveCourse } from "../store/courseSlice/courseSlice";
import { useDispatch } from "react-redux";


export const Card = forwardRef((props, ref) => {
  let cardOption;
  const navigate = useNavigate();
  const imgUrl = `../../assets/${props.img}.png`;
  const { logged } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const [deletingmodal, setdeletingModal] = useState(false);
  const { status } = useAuthStore();
  const dispatch = useDispatch();

  // COURSE
  const handleClickCourse = () => {
    window.open("https://wa.me/message/W54JEKQVCRT7J1");
  };

  // TEAM MEMBER WINDOW
  const handleClickTeamMember = (id) => {
    navigate(`/teamMember/${id}`, {
      replace: true,
    });
  };

  // VIDEOBLOG LINK
  const handleVideoblogClick = (url) => {
    window.open(url);
  };

  // SERVICES WINDOW
  const handleClickServ = () => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(props.pageRoute, {
        replace: true,
      });
    }
  };

  // DELETE COURSE
  const handleDelete = (post) => {
    // console.log(post);
    dispatch(onSetActiveCourse(post));
    setdeletingModal(true);
  };

  // OPEN EDITION MODAL
  const openModal = (post) => {
    // console.log(post);
    dispatch(onSetActiveCourse(post));
    setModal(true);
  };

  // CLOSE EDITION MODAL
  const closeModal = () => {
    setModal(false);
    dispatch(onSetActiveCourse(null));
  };

  // OPEN EDITION MODAL
  const closeDeletingModal = () => {
    setdeletingModal(false);
    dispatch(onSetActiveCourse(null));
  };

  switch (props.type) {
    //SERVICE CARD
    case 1:
      cardOption = (
        <div className="serv-card">
          <img className="serv-card-img" src={imgUrl} />
          <br />
          <h2 className="serv-title">{props.title}</h2>
          <div className="card-info">
            <p>{props.resume}</p>
            <ul>
              {props.info.map((data) => {
                return <li key={data}>{data}</li>;
              })}
            </ul>
          </div>
          {/* <button className="serv-btn" onClick={handleClickServ}>
            {props.btntxt}
          </button> */}
          <button
            className="serv-btn"
            onClick={ handleClickServ}
            // onClick={() => alert(props.ref)}
          >
            {props.btntxt}
          </button>
        </div>
      );
      break;

    //COURSE CARD
    case 2:
      // console.log(imgUrl)
      cardOption = (
        <div className="course-card">
          <img className="course-card-img" src={props.img} />
          <div className="card-info">
            <h5 className="course-mod">{props.modality}</h5>
            <h3 className="course-title">{props.title}</h3>
            <div className="course-data">
              <p className="c-details">
                <FontAwesomeIcon icon={faClock} /> {props.Coursedata[0]}
              </p>
              <p className="c-details">
                <FontAwesomeIcon icon={faCalendar} /> {props.Coursedata[1]}
              </p>
              <p className="c-details">
                <FontAwesomeIcon icon={faLocationDot} /> {props.Coursedata[2]}
              </p>
            </div>
            <div className="c-info">
              <p className="c-resume" style={{ display: logged ? "none" : "" }}>
                {props.resume}
              </p>

              <ul className="c-list">
                {props.info.map((data) => {
                  return <li key={data}>{data}</li>;
                })}
              </ul>
            </div>
            <button className="serv-btn" onClick={handleClickCourse}>
              {props.btntxt}
            </button>
            {status === "Authenticated" && (
              <>
                <div className="admin-btns">
                  <button
                    onClick={() =>
                      openModal({ ...props, id: props.id, user: props.user })
                    }
                    className="edit-btn"
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <Modal
                    modalType={1}
                    formType={4}
                    openModal={modal}
                    info={props}
                    closeModal={closeModal}
                    flag={2}
                  >
                    Editar {props.title}
                  </Modal>
                  <button
                    onClick={() => handleDelete({ ...props, id: props.id })}
                    className="del-btn"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <Modal
                    modalType={2}
                    openModal={deletingmodal}
                    info={props}
                    closeModal={closeDeletingModal}
                  >
                    Eliminar {props.title}
                  </Modal>
                </div>
              </>
            )}
          </div>
        </div>
      );
      break;

    //TEAM CARD
    case 3:
      cardOption = (
        <div className="team-card">
          <h2 className="team-name">{props.title}</h2>
          <div className="team-card-body">
            <img className="team-card-img" src={imgUrl} />
            <div className="team-data">
              <p className="p-resume">{props.resume}</p>
              <button
                className="serv-btn"
                onClick={() => handleClickTeamMember(props.id)}
              >
                {props.btntxt}
              </button>
            </div>
          </div>
        </div>
      );
      break;

    //VIDEOBLOG BANNER CARD
    case 4:
      cardOption = (
        <div
          className="videoblog-banner-card"
          style={{ backgroundImage: `url(${imgUrl})` }}
          onClick={() => handleVideoblogClick(props.url)}
        >
          <br />
          <h2 className="serv-title">{props.title}</h2>
        </div>
      );
      break;

    //INST ALBUM CARD
    case 5:
      cardOption = (
        <div
          className="inst-album-card"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
      );
      break;

    default:
      console.log("wrong type");
      break;
  }

  return <>{cardOption}</>;
});


Card.displayName = "Card";

Card.defaultProps = {
  title: "Guest",
  img: "logo",
  info: [],
  resume: ``,
  modality: "Online y Presencial",
  Coursedata: [],
  pageRoute: "/servePage",
};

Card.propTypes = {
  id: PropTypes.string,
  type: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string,
  modality: PropTypes.string,
  info: PropTypes.array,
  btntxt: PropTypes.string,
  resume: PropTypes.any,
  Coursedata: PropTypes.array,
  pageRoute: PropTypes.string,
  url: PropTypes.string,
  ref: PropTypes.any,
  user: PropTypes.any,
};
