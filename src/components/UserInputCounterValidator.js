import React from 'react';

const userInputCounterValidator = (props) => {
    let validator = props.value;
    let returnMessage = "";
    if (validator<=5) {
        if(validator<=0){
            returnMessage = "Enter some text";
        } else {
            returnMessage = "Text too short";
        }
    } else {
        returnMessage = "Text long enough";
    }

    return (
        <div>
            <p>{returnMessage}</p>
        </div>
    )
};

export default userInputCounterValidator;