import React from 'react';

class ReverseDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div id="reverse-display-container">
                <h1 id="banner">
                    {this.props.display}
                </h1>
            </div>
        );
    }
}

export default ReverseDisplay;