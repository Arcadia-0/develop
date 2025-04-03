import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router'ı dahil ettik
import Count from './components/Count/Count';
import MainPage from './components/MainPage/MainPage';
import ShowContent from './components/ShowContent/ShowContent';
import Random from './components/Random/Random';
import TaskCreate from './components/Todo/TaskCreate';
import TaskList from './components/Todo/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTasks); // Update tasks list
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project1" element={<Count />} />
        <Route path="/project2" element={<ShowContent />} />
        <Route path="/project3" element={<Random />} />
        
        {/* Combine TaskCreate and TaskList in project4 */}
        <Route 
          path="/project4" 
          element={
            <div>
              {/* Task Create form */}
              <TaskCreate onCreate={createTask} />
              
              {/* Task List */}
              <TaskList tasks={tasks} />
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
