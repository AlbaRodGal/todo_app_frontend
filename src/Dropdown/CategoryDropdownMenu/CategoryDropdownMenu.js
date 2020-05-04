import React, { useState } from "react";
import "../dropdown.css";


function CategoryDropdownMenu(props) {

  return (
    <select onChange={props.handleCategoryChangeFunc}>
      <option>Category</option>
      <option value="Chores">Chores</option>
      <option value="Learning">Learning</option>
      <option value="Finances">Finances</option>
    </select>
  )
}

export default CategoryDropdownMenu;
