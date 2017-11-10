import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import data from './testData';
import App from './components/App';

ReactDOM.render(
    <App contests={data.contests}/>,
    document.getElementById('root')
);
