import { useState } from "react";


const TaskCreate = () => {

  const [title, setTitle] = useState('');
  const [taskDesc, setTaskDesc] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleTaskChange = (e) => {
    setTaskDesc(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }



  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[450px] bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-center text-xl font-semibold mb-4">Lütfen Task Ekleyiniz!</h3>
        <form className="space-y-4">
          <input
            value={title}
            onChange={handleChange}
            placeholder="Başlık"
            className="w-full p-2 border rounded-md"
          />
          <textarea
            value={taskDesc}
            onChange={handleTaskChange}
            placeholder="Task Giriniz"
            className="w-full p-2 border rounded-md"
            rows="4"
          ></textarea>
          <button onClick={handleSubmit} className="w-full py-2 bg-blue-500 text-white rounded-md">Oluştur</button>
        </form>
      </div>
    </div>
  );
};

export default TaskCreate;
