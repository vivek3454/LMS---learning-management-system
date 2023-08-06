import AppError from "../utils/error.util.js";
import jwt from "jsonwebtoken";

const isLoggedIn = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new AppError('Unauthenticated, please login', 400))
    }

    const userDetail = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = userDetail;
    next();
}

const authorizedRoles = (...roles) => async (req, res, next) => {
    const currentUserRole = req.user.role;
    if (!roles.includes(currentUserRole)) {
        return next(new AppError('You do not have permission to access this route', 403));
    }
    next()
}
export { isLoggedIn, authorizedRoles }