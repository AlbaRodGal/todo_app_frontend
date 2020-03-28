import React from "react";
import "./Task.css";
import moment from "moment";
import CompletedTaskButton from "../CompletedTaskButton/CompletedTaskButton";
import DeleteTaskButton from "../DeleteTaskButton/DeleteTaskButton";
import UrgentButton from "../UrgentTaskButton/UrgentTaskButton";



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
                    {props.urgent === true ? <UrgentTaskButton />:""}
                </div>
                <div className="col-2 col-md-1 col-lg-1">
                    {props.completed === true? <CompletedTaskButton />: ""}
                </div>
                <div className="col-2 col-md-1 col-lg-1">
                    <DeleteTaskButton />
                </div>
                <div className="col-2 col-md-1 col-lg-1">
                    <svg class="bi bi-pencil" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" clip-rule="evenodd" />
                        <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z" clip-rule="evenodd" />
                    </svg>                
                </div>
            </div>
        </div>
    )
}

export default Task;