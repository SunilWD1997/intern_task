import React from 'react'
import './task3.css';
import { useState } from 'react';

const Task3 = () => {

    const[bgColor, setBgColor]=useState(true);

  return (
    <div className='task3'>
        
        <button className='button_3' style={{ backgroundColor: bgColor? `red`: `blue` }} onClick={()=>setBgColor(!bgColor)}>
            {bgColor?`True`: `False`}
        </button>
    </div>
  )
}

export default Task3