import React, { useState } from "react";
import VideoGrid from "../components/VideoGrid.jsx";
import Filterbar from "../components/Filterbar.jsx";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  return (
    <div className="pt-[96px]">
      <Filterbar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <VideoGrid selectedCategory={selectedCategory} searchQuery={searchQuery} />
    </div>
  );
}

export default Home;
