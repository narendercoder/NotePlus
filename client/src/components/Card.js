import React from "react";
import styled from "styled-components";
import Swal from 'sweetalert2'
import { MdDeleteOutline, MdDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import {FiEdit} from "react-icons/fi"
import {LiaCalendarSolid} from "react-icons/lia"
import Markdown from 'react-markdown'
import { notesLabel } from "../config/notesLabels";
import { useDispatch } from "react-redux";
import { deleteNoteAction } from "../actions/notesActions";

const Card = ({ note }) => {
  const navigate = useNavigate();

  const openNote = (val) => {
    navigate(`/note/${val}`)
  };

  const dispatch =  useDispatch();

  const deleteHandler = async(id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteNoteAction(id)).then(()=>{
          Swal.fire("Deleted!", "You note has been deleted!", "success")
        })
      }else {
        Swal.fire({
          title: 'Your note is safe!',
        }
        )
      }
    });
  };



  return (
    <Wrapper className={`relative max-w-full p-4 flex justify-center items-center rounded-lg`}>   
      <div className="relative pt-5 px-4 card  cursor-pointer w-full h-full flex flex-col justify-between items-center text-black dark:text-white border rounded-lg border-solid border-[#5f6368] ">
      <div className="selected-box hidden justify-center items-center rounded-full h-[20px] absolute z-50 w-[20px] bg-black dark:bg-white text-white dark:text-black left-0 top-0 -translate-x-2 -translate-y-2">
        <MdDone />
      </div>
        <div className="min-h-[60px] w-full" >
         {/* show category */}
          <div className="note-category min-h-[38px] text-xl mb-2">
           {
            notesLabel.map((item)=>{
              return (
                item.name === note.category ? 
                <span key={item.name} className={`${item.color} rounded-full px-5 py-2 `}>{note.category}</span> 
                : 
                ""
                )
            })
           }
          </div>
          {/* show title */}
          <div className="title min-h-[38px] text-xl f">
            <h1 className="font-bold capitalize">{note.title}</h1>
          </div>
          {/* show content */}
          <div className="desc pb-5 my-1 min-h-[170px]  text-[#768492] tracking-[.01428571em] break-words">
            <Markdown>{note.content}</Markdown>
          </div>
        </div>
        <div className="py-1 flex justify-between items-center w-full">
          <div className="flex text-2xl">
          <div className=" mr-2 flex  " title="Edit" onClick={() => openNote(note._id)} >
          <span className="p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-full">
          <FiEdit size={15}/>
          </span>
          </div>
          <div className=" flex" title="Delete" onClick={()=>deleteHandler(note._id)} >
          <span className="p-2 text-red-500 hover:text-white hover:bg-red-500 rounded-full">
          <MdDeleteOutline className='icon' size={15} />
          </span>
          </div>
          </div>
          <div className="flex items-center text-base font-bold tracking-wide pr-3">
             <span className="py-3 mr-2 text-xl text-blue-500"><LiaCalendarSolid/></span>
            <span>{note.createdAt.substring(0, 10)}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  transition: all 0.5s linear;
  .card{
    box-shadow: 0 0px 40px rgba(0, 0, 0, 0.05);
  }
  &:hover {
    .selected-box {
      display: flex;
    }
    .toolbar {
      .icon {
        opacity: 1;
      }
    }
  }
`;
