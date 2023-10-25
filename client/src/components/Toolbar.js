import React from 'react';

import {MdDeleteOutline, MdOutlineColorLens, MdOutlineImage} from "react-icons/md"


export const Toolbar = ({note, id, deleteHandler, disable}) => {

  return (
    <div className='toolbar flex justify-around items-center z-30 px-3 py-4'>
     <div  className='icon-box mx-2 h-8 w-8 hidden justify-center items-center cursor-pointer hover:rounded-full hover:bg-gray-700 hover:text-white' title='Background Options'  >
        <MdOutlineColorLens className='icon opacity-0' />
     </div>
     <div className=' hidden icon-box mx-2 h-8 w-8  justify-center items-center cursor-pointer hover:rounded-full hover:bg-gray-700 hover:text-white' title='Add Image' >
        <MdOutlineImage className='icon opacity-0' />
     </div>
     <div className={`${disable ? "hidden" : ""} icon-box mx-2 h-8 w-8 text-red-500 flex justify-center items-center cursor-pointer hover:rounded-full hover:bg-red-500 hover:text-white`} title='Delete' onClick={() => deleteHandler(id)} >
        <MdDeleteOutline className='icon opacity-0'   />
     </div>
     
    </div>
  )
}
