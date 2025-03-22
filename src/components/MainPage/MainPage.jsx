import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-screen flex items-center justify-center">
      <div className="text-center p-12 bg-white bg-opacity-10 rounded-3xl shadow-xl w-full md:w-3/4 lg:w-1/2">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-12">
          Projeler
        </h1>

        <div className="flex flex-col gap-6">
          {/* Proje 1 Linki */}
          <Link
            to="/project1"
            className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 px-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:from-teal-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-teal-400 w-72 mx-auto text-center"
          >
            <span className="text-xl font-semibold">Proje 1: Count Component</span>
          </Link>

          {/* Proje 2 Linki */}
          <Link
            to="/project2"
            className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 px-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:from-teal-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-teal-400 w-72 mx-auto text-center"
          >
            <span className="text-xl font-semibold">Proje 2: ShowContent Component</span>
          </Link>
           {/* Proje 3 Linki */}
           <Link
            to="/project3"
            className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 px-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:from-teal-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-teal-400 w-72 mx-auto text-center"
          >
            <span className="text-xl font-semibold">Proje 3: Random Component</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
