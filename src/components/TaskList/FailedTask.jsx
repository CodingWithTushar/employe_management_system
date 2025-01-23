import React from 'react'
import CheckListCard from '../SmallComponents/CheckListCard'

const FailedTask = ({Data}) => {

   return <CheckListCard Label={Data.task.details.category} Title={Data.task.details.title} para={Data.task.details.description} Date={Data.task.details.date} color={"#FF5733"} />
}

export default FailedTask