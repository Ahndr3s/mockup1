import logo from "../assets/logo.png";
import PropTypes from "prop-types";

export const TeamCard = (props) => {
  return (
    <>
      <div className="team-card">
        <h2>{props.name}</h2>
        <div className="team-card-body">
          <img className="card-img" src={props.img} />
          <ul>
              <li>Welcome</li>        
              <li>Welcome</li>        
              <li>Welcome</li>              
          </ul>
          {/* <button></button> */}
        </div>
      </div>
    </>
  );
};

TeamCard.defaultProps = {
  name: "Guest",
  img: logo,
};

TeamCard.propTypes = {
  teamCard: PropTypes.any
};
