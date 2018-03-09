import React from 'react';

// Presentational Component

const MileageDisplay = (props) => {
    let miles = props.miles;
    let zip1 = props.zipCodeOne;
    let zip2 = props.zipCodeTwo;

    let message;

    if (zip1 && zip2) {
        miles = miles.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        message = `The total distance between zip codes ${zip1} and ${zip2} is ${miles} miles`;
    } else {
        if (props.errors) {
            message = props.errors;
        } else {
            message = "";
        }
    }

    return (
        <div id="reverse-miles-container">
            <h1 id="banner">
                { message }
            </h1>
        </div>
    );
};

export default MileageDisplay;