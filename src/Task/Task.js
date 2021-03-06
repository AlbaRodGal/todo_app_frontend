import React, { useState } from "react";
import "./Task.css";
import moment from "moment";
import Button from "../Button/Button";
import PriorityDropdownMenu from "../Dropdown/PriorityDropdownMenu/PriorityDropdownMenu";
import CategoryDropdownMenu from "../Dropdown/CategoryDropdownMenu/CategoryDropdownMenu"


const Task = props => {

    const [editText, setEditText] = useState();
    const [setEditDate] = useState();
    const [setEditCategory] = useState();
    const [setEditPriority] = useState();

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
    const handleEditCategoryClick = () => {
        props.editCategoryFunc(props.id)
    }
    const handleEditPriorityclick = () => {
        props.editPriorityFunc(props.id)
    }

    const handleEnterTask = (event) => {
        if (event.key === "Enter") {
            props.defaultTextModeFunc(props.id, editText)
        }
    }

    const handleTextChange = (event) => {
        setEditText(event.target.value)
    }

    const handleDateChange = (event) => {
        props.defaultDateModeFunc(props.id, event.target.value)

    }
    const handleCategoryChange = (event) => {
        props.defaultCategoryModeFunc(props.id, event.target.value)
    }
    const handlePriorityChange = (event) => {
        props.defaultPriorityModeFunc(props.id, event.target.value)
    }
    return (
        <div className="container-fluid">
            <div className="row items">
                <div className="col-12 col-md-3 col-lg-5" id="taskText" onClick={handleEditTextModeClick}>
                    {props.editingMode === true ? <input type="text" defaultValue={props.text} onKeyPress={handleEnterTask} onChange={handleTextChange} /> : <p>{props.text}</p>}
                </div>

                <div className="col-12 col-md-2 col-lg-2" id="taskDate" onClick={handleEditDateModeClick}>
                    {props.editingDate === true ? <input type="date" defaultValue={props.date} className="date" onChange={handleDateChange} />
                        : moment(props.dueDate).format("ddd, MMM Do")}
                </div>
                <div className="col-4 col-md-2 col-lg-1" id="taskCategory" onClick={handleEditCategoryClick}>
                    {props.editingCategory === true ? <CategoryDropdownMenu handleCategoryChangeFunc={handleCategoryChange}/> : <Button buttonStyle={"btn--info--solid"}>{props.category}</Button>}
                </div>

                <div className="col-4 col-md-2 col-lg-1" id="taskPriority" onClick={handleEditPriorityclick}>
                    {props.editingPriority === true ? <PriorityDropdownMenu handlePriorityChangeFunc={handlePriorityChange}/> : props.priority === "High" ? (
                        <Button buttonStyle={"btn--danger--solid"} >High</Button>
                    ) : props.priority === "Medium" ? (
                        <Button buttonStyle={"btn--warning--solid"}>Medium</Button>
                    ) : (
                                <Button buttonStyle={"btn--low--solid"}>Low</Button>
                            )}
                </div>
                <div className="col-4 col-md-2 col-lg-1" id="taskPriority" onClick={handleCompleteClick}>
                        {props.completed === 1 ? (
                            <Button buttonStyle={"btn--success--solid"}>Done</Button>
                        ) : (
                                <Button buttonStyle={"btn--secondary--outline"}>Pending</Button>
                            )}
                </div>
                <div className="col-12 col-md-1-trash col-lg-1" id="deleteIcon">
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
            </div>
        </div>
    );
};

export default Task;
