import React from "react";
import { Link, useRouteError } from "react-router-dom";

function NotFound() {
  let err = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="flex">
        <img
        className="justify-center items-center"
        src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
        alt="monkey"
      />
      <h1 className="justify-center text-5xl  text-red-600">{err.status}</h1>
      </div>
      <p className="text-[17px] text-gray-700">This page isn't available. Sorry about that.</p>
      <p className="text-[17px] text-gray-700">Try searching for something else.</p>

      <Link to="/"><h1 className="flex items-center text-[22px] font-semibold">
        <img
          src="https://www.youtube.com/s/desktop/12b1ec61/img/favicon_32x32.png"
          alt="YouTube"
          className="h-8 w-auto"
        />
        YouTube Clone
      </h1></Link>
    </div>
  );
}

export default NotFound;
