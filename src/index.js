import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './components/App';

ReactDOM.render(
    <App initialContests={window.initialData.contests}/>,
    document.getElementById('root')
);
