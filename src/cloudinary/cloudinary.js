import cloudinary from 'cloudinary'
import getEnvVariables from '../helpers/getEnvVariables';

const {CLOUDNAME, CLOUDAPIKEY, CLOUDAPISECRET} = getEnvVariables()

// Configuration
cloudinary.config({ 
    cloud_name: CLOUDNAME, 
    api_key: CLOUDAPIKEY, 
    api_secret: CLOUDAPISECRET // Click 'View Credentials' below to copy your API secret
});

export default cloudinary