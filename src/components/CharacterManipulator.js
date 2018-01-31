import React from 'react';
import './CharacterManipulator.css';

const characterManipulator = (props) => {
    return (
        <div className="CharacterManipulator" onClick={props.clicked}>
           {props.value}
        </div>
    )
};

export default characterManipulator;