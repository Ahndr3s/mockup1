import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { useForm } from "../hooks/useForm";
import { useAuthStore } from "../hooks/useAuthStore";
import { useCourseStore } from "../hooks/useCourseStore";
import { useVideoStore } from "../hooks/useVideoStore";
import iatApi from "../api/iatApi";
import { useSelector } from "react-redux";
// import getEnvVariables from "../helpers/getEnvVariables";

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
  courseImage: info?.img || "",
});

const modalVideoFields = (info) => ({
  videoName: info?.title || "",
  videoUrl: info?.url || "",
  videoImage: info?.img || "",
});

export const SimpleForm = (props) => {
  let formOption;
  const navigate = useNavigate();
  const { startLogin, startSignIn, errorMessage } = useAuthStore();
  const { startSavingCourse } = useCourseStore();
  const { startSavingVideo } = useVideoStore();
  const { user } = useSelector((state) => state.auth);

  //---------------------------------------
  // const { UPLOADPRESET, CLOUDNAME } = getEnvVariables();
  //---------------------------------------

  // Inicializar el estado del formulario con base en el tipo de formulario (course o video)
  const initialFields =
    props.type === 4
      ? modalCourseFields(props.info)
      : modalVideoFields(props.info);

  const { formState, onInputChange, setFormState } = useForm(initialFields);

  const handleImageChange = async (e, type, currentImage = "", ContentOwner) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "fz466asa");

    try {
      // Si hay una imagen actual, elimínala llamando al backend
      if (currentImage) {
        // Obtener el public_id de la URL de la imagen
        const publicId = currentImage.split("/").pop().split(".")[0];

        const collection = props.type === 4 ? "courses" : "videos";
        const deleteResponse = await iatApi.delete(
          `/api/uploads/${collection}/${publicId}`
        );

        // Axios devuelve un código de estado para comprobar si la respuesta es exitosa
        if (deleteResponse.status !== 200) {
          throw new Error("Error deleting the current image");
        }
      }

      // Subir la nueva imagen
      if (ContentOwner === user.uuid) {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dfpbzr7n0/image/upload`,
          {
            method: "POST",
            body: data,
          }
        );
        const file = await response.json();

        setFormState((prevState) => ({
          ...prevState,
          [type === "course" ? "courseImage" : "videoImage"]: file.secure_url,
        }));
      }
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

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

  const handleModalCourseSubmit = async (e) => {
    e.preventDefault();

    let modalCourseData = {
      type: "2",
      name: formState.courseName,
      btntxt: "Inscribirse",
      Coursedata: formState.courseData.split(", "),
      resume: formState.courseRes,
      info: formState.courseInfo.split(", "),
      user: {
        name: "Alberto Moreno",
        uuid: "123",
      },
      img: formState.courseImage,
    };

    if (props.info && props.info.id) {
      modalCourseData.id = props.info.id;
    }

    startSavingCourse(modalCourseData);
    setFormState(modalCourseFields(null));
    props.close();
  };

  const handleModalVideoSubmit = async (e) => {
    e.preventDefault();
    let modalVideoData = {
      type: "4",
      name: formState.videoName,
      url: formState.videoUrl,
      user: {
        name: "Alberto Moreno",
        uuid: "123",
      },
      img: formState.videoImage,
    };

    if (props.info && props.info.id) {
      modalVideoData.id = props.info.id;
    }
    // console.log(modaldata)
    startSavingVideo(modalVideoData);
    setFormState(modalVideoFields(null));
    // setFormState(modalVideoFields({}));
    props.close();
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error al autenticar", errorMessage, "error");
    }
  }, [errorMessage]);

  useEffect(() => {
    if (props.type === 4) {
      const updatedCourseFields = modalCourseFields(props.info || {});
      setFormState(updatedCourseFields);
    } else if (props.type === 5) {
      const updatedVideoFields = modalVideoFields(props.info || {});
      setFormState(updatedVideoFields);
    }
  }, [props.info, props.type, setFormState]);

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
            value={formState.courseName}
            onChange={onInputChange}
          />
          <textarea
            name="courseData"
            rows={4}
            cols={40}
            placeholder="Hora, Fecha, Lugar (Separar por comas y espacios)"
            value={formState.courseData}
            onChange={onInputChange}
          ></textarea>
          <textarea
            name="courseInfo"
            rows={4}
            cols={40}
            placeholder="Informacion sobre el curso"
            value={formState.courseInfo}
            onChange={onInputChange}
          ></textarea>
          <textarea
            name="courseRes"
            rows={4}
            cols={40}
            placeholder="Descripción del curso"
            value={formState.courseRes}
            onChange={onInputChange}
          ></textarea>

          <label htmlFor={formState.courseImage}>Elige una imagen:</label>
          <input
            type="file"
            className="userName"
            id="courseImage"
            name="courseImage"
            accept="image/*"
            onChange={(e) =>
              // console.log(props.info)
              // handleImageChange(e, "course", formState.courseImage, props.info.user._id)
              handleImageChange(e, "course", formState.courseImage, props.info.user.uuid)
            }
          />
          <img
            style={{ height: "250px", width: "250px" }}
            src={formState.courseImage}
            alt=""
          />
          <div className="btn-container">
            <input type="submit" className="serv-btn" value="Guardar" />
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
            value={formState.videoName}
            onChange={onInputChange}
          />
          <input
            type="url"
            name="videoUrl"
            className="userName"
            placeholder="Url de Video"
            autoComplete="off"
            value={formState.videoUrl}
            onChange={onInputChange}
          />
          <label htmlFor="videoImage">Elige una imagen:</label>
          <input
            type="file"
            id="videoImage"
            className="userName"
            name="videoImage"
            accept="image/*"
            onChange={(e) =>
              handleImageChange(e, "video", formState.videoImage, props.info.user._id)
              // handleImageChange(e,  console.log(props.info))
            }
          />

          <img
            style={{ height: "250px", width: "250px" }}
            src={formState.videoImage}
            alt=""
          />
          <div className="btn-container">
            <input type="submit" className="serv-btn" value="Guardar" />
          </div>
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
  flag: PropTypes.number,
};
