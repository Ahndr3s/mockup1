import axios from "axios";
import  getEnvVariables  from '../helpers/getEnvVariables';


const {VITE_API_URL} = getEnvVariables()
const iatApi = axios.create({
    baseURL: VITE_API_URL,
    // localURL: VITE_API_URL
})

// ToDO: CONFIGURE REQUESTS INTERCEPTORS
iatApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config
})

export default iatApi