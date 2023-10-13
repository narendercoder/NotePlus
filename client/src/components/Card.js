import React from "react";
import styled from "styled-components";
// import NoteModel from "./NoteModel";
// import { Toolbar } from "./Toolbar";
import { MdDeleteOutline, MdDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { deleteNoteAction } from "../actions/notesActions";
import { useDispatch } from "react-redux";
import {FiEdit} from "react-icons/fi"
import {LiaCalendarSolid} from "react-icons/lia"

const Card = ({ note }) => {
  const navigate = useNavigate();
  const dispatch =  useDispatch();

  const openNote = (val) => {
    navigate(`/note/${val}`)
  };


  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
      window.location.reload();
    }
  };

//bg-[#202124]

  return (
    <Wrapper className={`relative basis-1/3 max-w-[33.33333%] p-4 flex justify-center items-center rounded-lg`}>
      
      <div className="relative pt-5 px-4 card  cursor-pointer w-full h-full flex flex-col justify-between items-center text-black dark:text-white border rounded-lg border-solid border-[#5f6368] ">
      <div className="selected-box hidden justify-center items-center rounded-full h-[20px] absolute z-50 w-[20px] bg-black dark:bg-white text-white dark:text-black left-0 top-0 -translate-x-2 -translate-y-2">
        <MdDone />
      </div>
        <div className="min-h-[60px] w-full" onClick={() => openNote(note._id)}>
          <div className="title min-h-[38px] text-xl">
            <h1>{note.title}</h1>
          </div>
          <div className="desc py-5 my-1 min-h-[170px] text-xl tracking-[.01428571em] break-words">
            <p>{note.content}</p>
          </div>
        </div>
        <div className="px-3 py-1 flex justify-between items-center w-full">
          <div className="flex text-xl">
          <div className="py-3 mr-2 text-green-500" title="Edit" >
          <FiEdit/>
          </div>
          <div className="py-3 text-red-500" title="Delete" onClick={()=>deleteHandler(note._id)} >
          <MdDeleteOutline className='icon'   />
          </div>
          </div>
          <div className="flex items-center text-base font-bold tracking-wide">
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
