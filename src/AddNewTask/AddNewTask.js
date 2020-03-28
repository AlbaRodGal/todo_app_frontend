import React from "react";
import "./AddNewTask.css";
import "../UrgentTaskButton/UrgentTaskButton"
import "../PriorityDropdownButton/PriorityDropdownButton"
import PriorityDropdownButton from "../PriorityDropdownButton/PriorityDropdownButton";

function AddNewTask() {
    return <div className="row m-1">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <input type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-5 col-md-3 col-lg-2" newTask>
                <input type="date" className="form-control" />
            </div>
            <div className="col-4 col-sm-3 col-md-2 col-lg-2">
                <div class="btn-group">
                    <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Category
            </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Home</a>
                        <a class="dropdown-item" href="#">Learning</a>
                        <a class="dropdown-item" href="#">Work</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
            </div>
            <div className="col-4 col-sm-2 col-md-2 col-lg-2">
                    <PriorityDropdownButton />
            </div>
            <div className="col-4 col-sm-2 col-md-1 col-lg-2">
                <button class="btn btn-secondary add">Add</button>
            </div>
        </div>
}

export default AddNewTask;