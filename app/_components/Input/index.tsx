"use client";

import { useState } from "react";
import NameSelect from "../NameSelect";
import TaskSelect from "../TaskSelect";
import TimeInput from "../TimeInput";
import { style } from "./style";

const Input = () => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   setInput({...input, time: e.target.value as unknown as number});
  };
  
  const handleTask = (e: React.ChangeEvent<HTMLSelectElement>) => {
   setInput({...input, task: e.target.value}) 
  }
  
  const handleName = (e: React.ChangeEvent<HTMLSelectElement>) => {
   setInput({...input, name: e.target.value})
  }

  const [input, setInput] = useState({
    task: "",
    name: "",
    time: 0.25,
  });

  const handleClick = () => {
    console.log(input)
  }


  return (
    <div className={style}>
      <TaskSelect value={input.task} onChange={handleTask}/>
      <NameSelect value={input.name} onChange={handleName}/>
      <TimeInput time={input.time} handleChange={handleChange} />
      <button onClick={handleClick}>追加する</button>
    </div>
  );
};

export default Input;
