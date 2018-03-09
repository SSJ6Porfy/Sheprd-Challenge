import React from 'react';

class Mileagemiles extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let miles = this.props.miles;
        let zip1 = this.props.zipCodeOne;
        let zip2 = this.props.zipCodeTwo;

        let message;

        if (this.props.miles) {
            message = `The total distance between zip codes ${zip1} and ${zip2} is ${miles} miles`;
        } else {
            if (this.props.errors) {
                message = this.props.errors;
            } else {
                message = "";
            }
        }

        return (
            <div id="reverse-miles-container">
                <h1 id="banner">
                    {message}
                </h1>
            </div>
        );
    }
}

export default Mileagemiles;