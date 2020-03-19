import React from "react";
import "./Task.css";
import moment from "moment";

function Task(props) {
    //props = {text: "Do the dishes"}
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <p>Task</p>
                </div>
                <div className="col-md-2">

                </div>
                <div className="col-md-2">
                    <button type="button" class="btn btn-danger">Urgent</button>
                </div>
                <div className="col-md-2">
                    <button type="button" class="btn btn-light">Delete</button>
                </div>
                <div className="col-md-2">
                    <button type="button" class="btn btn-success">Done</button>
                </div>
            </div>
        </div>
    )
}

export default Task;