import React, { useState } from "react";
import styled from "styled-components";
import NoteModel from "./NoteModel";

const Card = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

  return (
    <Wrapper className="m-4 h-full flex justify-center items-center" onClick={openModal} >
      <div className="m-h-[28px] w-[240px] flex flex-col items-center text-white border h-full rounded-lg overflow-hidden border-solid border-[#5f6368] bg-[#202124]"  >
        <div className="min-h-[60px] w-full">
          <div className="title pt-3 min-h-[38px] px-4 text-base">Samudra manthan</div>
          <div contentEditable="false" suppressContentEditableWarning={true} role="textbox" aria-multiline="true" className="desc py-3 px-4 my-1 min-h-[30px] text-sm tracking-[.01428571em]">
            hello
          </div>
        </div>
        <div className="relative flex items-center"></div>
      </div>
      <NoteModel isOpen={isOpen} closeModal={closeModal} />
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  /* box-shadow: inset 1px 1px 0 rgba(0,0,0,.1), inset 0 -1px 0 rgba(0,0,0,.07); */
`;
