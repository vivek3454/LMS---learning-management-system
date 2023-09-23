import express from'express';
import cors from'cors';
import morgan from'morgan';
import cookieParser from'cookie-parser';
import userRouter from './routes/user.routes.js';
import errorMiddleware from './middlewares/error.middleware.js';
import courseRouter from './routes/course.routes.js';
import paymentRouter from './routes/payment.routes.js';
import { contactUs } from './controllers/miscellaneous.controller.js';
import { config } from 'dotenv';
import miscRouter from './routes/miscellaneous.routes.js';

config(); // load environment variables from the '.env' file into `process.env` object

const app = express();

// using middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));




// routes of 3 modules
app.use('/api/v1/user',userRouter);
app.use('/api/v1/courses',courseRouter);
app.use('/api/v1/payments',paymentRouter);
app.use('/api/v1', miscRouter);


// route for 404
app.all('*', (req, res)=>{
    res.status(404).send('OOPS!! 404 page not found')
})

// handling errors
app.use(errorMiddleware);

export default app ; 
