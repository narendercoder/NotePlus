import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { register } from "../actions/userActions";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);

  const submitHandler = async () => {
    if (password !== confirmpassword) {
        toast.error("Password and Confirm Password Does not match", {
          autoClose: 1000,
        });
        return;
      }
    if (!email || !password) {
      toast.error("Please Fill the Data Correctly");
      return;
    } else {
      try {
        await dispatch(register(name, email, password));
      } catch (err) {
        toast.error("Please Fill the Data Correctly");
      }
    }
  };

  useEffect(() => {
    if (userRegister.userInfo) {
     toast.success('Register Successfully');
     navigate("/");
    }else if(userRegister.error){
     toast.error(userRegister.error)
     return
    }
  }, [ userRegister, navigate]);

  return (
    <Wrapper className="w-screen flex justify-center items-center text-black dark:text-white px-10">
      <div className="max-w-sm py-10 flex-1 justify-center text-xs sm:text-sm flex flex-col items-center gap-5 sm:gap-6  h-full">
        <div className="flex justify-center items-center w-full mb-5">
          <img src="logo.png" alt="logo" />
          <span className="font-extrabold text-xl sm:text-4xl ml-2">
            NotePlus
          </span>
        </div>
        <h1 className="font-extrabold select-none text-2xl sm:text-4xl uppercase">
          register
        </h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          autoComplete="off"
          required
          className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
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
        <input
          type="password"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          autoComplete="off"
          required
          className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          onClick={submitHandler}
          className="w-full max-w-[20ch] border border-yellow-500 border-solid py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-yellow-500 after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-white"
        >
          <h2 className="relative z-20">Register</h2>
        </button>
        <h2 className="duration-300  cursor-pointer">
          Already Registered?{" "}
          <Link to="/" className="hover:underline text-yellow-500">
            Login
          </Link>
        </h2>
      </div>
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.div`
  height: calc(100vh - 65px);
`;
