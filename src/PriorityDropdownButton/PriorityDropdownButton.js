import React from "react";

function PriorityDropdownButton() {

    return (
        <form>
            <label>
                <select>
                    <option value="Urgent">Urgent</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </label>
        </form>

    )
}

export default PriorityDropdownButton;