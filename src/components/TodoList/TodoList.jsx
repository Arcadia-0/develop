import { useState } from "react";


const TodoList = () => {  
const [values,setValues] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskAdd = () => {
    setTasks([...tasks,values]);
    setValues("");
  }

  const handleTaskDelete = (index) => {
    const newTasks = tasks.filter((gorev,gorevIndex)=> gorevIndex !== index);
    setTasks(newTasks)
  }

  const handleChange = (e) => {
    setValues(e.target.value)
    
  }
    

    


  
  return (
    <div className='container mx-auto'>
      <input 
      placeholder="Görev Giriniz:"
      value={values}
      onChange={handleChange} />
     
     <button onClick={handleTaskAdd}>Görev Ekle</button>

     <ul>
      {tasks.map((task,index)=> {
        return <li key={index}>
          {task}
          <button onClick={()=> handleTaskDelete(index)}>Sil</button>
        </li>
       
      })}
     </ul>
    
     
    </div>
  );
};

export default TodoList;  
