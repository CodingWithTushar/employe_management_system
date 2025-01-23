import React from 'react'
import TaskCards from './TaskCard'

function TaskList({Data}) {

  console.log(Data.task.status.active)
  return <>
      <div className='flex  justify-evenly gap-10 px-10 my-20'>
        <TaskCards color={"#66B5FC"} Numbers={Data.task.status.active} Label={"New Tasks"}/>
        <TaskCards color={"#FFD700"} Numbers={Data.task.status.newTask} Label={"Accepted"}/>
        <TaskCards color={"#76D987"} Numbers={Data.task.status.completed} Label={"Completed"}/>
        <TaskCards color={"#FF5733"} Numbers={Data.task.status.failed} Label={"Failed"} />
        </div>
  </>
}

export default TaskList