import React, { useState } from "react";
// import Notes from "../components/Notes";
import Header from "../components/Header";
// import CreateNote from "../components/CreateNote";
import SideMenu from "../components/SideMenu";
import MainWindow from "../components/MainWindow";

const HomePage = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full overflow-x-hidden dark:bg-[#202124]">
      <Header setSearch={(s) => setSearch(s)} />
      <div className="flex justify-between">
        <SideMenu/>
        <div className="w-full">
         <MainWindow search={search} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
