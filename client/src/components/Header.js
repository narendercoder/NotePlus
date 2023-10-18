import React from 'react'
import Searchbox from './Searchbox';
import styled from 'styled-components';
import Profile from './Dropdown/Profile';
import { BiMenu, BiMoon, BiSun } from 'react-icons/bi';

const Header = ({setSearch, openSideMenu, setOpenSideMenu, handleThemeSwitch}) => {

  return (
    <Wrapper className='relative header w-screen dark:bg-[#202124] text-black dark:text-white' id='header'>
    <div className='flex justify-between items-center px-6 py-3'>
     {/* logo */}
     <div className='flex justify-between items-center text-white cursor-pointer'>
     <div className='text-black dark:text-white text-5xl mr-3 lg:hidden inline' onClick={()=> setOpenSideMenu(!openSideMenu)} >
      <BiMenu/>
     </div>
     <div className='logo flex justify-center items-center'>
     <img className='w-auto h-10 mb-1 pr-1' src="logo.png" alt="logo" />
      <span className='text-2xl pl-1 dark:text-white text-black'>NotePlus</span>
     </div>
     </div>
     {/* search */}
    <div className='hidden lg:inline w-1/2'>
    <Searchbox setSearch={setSearch}  />
    </div>
     {/* login */}
     <div className='flex justify-around items-center'>
        <div className='List-View'>
        </div>
        <div className='w-full h-full flex justify-center items-center text-xl cursor-pointer ' onClick={handleThemeSwitch}>
         <BiSun className='dark:inline hidden text-2xl'/>
         <BiMoon className='dark:hidden text-2xl' />
        </div>
        <Profile/>
     </div>

  
     {/* <div className=' cursor-pointer text-black dark:text-white text-5xl mr-3 lg:hidden inline' onClick={()=> setOpenMenu(!openSideMenu)} >
      <BiMenu/>
     </div> */}

    </div>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.header`
    /* background-color: rgba(32,33,36,1); */
    box-shadow: inset 0 -1px 0 0 #5f6368;
`

