import React from 'react'
import CheckListCard from '../SmallComponents/CheckListCard'

const NewTask = ({Data}) => {

   return <CheckListCard Label={Data.task.details.category} Title={Data.task.details.title} para={Data.task.details.description} Date={Data.task.details.date} color={"#66B5FC"} />
}

export default NewTask