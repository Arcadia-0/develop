import { useState } from "react";


const TodoList = () => {  


    const [deger, setDeger] = useState("");
    const [gorevler, setGorevler] = useState([]);

    const degerDegistir = (e) => {
        setDeger(e.target.value);
        
    }

    const addGorev = () => {
    setGorevler([...gorevler, deger]);  // Eğer spread operatoru kullanmazsak, Her yeni görev ekle dediğimizde aynı görevi güncellemiş olur yeni görev eklememiş oluruz. Ancak spread operatörü kullanırsak, eski göreve yenilerini de eklemiş oluruz. 
    setDeger("");
    }

    


  
  return (
    <div className='container mx-auto'>
      <input 
      placeholder="Görev Giriniz:"
      value={deger}
      onChange={degerDegistir} />

      <button onClick={addGorev}>Görev Ekle</button>
    

      <ul>
        {gorevler.map((gorev,index)=>{
            return <li key={index}>{gorev}</li>
        })}
      </ul>
    </div>
  );
};

export default TodoList;  
