import React from 'react';

// Presentational Component

const FormInput = (props) => {
        return (<div id="form-container">
                <h2 id="form-header">The Best Form Ever!</h2>
                <form id="main-form" onSubmit={props.submit}>
                    <input id="form-input" type="text" placeholder="Type a message here!"/>
                    <input id="submit-btn" type="submit" value="Submit"/>
                </form>
            </div>
        );
};

export default FormInput;