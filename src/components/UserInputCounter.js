import React from 'react';
import './UserInputCounter.css';

const userInputCounter = (props) => {
    return (
        <div>
            <input className="UserInputCounter" type="text" onChange={props.change} value={props.value} />
        </div>
    )
};

export default userInputCounter;