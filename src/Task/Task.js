import React from "react";
import "./Task.css";

function Task(props) {
    //props = {text: "Do the dishes"}
    return (
        <div className="row">
            <div className="col">
            <p className="task"><button className="btn"><i className="fa fa-trash fa-2x"></i></button>{props.text}  {props.urgent === true ? <button type="button" class="btn btn-danger">Urgent</button>: ""} {props.completed === true? <button type="button" class="btn btn-success">Done</button> : ""}
</p>
            </div>
        </div>
    )
}

export default Task;