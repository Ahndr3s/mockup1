import { SimpleForm } from '../components/SimpleForm'
import './HomeStyles.css'

export const Home = () => {
  return (
    <>
      <div className='titles-container'>
       <h1 className='titles'>AITUTORES</h1>
       <p className='titles'>Some slogan here</p>
      </div>

      
      <SimpleForm/>
      
    </>
  )
}
