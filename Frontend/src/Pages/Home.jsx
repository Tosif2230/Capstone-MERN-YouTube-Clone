import React, { useState } from "react";
import VideoGrid from "../components/VideoGrid.jsx";
import Filterbar from "../components/Filterbar.jsx";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div>
      <Filterbar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <VideoGrid selectedCategory={selectedCategory} />
    </div>
  );
}

export default Home;
