import React from "react";
import styled from "styled-components";
// import NoteModel from "./NoteModel";
import { Toolbar } from "./Toolbar";
import { MdDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { deleteNoteAction } from "../actions/notesActions";
import { useDispatch } from "react-redux";

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

  return (
    <Wrapper
      className={`relative mx-4 mb-4 flex justify-center items-center rounded-lg`}
    >
      <div className="selected-box hidden justify-center items-center rounded-full h-[20px] absolute z-50 w-[20px] bg-white left-0 top-0 -translate-x-2 -translate-y-2">
        <MdDone />
      </div>
      <div className="w-[240px] h-full flex flex-col justify-between items-center text-white border rounded-lg overflow-hidden border-solid border-[#5f6368] bg-[#202124]">
        <div className="min-h-[60px] w-full" onClick={() => openNote(note._id)}>
          <div className="title pt-3 min-h-[38px] px-4 text-base">
            {note.title}
          </div>
          <div className="desc py-3 px-4 my-1 min-h-[30px] text-sm tracking-[.01428571em] break-words">
            {note.content}
          </div>
        </div>
        <div className="px-3 py-1 flex items-center justify-end w-full">
          <div className="text-xs font-normal tracking-wide">
            {note.createdAt.substring(0, 10)}
          </div>
        </div>
        <div className="flex relative items-center w-full">
          <Toolbar id={note._id} deleteHandler={deleteHandler} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  transition: all 0.5s linear;
  &:hover {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.6),
      0 1px 3px 1px rgba(0, 0, 0, 0.302);

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
