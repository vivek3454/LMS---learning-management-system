import { Router } from "express";
import { getAllCourses, getLecturesByCourseId } from "../controllers/course.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const courseRouter = Router();

courseRouter.get('/', getAllCourses);
courseRouter.get('/:id', isLoggedIn, getLecturesByCourseId);


export default courseRouter;