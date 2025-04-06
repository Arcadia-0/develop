import { useState } from "react";


const TodoList = () => {  
const [deger,setDeger] = useState("");
  const [gorevler, setGorevler] = useState([]);

  const gorevEkle = () => {
    setGorevler([...gorevler,deger]);
    setDeger("");
  }

  const gorevSil = (index) => {
    const yeniGorevler = gorevler.filter((gorev,gorevIndex)=> gorevIndex !== index);
    setGorevler(yeniGorevler)
  }

  const handleChange = (e) => {
    setDeger(e.target.value)
    
  }
    

    


  
  return (
    <div className='container mx-auto'>
      <input 
      placeholder="Görev Giriniz:"
      value={deger}
      onChange={handleChange} />
     
     <button onClick={gorevEkle}>Görev Ekle</button>

     <ul>
      {gorevler.map((gorev,index)=> {
        return <li key={index}>
          {gorev}
          <button onClick={()=> gorevSil(index)}>Sil</button>
        </li>
       
      })}
     </ul>
    
     
    </div>
  );
};

export default TodoList;  
