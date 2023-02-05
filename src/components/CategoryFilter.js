import React from "react";

function CategoryFilter({ CATEGORIES, stateCategory, setStateCategory }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map(category => {
           const className = category === stateCategory ? 'selected' : null
        return <button key={category}
                       className={className}
                       onClick={ () => setStateCategory(category)}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
