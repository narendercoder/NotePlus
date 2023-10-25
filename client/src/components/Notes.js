import React, { useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from "../actions/notesActions";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Searchbox from "./Searchbox";

const Notes = ({ search, setSearch }) => {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, notes } = noteList;


  useEffect(() => {
    dispatch(listNotes());
  }, [dispatch]);

  return (
    <Wrapper className="relative flex flex-col lg:flex-row w-full mx-auto dark:bg-black bg-gray-100 p-6 ">
      {/* search */}
      <div className="lg:hidden flex justify-center items-center w-full mb-12">
        <Searchbox setSearch={setSearch} />
      </div>

      <div className="flex w-full border rounded-lg overflow-hidden border-solid border-[#5f6368] bg-white dark:bg-[#202124]">
        <div className="flex  w-full flex-wrap  overflow-hidden h-full overflow-y-scroll">
          <div className="flex flex-col w-full py-8 px-6">
            <div className="text-4xl text-black dark:text-white">
              <h1>Your Notes</h1>
            </div>
            <div className="notes-tab-contents h-full">
              {/* <div className="flex flex-wrap justify-between"></div> */}
              <div className="note-content notes-tab-content h-full ">
                <div id="note1" className="notes-tab-pane py-6 w-full h-full">
                  {loading ? (
                    <div className="text-[#768492] text-xl px-5 flex justify-center items-center">
                      Loading...
                    </div>
                  ) : <>
                    {
                      notes?.length === 0 ?
                      <div className="text-[#768492]  flex flex-col justify-center items-center w-full h-full">
                         <img src="notes-with-man.png" alt="illustration" className="py-3" />
                        <h1 className="font-bold py-3 text-2xl dark:text-white">It's Empty</h1>
                        <span className="text-xl w-64 text-center">Hmm.. looks like you don't have any notes</span>
                        </div>
                       : <ResponsiveMasonry
                      columnsCountBreakPoints={{
                        500: 1,
                        600: 2,
                        1020: 2,
                        1100: 3,
                      }}
                    >
                      <Masonry>
                        {notes?.filter((filteredNote) =>filteredNote.title.toLowerCase().includes(search.toLowerCase()))
                          .reverse()
                          .map((note) => (
                            <Card key={note._id} note={note} />
                          ))
                          }
                      </Masonry>
                    </ResponsiveMasonry>
                    }
                  </>}
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
  min-height: 100vh;
  max-height: calc(150vh - 100px);
`;
