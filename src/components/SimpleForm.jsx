import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const SimpleForm = () => {
  const { formState, onInputChange, onSubmitForm } = useForm({
    username: "",
    email: "",
    password: "",
    description: "",
  });

  const { username, email, password, description } = formState;

  useEffect(() => {
    console.log("Effect called");
  }, []);

  return (
    <>
      <form className="simple-form">
        <label>Nombre Usuario</label>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={username}
          onChange={onInputChange}
        />
        <label>Correo</label>
        <input
          type="email"
          name="email"
          placeholder="bto.mrn@gmail.com"
          value={email}
          onChange={onInputChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={onInputChange}
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
          value={description}
          onChange={onInputChange}
        ></textarea>

        <button type="submit" onSubmit={onSubmitForm}>Enviar</button>
      </form>
    </>
  );
};
