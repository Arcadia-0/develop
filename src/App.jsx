import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router'ı dahil ettik
import Count from './components/Count/Count';
import MainPage from './components/MainPage/MainPage';
import ShowContent from './components/ShowContent/ShowContent';
import Random from './components/Random/Random';

function App() {
  return (
    <Router>
      <Routes>
        {/* Anasayfa Route'u */}
        <Route path="/" element={<MainPage />} />
        
        {/* Projeler için ayrı route'lar */}
        <Route path="/project1" element={<Count />} />
        <Route path="/project2" element={<ShowContent />} />
        <Route path="/project3" element={<Random />} />
      
      </Routes>
    </Router>
  );
}

export default App;
