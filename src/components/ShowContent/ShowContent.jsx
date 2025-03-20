import React, { useState } from 'react';

const ShowContent = () => {
  const [showContent, setShowContent] = useState("");

  const onShow = () => {
    setShowContent("There are many ways to stimulate your brain and boost dopamine levels. However, the best way to do this is by coding — solving a bug or creating something on your own, without relying on ChatGPT.");
  };

  const onHide = () => {
    setShowContent("");
  };

  return (
    <div className="py-10">
      <div className="flex justify-center gap-8 mb-6">
        <button 
          className="bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900 p-4 text-white text-xl font-semibold rounded-full 
          transform transition duration-300 hover:scale-105 hover:from-purple-700 hover:to-purple-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-40"
          onClick={onShow}
        >
          Göster
        </button>
        
        <button 
          className="bg-gradient-to-r from-green-600 via-green-800 to-green-900 p-4 text-white text-xl font-semibold rounded-full 
          transform transition duration-300 hover:scale-105 hover:from-green-700 hover:to-green-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-40"
          onClick={onHide}
        >
          Gizle
        </button>
      </div>
      
      <div className="text-center">
        {showContent && (
          <h1 className="text-xl text-gray-700 font-medium transition-opacity duration-500 opacity-100">
            {showContent}
          </h1>
        )}
      </div>
    </div>
  );
};

export default ShowContent;
