import React from 'react'
import { useSelector } from 'react-redux';
import CreateNote from "./CreateNote"
import Notes from './Notes';
import styled from 'styled-components';

const MainWindow = ({search, setSearch}) => {
    const tabIndex = useSelector((state) => state.tabReducer);
  return (
    <Wrapper>
        <div className='window-content w-full h-full'>
        <div className={tabIndex === 1 ? "tab-pane active" : "tab-pane "}>
          <CreateNote />
        </div>
        <div className={tabIndex === 2 ? "tab-pane active" : "tab-pane"}>
          <Notes search={search} setSearch={setSearch} />
        </div>
        </div>
    </Wrapper>
  )
}

export default MainWindow;

const Wrapper = styled.div`
 .tab-pane {
    display: none;
  }
  .tab-pane.active {
    display: block;
  }
`