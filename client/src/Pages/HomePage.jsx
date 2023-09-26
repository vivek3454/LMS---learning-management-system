import { useState } from "react";
import { Link } from "react-router-dom";

import homePageMainImage from "../Assets/Images/homePageMainImage.png";
import HomeLayout from "../Layouts/HomeLayout";
const HomePage = () => {
    return (
        <HomeLayout>
            <div className="pt-10 text-white flex flex-col-reverse min-[1200px]:flex-row items-center justify-center gap-10 mx-6 md:mx-16 min-h-[90vh]">
                <div className="w-full md:w-1/2 space-y-6">
                    <h1 className="min-[1200px]:text-5xl text-3xl font-semibold">
                        Find out best
                        <span className="text-yellow-500 font-bold"> Online Courses</span>
                    </h1>
                    <p className="text-xl text-gray-200">
                        We have large library of courses taught by highly skilled and qualified faculties at a very affordable cost
                    </p>
                    <div className="space-x-6">
                        <Link to={"/courses"}>
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Explore Courses
                            </button>
                        </Link>
                        <Link to={"/contact"}>
                            <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:border-yellow-600 transition-all ease-in-out duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <img src={homePageMainImage} alt="home page image" />
                </div>
            </div>
        </HomeLayout>
    );
};

export default HomePage;