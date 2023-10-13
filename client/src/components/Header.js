import React from 'react'
import Searchbox from './Searchbox';
import styled from 'styled-components';
import Profile from './Dropdown/Profile';
import { BiMoon, BiSun } from 'react-icons/bi';

const Header = ({setSearch}) => {

  function toggleTheme(){
    document.documentElement.classList.toggle("dark")
  }
  return (
    <Wrapper className='header w-screen dark:bg-[#202124] text-black dark:text-white' id='header'>
    <div className='flex justify-between items-center px-6 py-3'>
     {/* logo */}
     <div className='logo flex justify-center items-center text-white cursor-pointer'>
      <img className='w-auto h-10 mb-1 pr-1' src="logo.png" alt="logo" />
      <span className='text-2xl pl-1 dark:text-white text-black'>NotePlus</span>
     </div>
     {/* search */}
     <Searchbox setSearch={setSearch}  />
     {/* login */}
     <div className='flex justify-between items-center'>
        <div className='List-View'>
        </div>
        <div className='w-full h-full flex justify-center items-center text-xl cursor-pointer ' onClick={toggleTheme}>
         <BiSun className='dark:inline hidden'/>
         <BiMoon className='dark:hidden' />
        </div>
        <Profile/>
     </div>
    </div>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.header`
    /* background-color: rgba(32,33,36,1); */
    box-shadow: inset 0 -1px 0 0 #5f6368;
`

