import React, { useState } from "react";

function EditedTask(props) {

    const [editText, setEditText] = useState('')

    const handleEditTextChange = (event) => {
        setEditText(event.target.value)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log()
        }
    }
    return (
        <input type="text" className="control-form-editing" onChange={handleEditTextChange} onKeyPress={handleKeyPress} />
    )
}
export default EditedTask;