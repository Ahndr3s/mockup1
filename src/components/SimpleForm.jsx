import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { useForm } from "../hooks/useForm";
import { useAuthStore } from "../hooks/useAuthStore";
import { useCourseStore } from "../hooks/useCourseStore";


// FORM FIELDS DEFINITION
const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

const signInFormFields = {
  signinName: "",
  signInEmail: "",
  signInPassword: "",
  signInPassword2: "",
};

const modalCourseFields = (info) => ({
  courseName: info?.title || "",
  // courseMod: info?.modality || "",
  courseData: info?.Coursedata?.join(", ") || "",
  courseRes: info?.resume || "",
  courseInfo: info?.info?.join(", ") || "",
});

const modalVideoFields = {
  videoName: "",
  videoUrl: "",
};

export const SimpleForm = (props) => {
  let formOption;
  const navigate = useNavigate();
  const { startLogin, startSignIn, errorMessage } = useAuthStore();
  const { startSavingCourse } = useCourseStore();
  
  const initialCourseFields = modalCourseFields(props.info);

  // const [formSubmited, setformSubmited] = useState(false)
 
  // GET FORM FILDS VALUES
  const {
    loginEmail,
    loginPassword,
    onInputChange: onLoginInputChange,
  } = useForm(loginFormFields);

  const {
    signInName,
    signInEmail,
    signInPassword,
    signInPassword2,
    onInputChange: onSignInInputChange,
  } = useForm(signInFormFields);

  const {
    courseName,
    // courseMod,
    courseData,
    courseInfo,
    courseRes,
    onInputChange: onModalCourseInputChange,
    setFormState,
  } = useForm(initialCourseFields);

  const {
    videoName,
    videoUrl,
    onInputChange: onModalVideoInputChange,
  } = useForm(modalVideoFields);


  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const success = await startLogin({
      email: loginEmail,
      password: loginPassword,
    });
    if (success)
      navigate("/home", {
        replace: true,
      });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (signInPassword !== signInPassword2) {
      Swal.fire("Error en registro", "Contraseñas no coinciden", "error");
      return;
    }
    startSignIn({
      name: signInName,
      email: signInEmail,
      password: signInPassword,
    });
    navigate("/home", {
      replace: true,
    });
  };

  const handleModalCourseSubmit = (e) => {
    e.preventDefault();
    let modaldata = {
      type: '2',
      name: courseName,
      btntxt: 'Inscribirse',
      Coursedata: courseData.split(", "),        
      // courseMod: courseMod,
      resume: courseRes,
      info: courseInfo.split(", "),
      user: {
        name: 'Annie Tivadar',
        uuid: '123',
    }
    }
      
      if (props.info && props.info.id) {
        modaldata.id = props.info.id;
        // console.log(props.info.id)
      }

      startSavingCourse(modaldata)
      props.close()
  };

  const handleModalVideoSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error al autenticar", errorMessage, "error");
    }
  }, [errorMessage]);

  useEffect(() => {
    const updatedFields = modalCourseFields(props.info);
    setFormState(updatedFields);
  }, [props.info, setFormState]);

  switch (props.type) {
    // LOGIN FORM
    case 1:
      formOption = (
        <form className="simple-form" onSubmit={handleLoginSubmit}>
          <h1 className="page-title">Iniciar Sesión</h1>
          <input
            type="email"
            name="loginEmail"
            placeholder="correo"
            value={loginEmail}
            onChange={onLoginInputChange}
          />
          <input
            type="password"
            name="loginPassword"
            placeholder="password"
            value={loginPassword}
            onChange={onLoginInputChange}
          />

          <input className="serv-btn" type="submit" value="Enviar" />
        </form>
      );
      break;

    // SIGN IN FORM
    case 2:
      formOption = (
        <form className="simple-form" onSubmit={handleSignInSubmit}>
          <h1 className="page-title">Registrarse</h1>
          <input
            type="text"
            name="signInName"
            placeholder="Nombre"
            value={signInName}
            onChange={onSignInInputChange}
          />
          <input
            type="email"
            name="signInEmail"
            placeholder="correo"
            value={signInEmail}
            onChange={onSignInInputChange}
          />
          <input
            type="password"
            name="signInPassword"
            placeholder="password"
            value={signInPassword}
            onChange={onSignInInputChange}
          />
          <input
            type="password"
            name="signInPassword2"
            placeholder="Please repeat the password"
            value={signInPassword2}
            onChange={onSignInInputChange}
          />

          <input className="serv-btn" type="submit" value="Enviar" />
        </form>
      );
      break;

    // CONTACT FORM
    case 3:
      formOption = (
        <form className="simple-form">
          <input
            type="text"
            name="userName"
            className="userName"
            placeholder="Nombre"
            autoComplete="off"
          />
          <input
            type="text"
            name="email"
            className="email"
            placeholder="Correo"
            autoComplete="off"
          />
          <input
            type="text"
            name="phone"
            className="phone"
            placeholder="Telefono"
            autoComplete="off"
          />
          <label className="text-desc">
            Por favor, déjanos tu pregunta o comentario.
          </label>
          <textarea
            name="description"
            rows={4}
            cols={40}
            placeholder="Comentario/Duda"
            // value={description}
            // onChange={(e) => {setdescription(e.target.value)}}
          ></textarea>
          <button className="serv-btn" type="button">
            Enviar
          </button>
        </form>
      );
      break;

    // COURSE MODAL FORM
    case 4:
      formOption = (
        <form className="simple-form" onSubmit={handleModalCourseSubmit}>
          <input
            type="text"
            name="courseName"
            className="userName"
            placeholder="Nombre"
            autoComplete="off"
            value={courseName}
            // value={props.info.title}
            onChange={onModalCourseInputChange}
          />
          {/* <div className="select-container">
            <label onSelect={onModalCourseInputChange} value={courseMod}>
              Modalidad:
            </label>
            <select id="mods" name="mods">
              <option value="Online">Online</option>
              <option value="Presencial">Presencial</option>
              <option value="Online y Presencial">Online y Presencial</option>
            </select>
          </div> */}
          <textarea
            name="courseData"
            rows={4}
            cols={40}
            placeholder="Hora, Fecha, Lugar (Separar por comas y espacios)"
            value={courseData}
            onChange={onModalCourseInputChange}
          ></textarea>
          <textarea
            name="courseInfo"
            rows={4}
            cols={40}
            placeholder="Informacion sobre el curso"
            value={courseInfo}
            onChange={onModalCourseInputChange}
          ></textarea>
          <textarea
            name="courseRes"
            rows={4}
            cols={40}
            placeholder="Descripción del curso"
            value={courseRes}
            onChange={onModalCourseInputChange}
          ></textarea>
          <div className="btn-container">
            <input type="submit" className='serv-btn' value="Guardar" />            
          </div>
        </form>        
      );
      break;

    // VIDEOBLOG MODAL FORM
    case 5:
      formOption = (
        <form className="simple-form" onSubmit={handleModalVideoSubmit}>
          <input
            type="text"
            name="videoName"
            className="userName"
            placeholder="Titulo"
            autoComplete="off"
            value={videoName}
            onChange={onModalVideoInputChange}
          />
          <input
            type="url"
            name="videoUrl"
            className="userName"
            placeholder="Url de Video"
            autoComplete="off"
            value={videoUrl}
            onChange={onModalVideoInputChange}
          />
        </form>
      );
      break;

    default:
      console.log("Wrong form Type");
      break;
  }
  return <>{formOption}</>;
};

SimpleForm.propTypes = {
  type: PropTypes.any,
  setloggedIn: PropTypes.any,
  close: PropTypes.any,
  info: PropTypes.any,
  flag: PropTypes.number
};
