import axios from "axios";
import  getEnvVariables  from '../helpers/getEnvVariables';


const {LOCAL_URL} = getEnvVariables()
const localApi = axios.create({
    baseURL: LOCAL_URL
})

// ToDO: CONFIGURE REQUESTS INTERCEPTORS
localApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }


    return config
})

export default localApi