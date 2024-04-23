import PropTypes from "prop-types";
// import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faClock,
  faCalendar,
  faLocationDot,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

export const Card = (props) => {
  let cardOption;
  const navigate = useNavigate();
  const imgUrl = `../../assets/${props.img}.png`;
  // const { logout } = useContext(AuthContext);
  // const { user, logged } = useContext(AuthContext);

  const handleClickCourse = () => {
    // navigate("/coursePage", {
    //   replace: true,
    // });
    window.open("https://wa.me/message/W54JEKQVCRT7J1");
  };

  const handleCLickServ = () => {
    navigate(props.pageRoute, {
      replace: true,
    });
  };

  const handleCLickTeamMember = (id) => {
    navigate(`/teamMember/${id}`, {
      replace: true,
    });
  };

  switch (props.type) {
    //SERVICE CARD
    case 1:
      cardOption = 
        (
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
            <button className="serv-btn" onClick={handleCLickServ}>
              {props.btntxt}
            </button>
          </div>
        );
      break;

    //COURSE CARD  
    case 2:
      cardOption = 
        (
          <div className="course-card">
            <img className="course-card-img" src={imgUrl} />
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
                <p className="c-resume">{props.resume}</p>

                <ul className="c-list">
                  {props.info.map((data) => {
                    return <li key={data}>{data}</li>;
                  })}
                </ul>
              </div>
              <button className="serv-btn" onClick={handleClickCourse}>
                {props.btntxt}
              </button>
              <div className="admin-btn">
                <button className="edit-btn"><FontAwesomeIcon icon={faPenToSquare} /></button>
                <button className="del-btn"><FontAwesomeIcon icon={faTrash} /></button>
              </div>
            </div>
          </div>
        );
      break;

    //TEAM CARD
    case 3:
      cardOption = 
        (
          <div className="team-card">
            <h2 className="team-name">{props.title}</h2>
            <div className="team-card-body">
              <img className="team-card-img" src={imgUrl} />
              <div className="team-data">
                <p className="p-resume">{props.resume}</p>
                <button
                  className="serv-btn"
                  onClick={() => handleCLickTeamMember(props.id)}
                >
                  {props.btntxt}
                </button>
              </div>
            </div>
          </div>
        );
      break;

    default:
      console.log("wrong type");
      break;
  }

  return <>{cardOption}</>;
};

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
  // no: PropTypes.number,
  pageRoute: PropTypes.string,
};
