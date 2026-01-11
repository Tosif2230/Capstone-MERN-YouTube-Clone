import React from "react";
import Header from "./components/Header.jsx";
import SideBar from "./components/SideBar.jsx";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <>
      <Header />
      <div className="flex mt-12">
        <SideBar />
        <main className={`flex-1 p-4 transition-all ${isSidebarOpen ? "ml-48" : "ml-0"}`}>
          <Outlet/>
        </main>
      </div>
    </>
  );
}

export default App;
