import React, { useState } from "react";
import "./AddNewTask.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import AddTaskButton from "../AddTaskButton/AddTaskButton";


const AddNewTask = (props) => {

    const [taskText, setTaskText] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState();
    const categoryList = ['Home', 'Learning', 'Health'];
    const priorityList = ['High', 'Medium', 'Low'];


    const handleTextChange = (event) => {
        setTaskText(event.target.value)
    }

    const handleDateChange = (event) => {
        setDate(event.target.value)

        //NEED TO FIX DATE//
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const CategoryDropdown = (event) => {
        const [category, CategoryDropdown] = DropdownMenu(" ", " ", categoryList);
        return <CategoryDropdown />
    }

    const PriorityDropdown = (event) => {
        const [priority, PriorityDropdown] = DropdownMenu(" ", " ", priorityList);
        return <PriorityDropdown />
    }

    const handlePriorityChange = (event) => {
        setPriority(event.target.value)
    }

    const handleAddTask = () => {
        props.AddTaskFunc(taskText, date, category, priority)
    }

    return <div className="row m-1">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <input type="text" className="form-control" value={taskText} onChange={handleTextChange} />
        </div>
        <div className="col-12 col-sm-5 col-md-3 col-lg-2">
            <input type="date" className="form-control" value={date} onChange={handleDateChange} />
        </div>
        <div className="col-4 col-sm-3 col-md-2 col-lg-2">
            <div value={category} onChange={handleCategoryChange}>
                <CategoryDropdown />
            </div>
        </div>
        <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <div value={priority} onChange={handlePriorityChange} >
                <PriorityDropdown />
            </div>
        </div>
        <div className="col-4 col-sm-2 col-md-1 col-lg-2">
            <div onClick={handleAddTask}>
                <AddTaskButton />
            </div>
        </div>
    </div>
}

export default AddNewTask;