import cloudinary from 'cloudinary'

import "dotenv/config";

 cloudinary.config({
     cloudinary_name:process.env.CLOUDINARY_NAME,
     cloudinary_Api_key:process.env.CLOUDINARY_API_KEY,
     cloudinary_secret_key:process.env.CLOUDINARY_SECRET_KEY
 })
 export default cloudinary