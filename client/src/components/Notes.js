import React, { useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from "../actions/notesActions";

const Notes = ({search }) => {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const {loading, notes } = noteList;

  console.log(notes);

  useEffect(()=>{
    dispatch(listNotes());
  }, [dispatch])

  return (
    <Wrapper className="relative flex  w-full mx-auto mt-8">
      <div className="flex w-full overflow-y-scroll">
        <div className="flex h-fit mt-7 justify-center w-full flex-wrap">
          {
            loading ? <div className="text-white">
              Loading...
            </div> : <>
            {notes &&
            notes
              .filter((filteredNote) =>
                filteredNote.title.toLowerCase().includes(search.toLowerCase())
              )
              .reverse()
              .map((note) => <Card note={note} />)}
            </>
          } 
        </div>
      </div>
    </Wrapper>
  );
};

export default Notes;

const Wrapper = styled.div`
  height: calc(100vh - 100px);
`;
