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
    <div className="flex z-50 top-12 fixed bg-white w-full">
      <ul className="flex gap-3">
        {categories.map((item) => (
          <li
            key={item}
            onClick={() => setSelectedCategory(item)}
            className={`px-4 py-1 rounded cursor-pointer text-sm whitespace-nowrap
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
