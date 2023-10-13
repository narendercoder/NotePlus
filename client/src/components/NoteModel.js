import React, { useEffect, useState } from 'react';
import { Toolbar } from './Toolbar';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { deleteNoteAction, updateNoteAction } from '../actions/notesActions';
import { useNavigate, useParams } from 'react-router-dom';

const NoteModel = () => {

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const params= useParams();
  const navigate = useNavigate();


  // const noteUpdate = useSelector((state) => state.noteUpdate);
  // const { loading, error } = noteUpdate;

  // const noteDelete = useSelector((state) => state.noteDelete);
  // const { loading: loadingDelete, error: errorDelete } = noteDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
    navigate("/home")
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/notes/${params.id}`);

      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setDate(data.updatedAt);
    };

    fetching();
  }, [params.id, date]);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateNoteAction(params.id, title, content, category));
    if (!title || !content || !category) return;

    resetHandler();
    navigate("/home");
  };

    
  return (
    <Wrapper className='dialog-box min-h-screen w-full'> 
     <div className=' w-full h-screen'>
      <div className="dialog relative z-10 flex justify-center items-center w-full h-full" >
      <div>
        <div className="bg-black bg-opacity-25" />
      </div>

      <div className="inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <div
          >
            <div className="dialog-panel  w-[600px] transform overflow-hidden dark:text-white rounded-lg border border-solid border-[#5f6368] bg-white dark:bg-[#202124] text-left align-middle shadow-xl transition-all">
              <div className='title'>
              <input
                type='text'
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-2xl font-normal leading-7 pb-3 pt-4 px-4 min-h-[43px] outline-none"
              >
                
              </input>
              </div>
        
              <div className="">
                <textarea
                 placeholder='Take a note..'
                 value={content}
                 onChange={(e) => setContent(e.target.value)}
                 className="text-base w-full tracking-[.00625em] py-3 pt-2 min-h-[46px] px-4 outline-none" />
              </div>

              <div className="px-3 py-1 flex justify-end">
               <div className='text-xs font-normal tracking-wide'></div>
              </div>

              <div className="flex justify-between items-center my-1">
               <Toolbar  id={params.id} deleteHandler={deleteHandler} />
               <button type="button" onClick={updateHandler} className='mx-2 flex justify-center items-center cursor-pointer rounded-lg text-sm bg-yellow-400 px-6 py-2 mr-5'>
                update
               </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Wrapper>
  )
}

export default NoteModel;

const Wrapper = styled.div`
 input,
  textarea {
    background-color: transparent;
    outline: none;
    border: none
  }
`