import React, { useState } from 'react'

const ShowContent = () => {
    
    const [showContent, setShowContent] = useState("");

    const onShow = () => {
        setShowContent("There are many ways to stimulate your brain and boost dopamine levels. However, the best way to do this is by coding — solving a bug or creating something on your own, without relying on Chatgpt")
    }
    const onHide = () => {
        setShowContent("")
    }

  
  
    return (
    <div className=' '>
        <div className='flex justify-center gap-8'>
        <button className='bg-purple-800 p-2 text-white text-2xl font-bold' onClick={onShow}>Göster</button>
        <button onClick={onHide}>Gizle</button>
        </div>
        
        <h1 className='flex flex-col'>{showContent}</h1>
    </div>
  )
}

export default ShowContent