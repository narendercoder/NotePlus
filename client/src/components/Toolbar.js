import React from 'react';

import {MdDeleteOutline, MdOutlineColorLens, MdOutlineImage} from "react-icons/md"

export const Toolbar = () => {
  return (
    <div className='toolbar flex justify-around items-center z-30'>
     <div  className='mx-2 h-8 w-8 flex justify-center items-center cursor-pointer hover:rounded-full hover:bg-gray-700'  >
        <MdOutlineColorLens/>
     </div>
     <div className='mx-2 h-8 w-8 flex justify-center items-center cursor-pointer hover:rounded-full hover:bg-gray-700'>
        <MdOutlineImage/>
     </div>
     <div className='mx-2 h-8 w-8 flex justify-center items-center cursor-pointer hover:rounded-full hover:bg-gray-700'>
        <MdDeleteOutline/>
     </div>
     <div className='mx-2 h-8 w-8 flex justify-center items-center cursor-pointer hover:rounded-full hover:bg-gray-700'>

     </div>
    </div>
  )
}
