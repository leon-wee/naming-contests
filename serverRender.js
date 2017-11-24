// fetch data from the API

import config from './config';
import axios from 'axios';

//not a frontend server so cannot just say /api
//we must specify the full location
axios.get(`${config.serverUrl}/api/contests`)
    .then(resp => {
        console.log(resp.data);
    })
    .catch(console.error);
