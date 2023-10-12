import React, { useState } from "react";
import Notes from "../components/Notes";
import Header from "../components/Header";
import CreateNote from "../components/CreateNote";

const HomePage = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full overflow-x-hidden">
      <Header setSearch={(s) => setSearch(s)} />
      <CreateNote/>
      <Notes search={search} />
    </div>
  );
};

export default HomePage;
