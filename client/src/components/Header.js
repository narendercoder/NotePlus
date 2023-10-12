import React from 'react'
import Searchbox from './Searchbox';
import styled from 'styled-components';
import Profile from './Dropdown/Profile';

const Header = ({setSearch}) => {
  return (
    <Wrapper className='header w-screen h-[100px]' id='header'>
    <div className='flex justify-between items-center p-6'>
     {/* logo */}
     <div className='logo flex justify-center items-center text-white'>
      <img className='w-auto h-10 mb-1 pr-1' src="logo.png" alt="logo" />
      <span className='text-2xl pl-1'>NotePlus</span>
     </div>
     {/* search */}
     <Searchbox setSearch={setSearch}  />
     {/* login */}
     <div className=''>
        <div className='List-View'>

        </div>
        <Profile/>
     </div>
    </div>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.header`
    background-color: rgba(32,33,36,1);
    box-shadow: inset 0 -1px 0 0 #5f6368;
`

