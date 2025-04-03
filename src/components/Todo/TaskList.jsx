import React from 'react'
import TaskShow from './TaskShow'

const TaskList = ({tasks}) => {
  return (
    <div>
      {tasks.map((task)=>{
        return (
          <TaskShow key={task.id} task={task}/>
        )
      })}
    </div>
  )
}

export default TaskList