import React from "react";
import "./TaskCount.css"
function TaskCount(props) {
    return (
        <p>You have {props.count} tasks</p>
    )
}

export default TaskCount;