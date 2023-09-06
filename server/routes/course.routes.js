import { Router } from "express";
import { addLectureToCourseById, createCourse, getAllCourses, getLecturesByCourseId, removeCourse, updateCourse } from "../controllers/course.controller.js";
import { authorizeSubscriber, authorizedRoles, isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const courseRouter = Router();

courseRouter.route('/')
    .get(getAllCourses)
    .post(
        isLoggedIn,
        upload.single('thumbnail'),
        createCourse,
        authorizedRoles('ADMIN')
    )
courseRouter.route('/:id')
    .get(
        isLoggedIn,
        authorizeSubscriber,
        getLecturesByCourseId
    )
    .put(
        isLoggedIn,
        authorizedRoles('ADMIN'),
        updateCourse
    )
    .delete(
        isLoggedIn,
        authorizedRoles('ADMIN'),
        removeCourse
    )
    .post(
        isLoggedIn,
        authorizedRoles('ADMIN'),
        upload.single('lecture'),
        addLectureToCourseById
    );


export default courseRouter;