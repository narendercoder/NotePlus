import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTab } from "../actions/tabAction";
import {IoMdAdd} from "react-icons/io"
import {TbNotes} from "react-icons/tb"
import styled from "styled-components";

const SideMenu = () => {
//  const [menuIcon, setMenuIcon] = useState();
  const dispatch = useDispatch();
  const tabIndex = useSelector((state) => state.tabReducer);

  const activeTab = (index) => {
    dispatch(toggleTab(index));
  };
  console.log(tabIndex)

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
    <Wrapper className="p-6 dark:text-white w-1/6 h-screen ">
      <div>
        <div>
          <ul>
            {sideIconsList.map((items, index) => {
              return (
                <li 
                key={items.id}
                className="side-menu-item w-full mb-2 text-xl"
                title={items.title}
                onClick={() => activeTab(index+1)}
                >
                  <div className={`${index === 0 && tabIndex === 0 ? "nav-link active text-yellow-400" : (tabIndex === (index + 1) ? "nav-link active  text-yellow-400" : "nav-link text-slate-500") } w-full flex  items-center cursor-pointer font-bold px-3 py-2`} >
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
height: calc(100vh - 100px);
.nav-link.active{
    background-color: rgba(0,0,0,0.05);
    border-radius: 10px;
}
`
