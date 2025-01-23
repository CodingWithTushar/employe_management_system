import React from 'react'
import CheckListCard from '../SmallComponents/CheckListCard'

const CompleteTask = ({Data}) => {
   return<CheckListCard Label={Data.task.details.category} Title={Data.task.details.title} para={Data.task.details.description} Date={Data.task.details.date} color={"#76D987"} />
}

export default CompleteTask