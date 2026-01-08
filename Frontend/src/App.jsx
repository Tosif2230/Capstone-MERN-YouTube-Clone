import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
      </div>
      <div className="flex">
        <Home/>
      </div>
    </div>
  );
}

export default App;
