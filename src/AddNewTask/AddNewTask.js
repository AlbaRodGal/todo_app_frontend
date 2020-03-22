import React from "react";
import "./AddNewTask.css";


function AddNewTask() {
    return <div className="row m-1">
        <div className="col-12 col-md-4 newTask">
            <input type="text" className="form-control" />
        </div>
        <div className="col-6 col-md-3" newTask>
            <input type="date" className="form-control" />
        </div>
        <div className="col-2 col-md-2">
            <div class="btn-group">
                <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Category
            </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </div>
        </div>
        <div className="col-2 col-md-2">
            <div class="btn-group">
                <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Priority
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </div>
        </div>
        <div className="col-2 col-md-1">
            <button class="btn btn-secondary add">Add</button>
        </div>
    </div>
}

export default AddNewTask;