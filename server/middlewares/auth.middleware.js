import AppError from "../utils/error.util.js";
import jwt from "jsonwebtoken";

const isLoggedIn = async (req, res, next)=>{
    const {token} = req.cookies;

    if (!token) {
        return next(new AppError('Unauthenticated, please login', 400))
    }

    const userDetail = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = userDetail;
    next();
}
export {isLoggedIn}