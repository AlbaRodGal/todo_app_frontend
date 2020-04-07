import React, { useState } from "react";

function EditedTask(props) {

    const [editingText, setEditingText] = useState('')

    const handleEditTextChange = (event) => {
        setEditingText(event.target.value)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log(editingText)
        }
    }
    return (
        <input type="text" className="control-form-editing" value={editingText} onChange={handleEditTextChange} onKeyPress={handleKeyPress} />
    )
}
export default EditedTask;