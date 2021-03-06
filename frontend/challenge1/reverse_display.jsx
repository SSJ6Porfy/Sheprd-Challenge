import React from 'react';

class ReverseDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let str = this.props.display;
        let display = "";

        if (str.length > 0) {
            // loop to reverse string
            let length = str.length;

            for (let idx = length - 1; idx >= 0; idx--) {
                display += str[idx];
            }
        }

        return (
            <div id="reverse-display-container">
                <h1 id="banner">
                    {display}
                </h1>
            </div>
        );
    }
}

export default ReverseDisplay;