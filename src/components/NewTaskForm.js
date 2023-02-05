import React, { useState } from "react";

function NewTaskForm({ CATEGORIES, onTaskFormSubmit }) {


  const [stateText, setStateText] = useState('')
  const [stateCategory, setStateCategory] = useState('Code')

  return (
    <form className="new-task-form"
          onSubmit={ (e) => {
            e.preventDefault()
            
            onTaskFormSubmit({
      text: stateText,
      category: stateCategory,
     })}}>
      <label>
        Details
        <input type="text" name="text" 
          value={stateText}
          onChange={ (e) => setStateText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select name="category"
                value={stateCategory}
                onChange={ (e) => setStateCategory(e.target.value)}  >

          {CATEGORIES.map(category => {
            if (category !== 'All') {
                 return <option key={category}>{category}</option>
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
