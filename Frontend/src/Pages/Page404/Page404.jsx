import React from 'react';
import { Link } from 'react-router-dom';
import "./Page404.css";

function Page404() {
  return (
    <div className="flex items-center justify-center h-dvh">
      <div className="flex flex-col items-center justify-center p-8 bg-white shadow-lg rounded-lg">
        <div className="text-6xl font-bold text-gray-800 animate-pulse ">404</div>
        <div className="mt-4 text-2xl font-semibold text-gray-600">Page Not Found</div>
        <div className="mt-2 text-gray-500">Sorry, the page you're looking for doesn't exist.</div>
        <Link to="/" className="mt-6 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default Page404;
