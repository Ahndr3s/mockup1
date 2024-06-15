import { NavLink } from "react-router-dom";
import { SimpleForm } from "../components/SimpleForm";
import logo from "../../assets/logo.png";
import { useState } from "react";

export const Login = () => {
  const [FormScreen, setFormScreen] = useState(true);

  return (
    <div className="login-form">
      <NavLink
        to={"/home"}
        style={{ display: "grid", justifyContent: "space-around" }}
      >
        <img className="logo-img" src={logo} alt="" />
      </NavLink>

      {FormScreen ? (
        <>
          <SimpleForm type={1} />
          <button
            className="serv-btn"
            type="button"
            onClick={() => setFormScreen(!FormScreen)}
          >
            Registrarse
          </button>
        </>
      ) : (
        <>
          <SimpleForm type={2} />
          <button
            className="serv-btn"
            type="button"
            onClick={() => setFormScreen(!FormScreen)}
          >
            Iniciar Sesión
          </button>
        </>
      )}
    </div>
  );
};
