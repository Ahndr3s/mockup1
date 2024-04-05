import { useContext, useState } from "react";
// import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthContext";

export const SimpleForm = (props) => {
  let formOption;

  const { login } = useContext(AuthContext);
  // const [email, setemail] = useState('')
  // const [password, setpassword] = useState('')
  // const [description, setdescription] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventSumbmit();
  };

  const onLogin = () => {
    login("example@gmail.com");
    navigate("/home", {
      replace: true,
    });
  };

  switch (props.type) {
    case 1:
      formOption = (
        <form className="simple-form" onSubmit={handleSubmit}>
          <label>Correo</label>
          <input
            type="email"
            name="email"
            placeholder="correo"
            // value={email}
            // onChange={(e) => {setemail(e.target.value)}}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            // value={password}
            // onChange={(e) => {setpassword(e.target.value)}}
          />

          <button type="button" onClick={onLogin}>
            Enviar
          </button>
        </form>
      );
      break;

    case 2:
      formOption = (
        <form className="simple-form">
          <label>Correo</label>
          <input
            type="email"
            name="email"
            placeholder="correo"
            // value={email}
            // onChange={(e) => {setemail(e.target.value)}}
          />
          <label>
            Escribe una breve descripción de cómo <br />
            debería ser un miembro del equipo.
          </label>
          <textarea
            name="description"
            rows={4}
            cols={40}
            placeholder="Descripcion"
            // value={description}
            // onChange={(e) => {setdescription(e.target.value)}}
          ></textarea>
          {/* <button type="submit" onSubmit={on}> */}
          {/* Enviar */}
          {/* </button> */}
        </form>
      );
      break;

    // case 3:
    //   formOption = (  
    //     <div className="search-container">
    //       <form className="search-form">
    //         <input type="text" name="search" className="search-bar" placeholder="Buscar Cualquier Cosa" autoComplete="off"/>        
    //         <button className="search-form-btn" >Buscar</button>
    //       </form>   
    //       <div className="result-container">
    //         <div className="search-res-neg">Content Not Found</div>
    //         <div className="search-res-pos">Search Result</div>
    //       </div>
    //     </div>
    //   );
    //   break;
    default:
      break;
  }
  return <>{formOption}</>;
};

SimpleForm.propTypes = {
  type: PropTypes.any,
  setloggedIn: PropTypes.any,
};
