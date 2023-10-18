import React, { useCallback, useEffect, useState } from 'react';
import { Toolbar } from '../Toolbar';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { deleteNoteAction, updateNoteAction } from '../../actions/notesActions';
import { useNavigate, useParams } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment} from 'react'
import Swal from 'sweetalert2';

const NoteModel = ({openModal}) => {

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const params= useParams();
  const navigate = useNavigate();

  const noteDelete = useSelector((state)=>state.noteDelete)
  const {success} = noteDelete;


  const closeModal = () =>{
    navigate("/home");
  }

  const deleteHandler = async(id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteNoteAction(id));
      }else{
        Swal.fire({
          title: 'Your note is safe!',
        }
        )
      }
    });
    
  };

  const fetching = useCallback(async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/notes/${params.id}`);

    setTitle(data.title);
    setContent(data.content);
    setCategory(data.category);
    setDate(data.updatedAt);
  }, [params.id]);

  useEffect(() => {
    if(params.id !== undefined){
      fetching();
    }
  }, [params.id, date, fetching]);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    await dispatch(updateNoteAction(params.id, title, content, category));
    if (!title || !content || !category) return;

    resetHandler();
    navigate("/home");
    window.location.reload();
  };

  useEffect(()=>{

    if(success){
      Swal.fire("Deleted!", "You note has been deleted!", "success").then(()=>{
        navigate("/home");
        window.location.reload();
      });
    }
  }, [success, navigate])

    
  return (
    <Wrapper className='dialog-box'> 
     <Transition appear show={openModal} as={Fragment} className=''>
      <Dialog as='div' className="dialog relative z-10" onClose={closeModal} >
      <Transition.Child as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
        <div className="bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
       <div className='absolute bg-overlay -z-10 bg-slate-700 dark:bg-[#202124] w-screen h-full opacity-75'>
   
       </div>
        <div className="flex min-h-full z-10 items-center justify-center p-4 text-center">
          <Transition.Child
           as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="dialog-panel  w-[600px] transform overflow-hidden dark:text-white rounded-lg border border-solid border-[#5f6368] bg-white dark:bg-[#202124] text-left align-middle shadow-xl transition-all">
              <Dialog.Title className='title'>
              <input
                type='text'
                placeholder="Enter title"
                value={title || ''}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-2xl font-normal leading-7 pb-3 pt-4 px-4 min-h-[43px] outline-none bg-white dark:bg-[#202124]"
              >
                
              </input>
              </Dialog.Title>
        
              <div >
                <textarea
                 placeholder='Take a note..'
                 value={content || ''}
                 onChange={(e) => setContent(e.target.value)}
                 rows="10"
                 className="text-base w-full tracking-[.00625em] py-3 pt-2 h-full px-4 outline-none bg-white dark:bg-[#202124]" />
              </div>

              <div className="px-3 py-1 flex justify-end">
               <div className='text-xs font-normal tracking-wide'>
                
               </div>
              </div>

              <div className="flex justify-between items-center my-1">
               <Toolbar  id={params.id} deleteHandler={deleteHandler} />
               <button type="button" onClick={updateHandler} className='mx-2 flex justify-center items-center cursor-pointer rounded-lg text-sm bg-yellow-500 px-6 py-2 mr-5'>
                update
               </button>
              </div>

            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
     </Transition>
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