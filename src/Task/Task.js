import React, { useState } from "react";
import "./Task.css";
import moment from "moment";
import Button from "../Button/Button";
import EditTextStyle from "../EditTextStyle/EditTextStyle";
import PriorityDropdownMenu from "../Dropdown/PriorityDropdownMenu/PriorityDropdownMenu";
import CategoryDropdownMenu from "../Dropdown/CategoryDropdownMenu/CategoryDropdownMenu"


const Task = props => {

    const [editStyle, setEditStyle] = useState(false);
    const [editDateStyle, setEditDateStyle] = useState(false);
    const [editText, setEditText] = useState();
    const [editDate, setEditDate] = useState();
    const [editCategory, setEditCategory] = useState();

    const handleDeleteClick = () => {
        props.deleteTaskFunc(props.id);
    };

    const handleCompleteClick = () => {
        props.completeTaskFunc(props.id);
    };

    const handleEditTextModeClick = () => {
        props.editTextModeFunc(props.id)
    };
    const handleEditDateModeClick = () => {
        props.editModeDateFunc(props.id)
    };
    const handleEscapeTask = (event) => {
        if(event.key === "Enter"){
            props.defaultTextModeFunc(props.id, editText)
        }
    }
    const handleEscapeDate = (event) => {
        if(event.key === "Enter"){
            props.defaultDateModeFunc(props.id, editDate)
        }
    }
    const handleTextChange = (event) =>{
        setEditText(event.target.value)
    }

    const handleDateChange = (event) => {
        setEditDate(event.target.value)
    }
    const handleCategoryChange = (event) =>{
        console.log(event.target.value)
        setEditCategory(event.target.value)
    }
    return (
        <div className="container" >
            <div className="row">
                <div className="task col-8 col-md-3 col-lg-4" onClick={handleEditTextModeClick}>
                    {props.editingMode === true ? <input type="text" defaultValue={props.text} onKeyPress={handleEscapeTask} onChange={handleTextChange}/>: <p>{props.text}</p>}
                </div>

                <div className="date col-4 col-md-2 col-lg-2" onClick={handleEditDateModeClick}>
                    {props.editingDate === true ? <input type="date" defaultValue={props.date} className="date" onKeyPress={handleEscapeDate} onChange={handleDateChange} />
                    :moment(props.dueDate).format("ddd, MMM Do")}
                </div>
                <div className="col-3 col-md-2 col-lg-2">
                    {props.editingMode === true? <CategoryDropdownMenu />:<Button buttonStyle={"btn--info--solid"}>{props.category}</Button>}
                </div>

                <div className="col-3 col-md-2 col-lg-1" >
                    {props.editPriority === true? <PriorityDropdownMenu /> : props.priority === "High" ? (
                        <Button buttonStyle={"btn--danger--solid"}>High</Button>
                    ) : props.priority === "Medium" ? (
                        <Button buttonStyle={"btn--warning--solid"}>Medium</Button>
                    ) : (
                                <Button buttonStyle={"btn--low--solid"}>Low</Button>
                            )}
                </div>
                <div className="col-2 col-md-1 col-lg-1">
                    <div onClick={handleCompleteClick}>
                        {props.completed === true ? (
                            <Button buttonStyle={"btn--success--solid"}>Done</Button>
                        ) : (
                                <Button buttonStyle={"btn--secondary--outline"}>Pending</Button>
                            )}
                    </div>
                </div>
                <div className="col-2 col-md-1 col-lg-1">
                    <div onClick={handleDeleteClick}>
                        <svg
                            className="bi bi-trash-fill"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
                <div className="col-2 col-md-1 col-lg-1">

                    {/* //TODO: DELETE THIS COL and REASSIGN SPACE */}

                </div>
            </div>
        </div>
    );
};

export default Task;
