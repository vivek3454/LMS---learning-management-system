import User from "../models/user.model.js";
import AppError from "../utils/error.util.js";
import jwt from "jsonwebtoken";

// get user info from jwt
const isLoggedIn = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new AppError('Unauthenticated, please login', 400))
    }

    const userDetail = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = userDetail;
    next();
}

// check user is admin or else
const authorizedRoles = (...roles) => async (req, res, next) => {
    const currentUserRole = req.user.role;
    if (!roles.includes(currentUserRole)) {
        return next(new AppError('You do not have permission to access this route', 403));
    }
    next()
}

// check user is subscribed
const authorizeSubscriber = async(req, res, next) => {
    const user = await User.findById(req?.user?.id);
    const subsciption = user?.subscription;
    const currentUserRole = user?.role;
    if (currentUserRole !== 'ADMIN' && subsciption.status !== 'active') {
        return next(
            new AppError('Please subscribce to access this route!', 403)
        )
    }

    next();
}

export { isLoggedIn, authorizedRoles, authorizeSubscriber }