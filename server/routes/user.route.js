import { Router } from "express";
import { changePassword, forgotPassword, login, logout, profile, register, resetPassword, updateUser } from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const userRouter = Router();

userRouter.post('/register', upload.single('avatar'), register);
userRouter.post('/login', login);
userRouter.get('/logout', logout);
userRouter.get('/profile', isLoggedIn, profile);
userRouter.post('/reset', forgotPassword);
userRouter.post('/reset/:resetToken', resetPassword);
userRouter.post('/change-password', isLoggedIn, changePassword);
userRouter.put('/update', isLoggedIn, upload.single("avatar"), updateUser)

export default userRouter;