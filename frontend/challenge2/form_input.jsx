import React from 'react';

class FormInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="form-container">
                <h2 id="form-header">Find out the Distance bewteen to Zip Codes</h2>
                <form id="main-form" onSubmit={this.props.submit}>
                    <input className="form-input" 
                           type="text" placeholder="Enter Zip Code 1 Here!"
                           maxLength="5"/>
                    <input className="form-input" 
                           type="text" 
                           placeholder="Enter Zip Code 2 Here!"
                           maxLength="5"/>
                    <input id="submit-btn" type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default FormInput;