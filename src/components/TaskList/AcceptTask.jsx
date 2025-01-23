import React from 'react'
import CheckListCard from '../SmallComponents/CheckListCard'

const AcceptTask = ({Data}) => {

  return <> 
   <CheckListCard Label={Data.task.details.category} Title={Data.task.details.title} para={Data.task.details.description} Date={Data.task.details.date} color={"#FFD700"} />  
  </>
}

export default AcceptTask