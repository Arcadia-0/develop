import { useState } from "react";

const Todo = () => {

    const [newItem, SetNewItem] = useState("");

    // const onChange = (event) => {
    //     SetNewItem(event.target.value);
    // }

    function addItem(){
        console.log(newItem)
    }
  

  return (
    <div className="flex justify-center">

        <h1>Günlük Plan</h1>

        <input 
        type="text"
        placeholder="plan girin"
        value={newItem}
        onChange={e => SetNewItem(e.target.value)} />
        

        <button onClick={()=> addItem()}>Ekle</button>

        <ul>
            <li>çalış</li>
            <li>çalış</li>
            <li>çalış</li>
        </ul>

    </div>
  );
}

export default Todo;
