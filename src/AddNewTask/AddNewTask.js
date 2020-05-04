import React, { useState } from "react";
import "./AddNewTask.css";
import Button from "../Button/Button"
import CategoryDropdownMenu from "../Dropdown/CategoryDropdownMenu/CategoryDropdownMenu";
import PriorityDropdownMenu from "../Dropdown/PriorityDropdownMenu/PriorityDropdownMenu";


const AddNewTask = (props) => {

    const [taskText, setTaskText] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState("");
  
    const handleTextChange = (event) => {
        setTaskText(event.target.value)
    }

    const handleDateChange = (event) => {
        setDate(event.target.value)
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const handlePriorityChange = (event) => {
        setPriority(event.target.value)
    }

    const handleAddTask = () => {
        props.AddTaskFunc(taskText, date, category, priority)
    }

    return <div className="row m-1">
        <div className="col-12 col-sm-12 col-md-4 col-lg-5">
            <input type="text" className="form-control" value={taskText} onChange={handleTextChange} />
        </div>
        <div className="col--12 col-sm-5 col-md-3 col-lg-2">
            <input type="date" className="add-date" value={date} onChange={handleDateChange} />
        </div>
        <div className="col-6 col-sm-3 col-md-2 col-lg-2">
            <div value={category} onChange={handleCategoryChange}>
                <CategoryDropdownMenu />
            </div>
        </div>
        <div className="col-6 col-sm-2 col-md-2 col-lg-2">
            <div value={priority} onChange={handlePriorityChange} >
                <PriorityDropdownMenu />
            </div>
        </div>
        <div className="col-12 col-sm-2 col-md-1 col-lg-1">
            <div onClick={handleAddTask}>
                <Button buttonStyle ={'btn--primaty--solid'}>
                Add
                </Button>
            </div>
        </div>
    </div>
}

export default AddNewTask;