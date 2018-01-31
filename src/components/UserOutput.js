import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>{props.id}) {props.name}, Age: {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default userOutput;