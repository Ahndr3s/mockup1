import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../pages/TeamMemberStyles.css";
import { Navigate, useParams } from "react-router-dom";
import { getConsultorById } from "../helpers/getConsultorById";
import { useMemo } from "react";


export const TeamMember = () => {
  const {id} = useParams()
  const consultor = useMemo(() => getConsultorById(id), [id])
  
  if (!consultor) return <Navigate to={'/home'}/>
  
  return (
    <>
      <div className="wrapper">
        <div className="page-header">
          <div className="team-titles">
            <h1 className="team-name">{consultor.name}</h1>
            <h5>
              <FontAwesomeIcon icon={faEnvelope} /> {consultor.email}
            </h5>
            <h3 className="team-title">{consultor.title}</h3>
          </div>
        </div>

          <img src={`../../assets/${consultor.img}.png`} className="team-img" />
        <div className="info-container">
          <div className="team-member-info">
            {consultor.resume.map((info) => {
              return (
                <p key={info} className="team-mem-info">
                  {info}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
