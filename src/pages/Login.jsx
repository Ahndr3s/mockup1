
import { NavLink } from "react-router-dom";
import { SimpleForm } from '../components/SimpleForm'
import logo from "../../assets/logo.png";

export const Login = ( ) => {
  return (
    <div className='login-form'>
      <NavLink to={"/home"} style={{ display:'grid', justifyContent:'space-around'}}>
            <img className="logo-img" src={logo} alt="" />
          </NavLink>
      <h1 className='page-title'>Iniciar Sesión</h1>
      <SimpleForm type={1} />
    </div>
  )
}
