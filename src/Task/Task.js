import React from "react";
import "./Task.css";
import moment from "moment";

function Task(props) {
    //props = {text: "Do the dishes"}
    return (
        <div className="row">
            <div className="col-md-4">
                <p>Task</p>
            </div>
            <div className="col-md-2">
                <p>Tag</p>
            </div>
            <div className="col-md-2">
                <p>dueDate</p>
            </div>
            <div className="col-md-2">
                <p>urgent</p>
            </div>
            <div className="col-md-2">
                <p>completed</p>
            </div>
        </div>
    )
}

export default Task;