import React from 'react'
import Createtasktitles from '../components/SmallComponents/Createtasktitles'
import AdminDashboardInput from '../components/SmallComponents/AdminDashboardInput'

const CreateTasksAdmin = () => {
    return <>
    <div className="w-full my-10 ">
      <div className="p-3 bg-[#1C1C1C] mx-10">
        <form className="flex flex-wrap items-start justify-between px-10 pt-3 pb-5 ">
        <div className="w-1/2">
        <div>
            <Createtasktitles text={"Task Title"} />
            <AdminDashboardInput
              type={"text"}
              placeholder={"You Have To Do This"}
            />
          </div>
          <div>
            <Createtasktitles text={"Date"} />
            <AdminDashboardInput type={"date"} placeholder={""} />
          </div>
          <div>
            <Createtasktitles text={"Assign To "} />
            <AdminDashboardInput type={"text"} placeholder={""} />
          </div>
          <div>
            <Createtasktitles text={"Category"} />
            <AdminDashboardInput
              type={"text"}
              placeholder={"Design , Development and etc...."}
            />
          </div>
          </div>
         
          <div className="w-1/2 flex flex-col">
            <Createtasktitles text={"Description"} />
            <textarea
              name=""
              id=""
              className="p-3 rounded bg-transparent text-white border-2 hover:border-white  border-[#aaaaaa] text-xl"
              cols="40"
              rows="10"
            ></textarea>
          <button className="bg-black text-white px-20 py-4 mt-7 text-xl duration-3s transition-all delay-3s font-semibold rounded hover:text-black hover:bg-white">
            Create Tasks
          </button>
          </div>
        </form>
      </div>
    </div>
  </>
}

export default CreateTasksAdmin