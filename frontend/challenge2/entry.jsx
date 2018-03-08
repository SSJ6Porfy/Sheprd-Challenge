import React from 'react';
import ReactDOM from 'react-dom';
import TopComponent from './top_component';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<TopComponent/>, root);
});