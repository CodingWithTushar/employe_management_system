import Header from "../SmallComponents/Header";
import TaskListCheckList from "../SmallComponents/TaskListCheckList";
import TaskList from "../SmallComponents/TaskList";

export function EmployeeDashBoard({Data}) {
console.log(Data)

  return (
    <>
      <div className="p-10 h-full bg-gradient-to-t from-[#393636] bg-[#1c1c1c]">
        <div className="">
            <Header Data={Data}/>
            <TaskList Data={Data}/>
            <TaskListCheckList Data={Data}/>
        </div>
      </div>
    </>
  );
}
