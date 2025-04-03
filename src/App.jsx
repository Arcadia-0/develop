import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router'ı dahil ettik
import Count from './components/Count/Count';
import MainPage from './components/MainPage/MainPage';
import ShowContent from './components/ShowContent/ShowContent';
import Random from './components/Random/Random';
import TodoList from './components/TodoList/TodoList';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project1" element={<Count />} />
        <Route path="/project2" element={<ShowContent />} />
        <Route path="/project3" element={<Random />} />
        <Route path="/project4" element={<TodoList />} />
        
       
       
      </Routes>
    </Router>
  );
}

export default App;
