
import { SimpleForm } from '../components/SimpleForm'

export const Login = ( ) => {
  return (
    <div className='login-form'>
      <h1 className='page-title'>Iniciar Sesión</h1>
      <SimpleForm type={1} />
    </div>
  )
}
