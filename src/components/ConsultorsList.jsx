import { consultors } from "../../assets/data/consultors";
import { Card } from "../components/Card";
import "../pages/AboutStyles.css";

export const ConsultorsList = () => {
  
  return (
    <>
      {consultors.map(consultor => {
       return (
      
       <Card
          id={consultor.id}
          key={consultor.id}
          type={3}
          title={consultor.name}
          img={consultor.img}
          resume={consultor.info}
          btntxt={"Cónocenos"}
        />
      )})}
    </>
  );
};
