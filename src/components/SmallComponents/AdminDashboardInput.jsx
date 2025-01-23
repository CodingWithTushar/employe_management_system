import React from 'react'

const AdminDashboardInput = ({type,placeholder}) => {
  return (
    <input type={type} placeholder={placeholder} className='p-3 rounded w-[650px] bg-transparent border-[#aaaaaa] border-2 hover:border-white text-white text-lg ' />
  )
}

export default AdminDashboardInput