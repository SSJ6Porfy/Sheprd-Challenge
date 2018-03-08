import React from 'react';

class FormInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="form-container">
                <h2 id="form-header">The Best Form Ever!</h2>
                <form id="main-form" onSubmit={this.props.submit}>
                    <input id="form-input" type="text" placeholder="Type a message here!"/>
                    <input id="submit-btn" type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default FormInput;