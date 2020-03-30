import React, { useState } from 'react';

const DropdownMenu = (label, defaultState, options) => {
    const [state, setState] = useState('');

    const DropdownMaker = () => {
        return (
            <label htmlFor={label}>
                {label}
                <select id={label} value={state} onChange={event => setState(event.target.value)}>
                    {options.map(element => <option key={element} > {element} </option>)}
                </select>
            </label>
        )
    }

    return [state, DropdownMaker, setState]
};

export default DropdownMenu;