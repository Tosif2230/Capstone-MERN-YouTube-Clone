import React from "react";
import { Link, useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();
  const status = error?.status || 404;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      
      {/* Error Illustration */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <img
          src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
          alt="Error"
          className="w-32 sm:w-40"
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-red-600">
          {status}
        </h1>
      </div>

      {/* Message */}
      <p className="text-base sm:text-lg text-gray-700">
        This page isn't available. Sorry about that.
      </p>
      <p className="text-base sm:text-lg text-gray-700 mb-6">
        Try searching for something else.
      </p>

      {/* Home Link */}
      <Link
        to="/"
        className="flex items-center gap-2 text-xl font-semibold hover:opacity-80"
      >
        <img
          src="https://www.youtube.com/s/desktop/12b1ec61/img/favicon_32x32.png"
          alt="YouTube"
          className="h-7"
        />
        YouTube Clone
      </Link>
    </div>
  );
}

export default NotFound;
