import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/authSlice";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { email, password };
    
    Axios.post("http://localhost:3001/userApi/login", loginData, {
      withCredentials: true,
    }).then((res) => {
      if (res.data.error) {
        alert(res.data.error);
        navigate("/signin");
      } else {
        console.log(res.data);
        dispatch(
          setCredentials({
            user: res.data.foundUser,
            accessToken: res.data.accessToken,
            refreshToken: res.data.refreshToken,
          })
        );
        navigate("/profile");
      }
    });
  };

  return (
    <div className="bg-[url('clgimg.jpg')] bg-cover font-medium h-screen flex items-center justify-center">
      <div className="p-10 h-[500px] w-[370px] rounded-lg shadow-lg shadow-black bg-[rgba(0,0,0,0.5)] ">
        <div>
          <h1 className="text-2xl font-bold py-2 text-white">
            Sign in to your account
          </h1>
          <p className="text-medium text-white py-2">
            Don't have an account yet?
            <Link
              to="/signup"
              className="ml-2 underline text-lg font-bold text-blue-400"
            >
              Sign up.
            </Link>
          </p>
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col py-2">
            <label className="text-lg font-bold pt-2 text-white">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-black p-2 rounded-md"
              type="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-lg font-bold pt-2 text-white">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-black p-2 rounded-md"
              type="password"
            />
          </div>
          <button
            type="submit"
            className="w-72 mt-10 bg-[#8B0000] text-white rounded-full p-2 border hover:font-bold hover:scale-105 shadow-md hover:shadow-black"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
