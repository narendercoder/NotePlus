import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTab } from "../actions/tabAction";
import {IoMdAdd} from "react-icons/io"
import {TbNotes} from "react-icons/tb"
import styled from "styled-components";

const SideMenu = ({openSideMenu, setOpenSideMenu}) => {
//  const [menuIcon, setMenuIcon] = useState();
  const dispatch = useDispatch();
  const tabIndex = useSelector((state) => state.tabReducer);

  const activeTab = (index) => {
    dispatch(toggleTab(index));
  };

  const handleClick = (index) =>{
    activeTab(index+1)
    setOpenSideMenu(false)
  }

  const sideIconsList = [
    {
      id: 1,
      icon: IoMdAdd,
      title: "Create Note",
    },
    {
      id: 2,
      icon: TbNotes,
      title: "Notes",
    },
  ];

  return (
    <Wrapper className={`${openSideMenu ? "active" : ""} side-menu bg-white dark:bg-[#27282b] dark:text-white absolute lg:w-[20%] lg:relative lg:top-0 lg:left-0 lg:translate-x-0 lg:inline`}>
      <div className="side-menu-wrapper p-6 h-full">
        <div>
          <ul>
            {sideIconsList.map((items, index) => {
              return (
                <li 
                key={items.id}
                className="side-menu-item w-full mb-2 text-xl"
                title={items.title}
                onClick={()=>handleClick(index)}
                >
                  <div className={`${index === 0 && tabIndex === 0 ? "nav-link active bg-yellow-400 bg-opacity-50 " : (tabIndex === (index + 1) ? "nav-link active bg-opacity-50 bg-yellow-400" : "nav-link dark:text-slate-300") } w-full flex items-center cursor-pointer font-bold px-3 py-2 rounded-xl`} >
                     <items.icon className="icon" />
                     <span className="pl-3">{items.title}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default SideMenu;

const Wrapper = styled.div`
min-height: 100vh;
.nav-link{
  &:hover{
    background-color: rgba(0,0,0,0.05)
  }
}
.nav-link.active{
  &:hover{
    background-color: rgba(250, 204, 21, 0.5);
  }
}

`
