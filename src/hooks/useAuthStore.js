import { useDispatch, useSelector } from "react-redux";
import iatApi from "../api/iatApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";


export const useAuthStore = () => {
    
    const { status, user, errorMessage } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const startLogin = async({email, password}) => {
        dispatch(onChecking())
        try {
            const {data} = await iatApi.post('/api/auth', {email, password})
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(onLogin({name: data.name, uuid: data.uuid}))
            return true
        } catch (error) {
            dispatch(onLogout('INCORRECT CREDENTIALS'))
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10);
            return false
        }
    }

    const startSignIn = async({name, email, password}) => {
        dispatch(onChecking())
        try {
            const {data} = await iatApi.post('/api/auth/new', {name, email, password})
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(onLogin({name: data.name, uuid: data.uuid}))
        } catch (error) {            
            dispatch(onLogout(error.response.data?.msg || '--'))
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10);
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token')
        if(!token) return dispatch(onLogout())
        
        try {
            const {data} = await iatApi.get('api/auth/renew')
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(onLogin({name: data.name, uuid: data.uuid}))
        } catch (error) {
            localStorage.clear()
            dispatch(onLogout())
        }
    }

    const startLogout = () => {
        localStorage.clear()
        dispatch(onLogout())
    }

    return {
        // PROPERTIES
        errorMessage,
        status, 
        user,


        // METHODS
        startLogin,
        startSignIn,
        checkAuthToken,
        startLogout
    }
} 