import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import { useSelector } from "react-redux";

function App() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <>
      <Header />
      <div className="flex mt-12">
        <SideBar />
        <main
          className={`flex-1 p-4 transition-all ${
            isSidebarOpen ? "ml-48" : "ml-0"
          }`}
        >
          <Home />
        </main>
      </div>
    </>
  );
}

export default App;
