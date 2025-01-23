import React from "react";

const TaskCards = ({ color, Numbers, Label }) => {
  return (
    <div className={`w-[1000px] h-48 font-semibold  px-9 py-7 rounded-2xl my-3`} style={{
        background : color
    }}>
     <h3 className="text-3xl font-semibold">{Numbers}</h3> 
      <h3 className="text-2xl font-medium">{Label} </h3> 
    </div>
  );
};

export default TaskCards;
