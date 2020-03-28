import React from "react";
import "./Task.css";
import moment from "moment";
import CompletedTaskButton from "../CompletedTaskButton/CompletedTaskButton";
import DeleteTaskButton from "../DeleteTaskButton/DeleteTaskButton";
import UrgentTaskButton from "../UrgentTaskButton/UrgentTaskButton";
import EditTaskButton from "../EditTaskButton/EditTaskButton";


const Task = props => {

    const handleClick = () => {
        console.log("Delete button was clicked");
        console.log(props.id)
        props.deleteTaskFunc(props.id)
    };

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
                    <button type="button" className="btn btn-info">
                        {props.tag}
                    </button>
                </div>
                <div className="col-3 col-md-2 col-lg-1">
                    {props.urgent === true ? <UrgentTaskButton /> : ""}
                </div>
                <div className="col-2 col-md-1 col-lg-1">
                    {props.completed === true ? <CompletedTaskButton /> : ""}
                </div>
                <div className="col-2 col-md-1 col-lg-1">
                    <button onClick={handleClick}>
                        <svg className="bi bi-trash-fill" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clipRule="evenodd" /></svg>
                    </button>
                </div>
                <div className="col-2 col-md-1 col-lg-1">
                    <EditTaskButton />
                </div>
            </div>
        </div>
    )
}

export default Task;