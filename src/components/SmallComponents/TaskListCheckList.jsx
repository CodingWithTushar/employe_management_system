import React from 'react'
import CheckListCard from './CheckListCard'
import CompleteTask from '../TaskList/CompleteTask'
import FailedTask from '../TaskList/FailedTask'
import NewTask from '../TaskList/NewTask'
import AcceptTask from '../TaskList/AcceptTask'

const TaskListCheckList = ({Data}) => {
console.log(Data)

  return (
    <div id='TaskListCheckList' className=' h-[430px] p-10 pr-15 rounded-lg flex items-center  justify-start flex-nowrap gap-5 overflow-x-auto'>

       
    <CompleteTask Data={Data} />
    <FailedTask Data={Data}/>
    <NewTask Data={Data}/>
    <AcceptTask Data={Data}/>
    <CompleteTask Data={Data} />
    <FailedTask Data={Data}/>
    <NewTask Data={Data}/>
    <AcceptTask Data={Data}/>
      
    </div>
  )
}

export default TaskListCheckList