import { useState } from "react";
export const useForm = (initialForm = {}) => {

const [formState, setformState] = useState(initialForm)


  const onInputChange = ({ target }) => {
    const { value, name } = target;
    setformState({ ...formState, [name]: value });
  };

  const onSubmitForm = (target) => {
    target.preventDefault()
    setformState({initialForm})
    console.log('live froever')
  }

  return {
    ...formState,formState, onInputChange, onSubmitForm
  };
};
