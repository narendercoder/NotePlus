import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { Toolbar } from './Toolbar';
import { useDispatch } from 'react-redux';
import { createNoteAction } from '../actions/notesActions';

const CreateNote = () => {
  const textAreaRef = useRef(null)
const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
//   const noteCreate = useSelector((state) => state.noteCreate);
//   const { loading, error, note } = noteCreate;

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createNoteAction(title, content, category));
    if (!title || !content || !category) return;

    resetHandler();
    window.location.reload();
  };

  useEffect(() => {}, []);

  useEffect(()=>{
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [content])

  return (
    <Wrapper className='relative flex  w-[600px] mx-auto mt-8'>
     <div className='flex justify-center items-center w-full h-full'>
      <div>
      <div className="w-full h-full flex flex-col justify-between items-center text-white border rounded-lg overflow-hidden border-solid border-[#5f6368] bg-[#202124]"   >
        <div className="min-h-[60px] w-full" >
          <input type='text' value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)} className="title w-full py-3 px-4 my-1 min-h-[30px] text-sm tracking-[.01428571em] break-words"/>
          <textarea type="textarea" value={content} placeholder='Take a note..' onChange={(e) => setContent(e.target.value)} ref={textAreaRef} className="desc w-full h-auto pt-3 min-h-[38px] px-4 text-base"></textarea>
        </div>
        <div className='w-full py-3 px-4'>
            <input type="text" placeholder='category' value={category} onChange={(e)=> setCategory(e.target.value)} />
        </div>
        <div className="flex relative justify-between items-center w-full">
          <Toolbar />
          <button type='btn' onClick={submitHandler} className='mr-3 px-4' >
           Create Note
          </button>
          <button onClick={resetHandler} className='px-4'>
           Reset
          </button>
        </div>
      </div>
      </div>
     </div>
    </Wrapper>
  )
}

export default CreateNote;

const Wrapper = styled.div`
  input,
  textarea {
    background-color: transparent;
    outline: none;
    border: none
  }
  .toolbar{
      .icon{
        opacity: 1;
      }
    }
`;