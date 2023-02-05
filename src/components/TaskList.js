import React from "react";
import Task from "./Task";

function TaskList({ stateTasks, setStateTasks, stateCategory }) {

function deleteTask(text) {
  setStateTasks( stateTasks.filter(task => task.text !== text))
}

const filterByCategory = stateTasks.filter(task => task.category === stateCategory || stateCategory === 'All')

  return (
    <div className="tasks">
      {filterByCategory.map(task => {
        return <Task key={task.text}
                     text={task.text}
                     category={task.category}
                     deleteTask={deleteTask} />
      })}
    </div>
  );
}

export default TaskList;
