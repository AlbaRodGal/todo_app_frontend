import React, { useState } from 'react';

const DropdownMenu = (label, defaultState, options) => {
    const [state, setState] = useState('defaulState');

    const DropdownMaker = () => {
        return (
            <label htmlFor={label}>
                {label}
                <select id={label} 
                value={state} 
                onChange={event => setState(event.target.value)}                >
                <option defaultValue="all">All</option>
                {options.map(item => <option key={item} > {item} </option>)}
                </select>
            </label>
        )
    }

    return [state, DropdownMaker, setState]
};

export default DropdownMenu;