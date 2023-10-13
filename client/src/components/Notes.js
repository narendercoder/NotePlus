import React, { useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from "../actions/notesActions";

const Notes = ({ search }) => {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, notes } = noteList;

  useEffect(() => {
    dispatch(listNotes());
  }, [dispatch]);

  return (
    <Wrapper className="relative flex w-full h-full mx-auto dark:bg-black bg-gray-100 p-6 ">
      <div className="flex w-full overflow-y-scroll min-h-fit h-full p-6  border rounded-lg overflow-hidden border-solid border-[#5f6368] bg-white dark:bg-[#202124]">
        <div className="flex h-full w-full flex-wrap">
          <div className="flex flex-col w-full">
            <div className="text-4xl text-black dark:text-white">
              <h1>Your Notes</h1>
            </div>
            <div className="notes-tab-contents">
              <div className="flex flex-wrap justify-between"></div>
              <div className="note-content notes-tab-content">
                <div id="note1" className="notes-tab-pane flex flex-wrap py-6 w-full">
                  {loading ? (
                    <div className="text-black dark:text-white text-xl px-5">Loading...</div>
                  ) : (
                    <>
                      {notes?.filter((filteredNote) =>
                          filteredNote.title.toLowerCase().includes(search.toLowerCase())
                        )
                        .reverse()
                        .map((note) => (
                          <Card note={note} />
                        ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Notes;

const Wrapper = styled.div`
  height: calc(100vh - 100px);
`;
