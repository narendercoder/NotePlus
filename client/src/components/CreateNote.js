import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Toolbar } from "./Toolbar";
import { useDispatch } from "react-redux";
import { createNoteAction } from "../actions/notesActions";

const CreateNote = () => {
  const textAreaRef = useRef(null);
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

  useEffect(() => {
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [content]);

  //bg-[#202124]

  return (
    <Wrapper className="mx-auto relative flex w-full h-screen dark:bg-black bg-gray-100">
      <div className="flex w-full h-full">
        <div className="p-6 w-full">
          <div className="w-full h-full overflow-y-scroll p-4 text-black dark:text-white border rounded-lg overflow-hidden border-solid border-[#5f6368] bg-white dark:bg-[#202124]">
            <div className="p-6 text-4xl">
              <h1>Create Notes</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
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
                      className="p-4 title w-full text-black dark:text-white tracking-[.01428571em] break-words bg-[#f3f6fd] dark:bg-[#525355] rounded-lg"
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
                      className="desc text-black dark:text-white w-full h-auto p-3 min-h-[100px] px-4 bg-[#f3f6fd] dark:bg-[#525355] rounded-lg"
                    ></textarea>
                  </div>
                </div>
                {/* category */}
                <div className="relative w-full py-3 px-4 my-1">
                  <div className=" min-h-[30px] mb-4 text-xl">
                    <div className="text-black dark:text-white mb-2">
                      Category
                    </div>
                    <input
                      type="text"
                      placeholder="category"
                      className="p-4 category w-full text-black dark:text-white tracking-[.01428571em] break-words bg-[#f3f6fd] dark:bg-[#525355] rounded-lg"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>
                </div>
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
              {/* preview */}
              <div className="note-preview w-full h-full">
                <div></div>
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
`;
