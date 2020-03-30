import React from "react";
import "./Task.css";
import moment from "moment";
import CompletedTaskButton from "../CompletedTaskButton/CompletedTaskButton";
import DeleteTaskButton from "../DeleteTaskButton/DeleteTaskButton";
import EditTaskButton from "../EditTaskButton/EditTaskButton";
import NotCompletedTaskButton from "../NotCompletedTaskButton/NotCompletedTaskButton";


const Task = props => {

    const handleDeleteClick = () => {
        props.deleteTaskFunc(props.id)
    };

    const handleCompleteClick = () => {
        props.completeTaskFunc(props.id)
    }

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
                        {props.category}
                    </button>
                </div>
                <div className="col-3 col-md-2 col-lg-1">
                        {props.priority}
                </div>
                <div className="col-2 col-md-1 col-lg-1">
                    <div onClick={handleCompleteClick}>
                        {props.completed === true ? <CompletedTaskButton /> : <NotCompletedTaskButton />}
                    </div>
                </div>
                <div className="col-2 col-md-1 col-lg-1">
                    <div onClick={handleDeleteClick}>
                        <DeleteTaskButton />
                    </div>
                </div>
                <div className="col-2 col-md-1 col-lg-1">
                    <EditTaskButton />
                </div>
            </div>
        </div>
    )
}

export default Task;