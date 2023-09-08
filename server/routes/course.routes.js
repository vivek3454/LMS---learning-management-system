import { Router } from "express";
import { addLectureToCourseById, createCourse, getAllCourses, getLecturesByCourseId, removeCourse, updateCourse } from "../controllers/course.controller.js";
import { authorizeSubscriber, authorizedRoles, isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const courseRouter = Router();

courseRouter.route('/')
    // get all courses
    .get(getAllCourses)
    // create course
    .post(
        isLoggedIn,
        upload.single('thumbnail'),
        createCourse,
        authorizedRoles('ADMIN')
    )

courseRouter.route('/:id')
    // get lectures
    .get(
        isLoggedIn,
        authorizeSubscriber,
        getLecturesByCourseId
    )
    // update course
    .put(
        isLoggedIn,
        authorizedRoles('ADMIN'),
        updateCourse
    )
    // delete course
    .delete(
        isLoggedIn,
        authorizedRoles('ADMIN'),
        removeCourse
    )
    // add lectures
    .post(
        isLoggedIn,
        authorizedRoles('ADMIN'),
        upload.single('lecture'),
        addLectureToCourseById
    );


export default courseRouter;