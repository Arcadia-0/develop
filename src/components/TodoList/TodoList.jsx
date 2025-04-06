import { useState } from "react";

const TodoList = () => {  
  const [values, setValues] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskAdd = () => {
    if (values.trim() !== "") {
      setTasks([...tasks, values]);
      setValues("");
    }
  }

  const handleTaskDelete = (index) => {
    const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  }

  const handleChange = (e) => {
    setValues(e.target.value);
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Görev Listesi</h2>

      <input 
        placeholder="Görev Giriniz"
        value={values}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button 
        onClick={handleTaskAdd} 
        className="cursor-pointer w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Görev Ekle
      </button>

      <ul className="mt-6 space-y-4">
        {tasks.map((task, index) => {
          return (
            <li key={index} className="flex justify-between items-center p-3 bg-gray-100 rounded-md">
              <span className="text-gray-700">{task}</span>
              <button 
                onClick={() => handleTaskDelete(index)} 
                className="cursor-pointer bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200"
              >
                Sil
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
