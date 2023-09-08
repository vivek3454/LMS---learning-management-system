import { Router } from "express";
import { changePassword, forgotPassword, login, logout, profile, register, resetPassword, updateUser } from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const userRouter = Router();

// create account
userRouter.post('/register', upload.single('avatar'), register);
// log in account
userRouter.post('/login', login);
// log out fron account
userRouter.get('/logout', logout);
// get profile
userRouter.get('/profile', isLoggedIn, profile);
// forgot password
userRouter.post('/reset', forgotPassword);
// reset password
userRouter.post('/reset/:resetToken', resetPassword);
// change password
userRouter.post('/change-password', isLoggedIn, changePassword);
// update user info
userRouter.put('/update', isLoggedIn, upload.single("avatar"), updateUser)

export default userRouter;