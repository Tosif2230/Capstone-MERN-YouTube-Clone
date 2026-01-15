import React from "react";

function Filterbar({ selectedCategory, setSelectedCategory }) {
  const categories = [
    "All",
    "HTML",
    "CSS",
    "C",
    "Python",
    "React",
    "Java",
    "NodeJS",
    "MongoDB",
    "ExpressJS",
    "Gaming",
  ];

  return (
    <div className="z-40 top-12 fixed bg-white w-full shadow-sm">
      <ul
        className="flex gap-3 px-3 py-2
          overflow-x-auto
          scrollbar-hide
          whitespace-nowrap"
      >
        {categories.map((item) => (
          <li
            key={item}
            onClick={() => setSelectedCategory(item)}
            className={`px-4 py-1 rounded cursor-pointer text-sm transition
              ${
                selectedCategory === item
                  ? "bg-black text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filterbar;
