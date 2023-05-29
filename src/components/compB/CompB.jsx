import React from "react";
import "./compB.css";
import { useState } from "react";

// This is component B starts here with name of AllOutPut according to the example
const AllOutput = ({cendol}) => {
    
    // The variable cendol which gets compB from copmA  as props assigned to the initialState starts here
    const initialState = cendol;
    
    const[changeColor, setChangeColor]=useState(`rgb(0, 172, 114)`)
    const[count, setCount]=useState(initialState);
    const[bgColor, setBgColor]=useState(false);
    const[yellBg, setYellBg]=useState(false);

    const handelCount = () =>{
   
      const randomColors = '#' + Math.random().toString(16).slice(2, 8)
      setChangeColor(randomColors);
      if(count < 12){
         setCount(count + 10);
      }
       
        setYellBg(true)
        setBgColor(!bgColor);
    }

  return (
    <div className="task1">
      {/* child div of task1 starts here */}
      <div className="task1_container">
        {/* square div starts here */}
        <div className="rectangle">
          {/* circle div starts here */}
          <div className="circle" style={{backgroundColor: yellBg? bgColor?`${changeColor}`: 'rgb(0, 172, 114)': 'rgb(235, 176, 27)' }}>
            <h2>{count}</h2>
            <p>Click to increase counter</p>
          </div>
          {/* circle div ends here */}
        </div>
        {/* square div ends here */}

        <button className="button_1" onClick={()=>handelCount()} style={{backgroundColor: bgColor?`${changeColor}`: 'rgb(0, 172, 114)' }}>Change Color</button>
      </div>
      {/* child div of task1 ends here */}
    </div>
  );
};
// This is component B ends here with name of AllOutPut according to the example
export default AllOutput;