import React from 'react'

const Header = ({Data}) => {
  function LogOutUser () {
    localStorage.setItem("LoggedInUser" , "")
    window.location.reload()
  }

  console.log(Data)
  return <>
      <div className='flex text-white font-medium  bg-[#1D1D1D] items-center text-3xl p-10 justify-between '>
        <h1>Hello  <br /> <span className='text-4xl font-semibold cursor-pointer'> {Data.name} 🤝  </span></h1>
        <button onClick={LogOutUser} className='p-2  text-white bg-red hover:brightness-75 px-10 py-3 rounded-sm' >Log Out</button>
    </div>
  </>
}

export default Header