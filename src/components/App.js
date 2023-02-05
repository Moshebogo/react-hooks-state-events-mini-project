import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

const [stateTasks, setStateTasks] = useState(TASKS)
const [stateCategory, setStateCategory] = useState('All')

console.log('tasks', stateTasks)

function onTaskFormSubmit (newTask) {
     setStateTasks(prevTasks => {
      return [...prevTasks, newTask]
     })
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES}
                      stateCategory={stateCategory}
                      setStateCategory={setStateCategory}
                      setStateTasks={setStateTasks}
                      stateTasks={stateTasks} />

      <NewTaskForm CATEGORIES={CATEGORIES}
                   setStateTasks={setStateTasks}
                   onTaskFormSubmit={onTaskFormSubmit} />

      <TaskList stateTasks={stateTasks}
                setStateTasks={setStateTasks}
                stateCategory={stateCategory} />
    </div>
  );
}

export default App;
