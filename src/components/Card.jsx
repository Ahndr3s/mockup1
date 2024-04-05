import PropTypes from "prop-types";
// import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faClock,
  faCalendar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export const Card = (props) => {
  let cardOption;
  const navigate = useNavigate();
  const imgUrl = `../../assets/${props.img}.png`

  const handleClickCourse = () => {
    navigate("/coursePage", {
      replace: true,
    });
  };
  
  const handleCLickServ = () => {
    navigate(props.pageRoute, {
      replace: true,
    });
  }
  
  const handleCLickTeamMember = (id) => {
    navigate(`/teamMember/${id}`, {
      replace: true,
    });
  }

  switch (props.type) {
    case 1:
      cardOption = //SERVICE CARD
        (
          <div className="serv-card">
            <img className="serv-card-img" src={imgUrl} />
            <br />
            <h2>{props.title}</h2>

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

    case 2:
      cardOption = //COURSE CARD
        (
          <div className="course-card">
            <img className="course-card-img" src={imgUrl} />
            <div className="card-info">
              <h5 className="course-mod">{props.modality}</h5>
              <h3>{props.title}</h3>
              <div className="course-data">
                <p>
                  <FontAwesomeIcon icon={faClock} /> {props.Coursedata[0]}
                </p>
                <p>
                  <FontAwesomeIcon icon={faCalendar} /> {props.Coursedata[1]}
                </p>
                <p>
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
            </div>
          </div>
        );
      break;

    case 3:
      cardOption = //TEAM CARD
        (
          <div className="team-card">
            <h2>{props.title}</h2>
            <div className="team-card-body">
              <img className="team-card-img" src={imgUrl} />
              <div className="team-data">
                <p className="p-resume">{props.resume}</p>
                <button className="serv-btn" onClick={() => handleCLickTeamMember(props.id)}>
                  {props.btntxt}
                </button>
              </div>
            </div>
          </div>
        );
      break;

    default:
      break;
  }

  return <>{cardOption}</>;
};

Card.defaultProps = {
  title: "Guest",
  img: 'logo',
  info: [
    "No data to iterate 1",
    "No data to iterate 2",
    "No data to iterate 3",
  ],
  resume: `No information provided`,
  modality: "Online y Presencial",
  Coursedata: [],
  pageRoute:'/servePage'
};

Card.propTypes = {
  id: PropTypes.string,
  type: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string,
  modality: PropTypes.string,
  info: PropTypes.array,
  btntxt: PropTypes.string,
  resume: PropTypes.string,
  Coursedata: PropTypes.array,
  // no: PropTypes.number,
  pageRoute: PropTypes.string
};
