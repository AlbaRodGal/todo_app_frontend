import React, { useState } from "react";
import "../dropdown.css";

function PriorityDropdownMenu() {
  
  return (
    <select>
      <option>Priority</option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select>
  )
}

export default PriorityDropdownMenu;
