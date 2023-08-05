import app from './app.js';
import { config } from 'dotenv';
import { v2 } from 'cloudinary';
import connectionToDB from './config/dbConnection.js';
config(); // load environment variables from the '.env' file into `process.env` object

const PORT = process.env.PORT || 5001;

v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log(process.env.CLOUDINARY_CLOUD_NAME,
    process.env.CLOUDINARY_API_KEY,
    process.env.CLOUDINARY_API_SECRET,);

app.listen(PORT, async () => {
    await connectionToDB();
    console.log(`App is running at http://localhost:${PORT}`);
})