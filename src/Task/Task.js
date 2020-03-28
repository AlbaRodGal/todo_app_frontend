import React from "react";
import "./Task.css";
import moment from "moment";
import CompletedTaskButton from "../CompletedTaskButton/CompletedTaskButton";
import DeleteTaskButton from "../DeleteTaskButton/DeleteTaskButton";
import UrgentTaskButton from "../UrgentTaskButton/UrgentTaskButton";
import EditTaskButton from "../EditTaskButton/EditTaskButton";



function Task(props) {
    //props = {text: "Do the dishes"}
    return (
        <div className="container">
            <div className="row">
                <div className="task col-8 col-md-3 col-lg-4">
                    <p>{props.text}</p>
                </div>
                <div className="date col-4 col-md-2 col-lg-2">
                    {moment(props.dueDate).format('ddd, MMM D')}
                </div>
                <div className="col-3 col-md-2 col-lg-2">
                    <button type="button" class="btn btn-info">
                    {props.tag}
                    </button>
                </div>
                <div className="col-3 col-md-2 col-lg-1">
                    {props.urgent === true ? <UrgentTaskButton />: ""}
                </div>
                <div className="col-2 col-md-1 col-lg-1">
                    {props.completed === true? <CompletedTaskButton />: ""}
                </div>
                <div className="col-2 col-md-1 col-lg-1">
                    <DeleteTaskButton />
                </div>
                <div className="col-2 col-md-1 col-lg-1">
                    <EditTaskButton />              
                </div>
            </div>
        </div>
    )
}

export default Task;