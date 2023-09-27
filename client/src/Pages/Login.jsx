import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";
import { login } from "../Redux/Slices/AuthSlice";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // for user input
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    // function to set the login data
    const handleUserInput = (event) => {
        const { name, value } = event.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    // function to login
    const loginToAccount = async (event) => {
        event.preventDefault();

        // checking the empty fields
        if (
            !loginData.email ||
            !loginData.password
        ) {
            toast.error("Please fill all the fields");
            return;
        }

        // email validation using regex
        if (!loginData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            toast.error("Invalid email id");
            return;
        }

        // password validation using regex
        if (!loginData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)) {
            toast.error(
                "Minimum password length should be 8 with Uppercase, Lowercase, Number and Symbol"
            );
            return;
        }

        // calling login action
        const res = await dispatch(login(loginData));

        // redirect to home page if true
        if (res?.payload?.success) navigate("/");

        // clearing the login inputs
        setLoginData({
            email: "",
            password: "",
        });
    };

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form
                    noValidate
                    onSubmit={loginToAccount}
                    className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]"
                >
                    <h1 className="text-center text-2xl font-bold">Login Page</h1>

                    {/* input for email */}
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold" htmlFor="email">
                            Email
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="bg-transparent px-2 py-1 border"
                            value={loginData.email}
                            onChange={handleUserInput}
                        />
                    </div>

                    {/* input for password */}
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold" htmlFor="password">
                            Password
                        </label>
                        <input
                            autoComplete="true"
                            required
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            className="bg-transparent px-2 py-1 border"
                            value={loginData.password}
                            onChange={handleUserInput}
                        />
                    </div>

                    {/* registration button */}
                    <button
                        className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
                        type="submit"
                    >
                        Login
                    </button>

                    <Link to={"/forgetpassword"}>
                        <p className="text-center link text-accent cursor-pointer">
                            Forget Password
                        </p>
                    </Link>

                    <p className="text-center">
                        Do not have an account ?{" "}
                        <Link to={"/signup"} className="link text-accent cursor-pointer">
                            Signup
                        </Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    );
};

export default Login;
