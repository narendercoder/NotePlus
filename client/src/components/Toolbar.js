import React from 'react';

import {MdDeleteOutline, MdOutlineColorLens, MdOutlineImage} from "react-icons/md"


export const Toolbar = ({note, id, deleteHandler}) => {

  return (
    <div className='toolbar flex justify-around items-center z-30'>
     <div  className='icon-box mx-2 h-8 w-8 flex justify-center items-center cursor-pointer hover:rounded-full hover:bg-gray-700'  >
        <MdOutlineColorLens className='icon opacity-0' />
     </div>
     <div className='icon-box mx-2 h-8 w-8 flex justify-center items-center cursor-pointer hover:rounded-full hover:bg-gray-700'>
        <MdOutlineImage className='icon opacity-0' />
     </div>
     <div className='icon-box mx-2 h-8 w-8 flex justify-center items-center cursor-pointer hover:rounded-full hover:bg-gray-700' onClick={() => deleteHandler(id)} >
        <MdDeleteOutline className='icon opacity-0'   />
     </div>
     <div className='icon-box mx-2 h-8 w-8 flex justify-center items-center cursor-pointer hover:rounded-full hover:bg-gray-700'>

     </div>
    </div>
  )
}
