import React from 'react'

const TaskShow = ({task}) => {
  return (
    <div>
        <h3>{task.title}</h3>
        <p>{task.taskDesc}</p>
    </div>
  )
}

export default TaskShow