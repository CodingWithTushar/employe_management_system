import React from 'react'

const CheckListCard = ({color , Label , Date , Title , para}) => {
  return <>
  <div className=' h-full rounded-xl w-[370px] font-semibold flex-shrink-0 p-5 overflow-hidden' style={{background:color}}>
        <div className='flex text-lg justify-around items-center mb-5'>
          <h3 className='bg-white px-3 py-1 rounded '>{Label}</h3>
          <h4 className='text-sm '>{Date}</h4>
        </div>
        <h2 className='text-2xl font-bold'>{Title}</h2>
        <p className='text-lg my-3 overflow-y-auto'> {para}</p>
        
        <div className='flex justify-between mt-28'>
          <button className='bg-black text-white py-1 px-2 rounded hover:shadow hover:shadow-black'>Mark as Completed</button>
          <button className='bg-black text-white py-1 px-2 rounded hover:shadow hover:shadow-black'>Mark as Completed</button>
        </div>
       </div>
       
  </>
    
}

export default CheckListCard