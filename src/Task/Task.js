import React, { useState } from "react";
import "./Task.css";
import moment from "moment";
import EditTaskButton from "../EditTaskButton/EditTaskButton";
import Button from "../Button/Button";

const Task = props => {
    
    //TODO 
     // Create object: key is priority and value is button
     //Filter to show the correct button

    const [priorities, setPriorities] = useState([
    {level:"High", style: <Button buttonStyle={"btn--high--solid"}>{props.priority}</Button>},
    {level: "Medium", style: <Button buttonStyle={"btn--warning--solid"}>{props.priority}</Button>},
    {level: "Low", style: <Button buttonStyle={"btn--low--solid"}>{props.priority}</Button> }
    ])

    const handleDeleteClick = () => {
        props.deleteTaskFunc(props.id);
    };

    const handleCompleteClick = () => {
        props.completeTaskFunc(props.id);
    };

    const setPriorityStyling = (id) => {
       const prioritiesStyling = Object.priorities.filter(function(level) {
            props.priority.includes(priorities['level'])? true : false
        })
        setPriorities(prioritiesStyling)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="task col-8 col-md-3 col-lg-4">
                    <p>{props.text}</p>
                </div>
                <div className="date col-4 col-md-2 col-lg-2">
                    {moment(props.dueDate).format("ddd, MMM D")}
                </div>
                <div className="col-3 col-md-2 col-lg-2">
                    <Button buttonStyle={"btn--info--solid"}>
                        {props.category}
                    </Button>
                </div>
                <div className="col-3 col-md-2 col-lg-1">
                        {props.PriorityStyling}
                </div>
                <div className="col-2 col-md-1 col-lg-1">
                    <div onClick={handleCompleteClick}>
                        {props.completed === true ? <Button buttonStyle={"btn--success--solid"}>Done</Button> :
                            <Button buttonStyle={"btn--secondary--outline"}>Pending</Button>}
                    </div>
                </div>
                <div className="col-2 col-md-1 col-lg-1">
                    <div onClick={handleDeleteClick}>
                        <svg className="bi bi-trash-fill" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clipRule="evenodd" /></svg>
                    </div>
                </div>
                <div className="col-2 col-md-1 col-lg-1">
                    <EditTaskButton />
                </div>
            </div>
        </div>
    );
};

export default Task;
