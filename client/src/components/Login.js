import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please complete all required fields");
      return;
    } else {
      try {
        await dispatch(login(email, password)).then(() => {
          toast.success("login Successfully");
          navigate("/");
        });
      } catch (error) {
        toast.error("Incorrect details");
      }
    }
  };

  useEffect(() => {
    if (userLogin.error) {
      toast.error(userLogin.error);
    }
  }, [userLogin, navigate]);

  return (
    <Wrapper className="w-screen flex justify-center items-center text-black dark:text-white px-10">
      <div className="max-w-sm py-10 flex-1 justify-center text-xs sm:text-sm flex flex-col items-center gap-5 sm:gap-6  h-full">
        <div className="flex justify-center items-center w-full mb-5">
          <img src="../logo.png" alt="logo" />
          <span className="font-extrabold text-xl sm:text-4xl ml-2">
            NotePlus
          </span>
        </div>
        <h1 className="font-extrabold select-none text-2xl sm:text-4xl uppercase">
          Login
        </h1>

        <form
          className="login-form flex flex-col items-center gap-5 sm:gap-6 w-full"
          onSubmit={submitHandler}
          noValidate="novalidate"
          autoComplete="off"
        >
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            autoComplete="off"
            required
            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            autoComplete="off"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full max-w-[20ch] border border-yellow-500 border-solid py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-yellow-500 after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-white"
          >
            <h2 className="relative z-20">Login</h2>
          </button>
        </form>

        <h2 className="duration-300  cursor-pointer">
          New Here?{" "}
          <Link to="/register" className="hover:underline text-yellow-500">
            Register
          </Link>
        </h2>
      </div>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  height: calc(100vh - 65px);
`;
