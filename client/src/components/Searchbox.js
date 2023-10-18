import React from 'react'
import styled from 'styled-components';
import {BiSearch} from "react-icons/bi"

const Searchbox = ({setSearch}) => {
  return (
    <Wrapper className='search-box relative h-full w-full overflow-hidden bg-gray-100 dark:bg-gray-600  lg:flex'>
     <div className='relative flex items-center text-black dark:text-white'>
        <div className='search-icon flex justify-center items-center '>
          <span className='icon m-1 rounded-full p-1'>
          <BiSearch   size={20} />
          </span>
        </div>
        <div className='search-input w-full'>
            <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} className='text-black w-full dark:text-white' />
        </div>
        <div></div>
     </div>
    </Wrapper>
  )
}

export default Searchbox;

const Wrapper = styled.div`
max-width: 720px;
border-radius: 8px;

.search-icon{
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 5px;
    width: 56px;
    height: 46px;
    &:hover {
        .icon{
            background-color: rgba(232,234,237,.12);
    }
    }
}
.search-input{
    margin-left: 56px;
    margin-right: 49px;
   input{
    background-color: transparent;
    border: none;
    outline: none;
    height: 46px;
    width: 100%;
    padding: 4px 0;
   }
}
`