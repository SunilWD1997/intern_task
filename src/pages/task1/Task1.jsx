import React from "react";
import "./task1.css";
import { useState } from "react";

const Task1 = () => {
    
    const initialState = 0;
    
    const[count, setCount]=useState(initialState);
    const[bgColor, setBgColor]=useState(true);

    const handelCount = () =>{
        setCount(count + 1);
        setBgColor(false);
    }

  return (
    <div className="task1">
      {/* child div of task1 starts here */}
      <div className="task1_container">
        {/* square div starts here */}
        <div className="rectangle">
          {/* circle div starts here */}
          <div className="circle" style={{backgroundColor: bgColor?'': 'rgb(0, 172, 114)' }}>
            <h2>{count}</h2>
            <p>Click to increase counter</p>
          </div>
          {/* circle div ends here */}
        </div>
        {/* square div ends here */}

        <button className="button_1" onClick={()=>handelCount()} style={{backgroundColor: bgColor?'': 'rgb(0, 172, 114)' }}>Change Color</button>
      </div>
      {/* child div of task1 ends here */}
    </div>
  );
};

export default Task1;
