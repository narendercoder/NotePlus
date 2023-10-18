import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Toolbar } from "./Toolbar";
import { useDispatch } from "react-redux";
import { createNoteAction } from "../actions/notesActions";
import Markdown from "react-markdown";
import Category from "./Dropdown/Category";
import { notesLabel } from "../config/notesLabels";
import { toast } from "react-toastify";

const CreateNote = () => {
  const textAreaRef = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  //   const noteCreate = useSelector((state) => state.noteCreate);
  //   const { loading, error, note } = noteCreate;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log(content )
      setContent((prevText) => prevText + <br/>);
    }
  };

  const resetHandler = () => {
    setTitle("");
    // setCategory("");
    setContent("");
  };

  const submitHandler = async(e) => {
    e.preventDefault();
    await dispatch(createNoteAction(title, content, category));
    if (!title || !content || !category) return

    resetHandler();
    window.location.reload();
  };

  useEffect(() => {}, []);

  useEffect(() => {
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [content]);


  return (
    <Wrapper className="mx-auto relative flex w-full dark:bg-black bg-gray-100">
      <div className="flex w-full h-full">
        <div className="p-6 w-full">
          <div className="w-full h-full overflow-y-scroll p-4 text-black dark:text-white border rounded-lg overflow-hidden border-solid border-[#5f6368] bg-white dark:bg-[#202124]">
          <div className="flex flex-col xl:flex-row justify-between gap-4" >
            <div className="relative xl:w-1/2">
            <div className="p-6 text-4xl">
              <h1>Create Notes</h1>
            </div>
              <div className="note w-full">
                <div className="relative min-h-[60px] w-full">
                  {/* title */}
                  <div className="py-3 px-4 my-1 min-h-[30px] mb-4 text-xl">
                    <div className="text-black dark:text-white mb-2">Title</div>
                    <input
                      type="text"
                      value={title}
                      id="title"
                      placeholder="Title"
                      onChange={(e) => setTitle(e.target.value)}
                      className="p-4 title w-full text-black dark:text-white tracking-[.01428571em] break-words bg-gray-100 dark:bg-gray-600 rounded-lg"
                    />
                  </div>
                  {/* description */}
                  <div className="relative py-3 px-4 my-1 min-h-[30px] mb-4 text-xl h-full">
                    <div className="text-black dark:text-white mb-2">
                      Description
                    </div>
                    <textarea
                      type="textarea"
                      value={content}
                      placeholder="Take a note.."
                      onChange={(e) => setContent(e.target.value)}
                      ref={textAreaRef}
                      onKeyDown={handleKeyDown}
                      className="desc text-black dark:text-white w-full h-auto p-3 min-h-[100px] px-4 bg-gray-100 dark:bg-gray-600 rounded-lg"
                    ></textarea>
                  </div>
                </div>
                {/* category */}
                {/* <div className="relative w-full py-3 px-4 my-1">
                  <div className=" min-h-[30px] mb-4 text-xl">
                    <div className="text-black dark:text-white mb-2">
                      Category
                    </div>
                    <input
                      type="text"
                      placeholder="category"
                      className="p-4 category w-full text-black dark:text-white tracking-[.01428571em] break-words bg-gray-100 dark:bg-gray-600 rounded-lg"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>
                </div> */}
                <Category category={category} setCategory={setCategory} />
                {/* tools */}
                <div className="flex relative justify-between items-center w-full">
                  <Toolbar disable={true} />
                  <div className="relative h-full px-3 py-4">
                    <button
                      type="btn"
                      onClick={submitHandler}
                      className="mr-3 py-3 px-5 rounded-lg h-full bg-yellow-400 text-black"
                    >
                      Create Note
                    </button>
                    <button
                      onClick={resetHandler}
                      className="py-3 px-5 rounded-lg h-full bg-yellow-400 text-black"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              
              
            </div>
            </div>

            {/* preview */}
             <div className="note-preview xl:w-1/2 rounded-lg px-5 py-6">
                <div className="w-full">
                  
                  <div className="pb-4 text-4xl">
                  <h1> Note Preview</h1>
                  </div>
                  <div className="note-category min-h-[38px] text-xl mb-2 px-4">
                    {
                      notesLabel.map((item)=>{
                      return item.name === category ? <span className={`${item.color} rounded-full px-5 py-2 font-bold`  } key={item.name} >{item.name}</span>
                         : ""
                      })
                    }
                  </div>
                  {/* title */}
                  <div className="pt-2 px-4 mb-1 min-h-[30px] text-xl">
                   <h1 className="text-black dark:text-white mb-2">{title}</h1>
                  </div>
                  <div className="relative pt-2 px-4 mb-1  min-h-[30px] text-xl h-full">
                   <div className="content w-full h-full">
                   <Markdown>
                    {content}
                  </Markdown>
                   </div>
                  </div>
                  
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CreateNote;

const Wrapper = styled.div`
  height: calc(100vh - 80px);
  input,
  textarea {
    /* background-color: transparent; */
    outline: none;
    border: none;
  }
  .toolbar {
    .icon {
      opacity: 1;
    }
  }
  .note-preview{
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    ul{
     list-style-type: initial !important 
    }
    ol{
     list-style: initial !important 
    }
    .content{
      overflow-wrap: break-word !important;
    }
   
  }
`;
