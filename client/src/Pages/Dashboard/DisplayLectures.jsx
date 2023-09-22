import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import {
  deleteCourseLecture,
  getCourseLectures,
} from "../../Redux/Slices/LectureSlice";

const DisplayLectures = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // for getting the data from location of previous component
  const courseDetails = useLocation().state;
  const { lectures } = useSelector((state) => state.lecture);
  const { role } = useSelector((state) => state.auth);

  // to play the video accordingly
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // function to handle lecture delete
  const handleLectureDelete = async (courseId, lectureId) => {
    const data = { courseId, lectureId };
    await dispatch(deleteCourseLecture(data));
    await dispatch(getCourseLectures(courseDetails._id));
  };

  // fetching the course lecture data
  useEffect(() => {
    (async () => {
      await dispatch(getCourseLectures(courseDetails._id));
    })();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-5 justify-center min-h-[90vh] py-0 text-white">
        <div className="flex justify-center w-full flex-col lg:flex-row">
          {/* left section for playing the video and displaying course details to admin */}
          <div className="space-y-5 w-full lg:w-[70%] p-2 h-[99vh] overflow-y-auto">
            <div className="flex items-center">
              <span className="mt-2 ml-4 cursor-pointer" onClick={()=>navigate(-1)}><FaArrowLeft size={22} /></span>
              <h1 className="text-left text-xl ml-5 mt-2 font-semibold text-yellow-500">
                Now Playing - {lectures[currentVideoIndex]?.title}
              </h1>
            </div>
            <video
              className="object-fill w-full"
              src={lectures && lectures[currentVideoIndex]?.lecture?.secure_url}
              controls
              disablePictureInPicture
              muted
              controlsList="nodownload"
            ></video>
            <div className="px-6">
              <h1>
                <span className="text-yellow-500">Title : </span>
                {lectures && lectures[currentVideoIndex]?.title}
              </h1>
              <p>
                {" "}
                <span className="text-yellow-500 line-clamp-4">
                  Description :{" "}
                </span>
                {lectures && lectures[currentVideoIndex]?.description}
              </p>
            </div>
          </div>

          {/* right section for displaying all the lectures of the course */}
          <ul className="w-full lg:w-[30%] p-0 shadow-[0_0_10px_black] h-[99vh] overflow-y-auto">
            <li className="font-semibold text-xl p-5 text-yellow-500 bg-[#1D232A] sticky top-0 shadow-xl flex items-center justify-between">
              <p className="text-center w-full">Lectures List</p>
              {role === "ADMIN" && (
                <button
                  onClick={() =>
                    navigate("/course/addlecture", {
                      state: { ...courseDetails },
                    })
                  }
                  className="btn-primary px-2 py-1 rounded-md w-max font-semibold text-sm"
                >
                  Add New Lecture
                </button>
              )}
            </li>

            {lectures &&
              lectures.map((element, index) => {
                return (
                  <li className="px-2 border-b-2 border-gray-500 h-16 flex items-center justify-between" key={element._id}>
                    <p
                      className="cursor-pointer"
                      onClick={() => setCurrentVideoIndex(index)}
                    >
                      <span>
                        {" "}
                        Lecture {index + 1}.{" "}{element?.title}
                      </span>
                    </p>
                    {role === "ADMIN" && (
                      <button
                        onClick={() =>
                          handleLectureDelete(courseDetails?._id, element?._id)
                        }
                        className="btn-primary px-2 py-1 rounded-md font-semibold text-sm"
                      >
                        Delete Lecture
                      </button>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DisplayLectures;
