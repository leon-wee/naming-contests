// fetch data from the API
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';
import config from './config';
import axios from 'axios';

//not a frontend server so cannot just say /api
//we must specify the full location
const serverRender = () =>
    axios.get(`${config.serverUrl}/api/contests`)
        .then(resp => {
            return {
                initialMarkup: ReactDOMServer.renderToString(
                    <App initialData={resp.data} />
                ),
                initialData: resp.data
            }
        });

export default serverRender;
