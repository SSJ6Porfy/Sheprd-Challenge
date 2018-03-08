import React from 'react';
import FormInput from './form_input';
import ReverseDisplay from './reverse_display';

class TopComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            display: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // triggers a re-render of TopComponent
        this.setState({ display: e.target.firstChild.value });
        e.target.reset();
    }


    render() {
        return (
            <div id="top-container">
                <ReverseDisplay display={this.state.display}/>
                <FormInput submit={this.handleSubmit}/>
            </div>
        );
    }
}

export default TopComponent;