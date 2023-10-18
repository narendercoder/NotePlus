import React, { useState } from "react";
// import Notes from "../components/Notes";
import Header from "../components/Header";
// import CreateNote from "../components/CreateNote";
import SideMenu from "../components/SideMenu";
import MainWindow from "../components/MainWindow";
import styled from "styled-components";
import NoteModel from "../components/model/NoteModel";

const HomePage = ({openModal, handleThemeSwitch}) => {
  const [search, setSearch] = useState("");
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <Wrapper className="w-full overflow-x-hidden dark:bg-[#202124]">
      <Header handleThemeSwitch={handleThemeSwitch} setSearch={(s) => setSearch(s)} openSideMenu={openSideMenu} setOpenSideMenu={setOpenSideMenu} />
      <div className="relative flex justify-between">
        <SideMenu  openSideMenu={openSideMenu} setOpenSideMenu={setOpenSideMenu} />
        <div className={`${openSideMenu? "active" : ""} bg-overlay`}></div>
        <div className="lg:w-10/12 w-full ">
         <MainWindow search={search} setSearch={(s) => setSearch(s)} />
         <NoteModel openModal={openModal} />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
 transition: all 0.5s linear;

@media (max-width: 1024px) {
  .side-menu{
  transition: all 0.2s linear;
  top: 0;
  left: 0;
  transform: translateX(-1000px);;
  z-index: 45;
  width: 40%;
  height: 100%;
  .side-menu-wrapper{
    height:100%
  }
}
}

.side-menu.active{
  transform: translateX(0px);
}

.bg-overlay.active{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.1);
  z-index: 44;
}

`
