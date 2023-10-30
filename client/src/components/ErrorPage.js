import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = () => {
  const navigate = useNavigate();
  const backHandler = () =>{
     navigate("/");
  }
  return (
    <Wrapper className='w-screen dark:text-white'>
     <div className='w-full h-full flex flex-col justify-center items-center font-bold'>
      <div className='text-4xl font-bold p-4 my-3'>
      404 Error
      </div>
     <button onClick={backHandler} className='my-4 text-lg py-3 px-5 bg-yellow-500 rounded-lg'>
      Go Back
     </button>
     </div> 
    </Wrapper>
  )
}

export default ErrorPage;

const Wrapper = styled.div`
height: calc(100vh - 68px)
`