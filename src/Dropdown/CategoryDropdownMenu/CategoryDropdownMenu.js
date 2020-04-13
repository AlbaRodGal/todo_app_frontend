import React, { useState } from "react";
import "../dropdown.css";


function CategoryDropdownMenu() {
  
  return (
    <select>
      <option>Category</option>
      <option value="Chores">Chores</option>
      <option value="Learning">Learning</option>
      <option value="Finances">Finances</option>
      <option value="Appointments">Appointments</option>
    </select>
  )
}

export default CategoryDropdownMenu;
