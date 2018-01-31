import React from 'react';
import './UserOutputCounter.css';

const userOutputCounter = (props) => {
    return (
        <div>
            <p> Length of paragraph is, {props.value} characters</p>
        </div>
    )
};

export default userOutputCounter;