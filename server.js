import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';
const server = express();

//using sass middleware
server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));


//magic line
server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get(['/', '/contest/:contestId'], (req, res) => {
    serverRender(req.params.contestId)
        .then(({ initialMarkup, initialData }) => {
            res.render('index', {
                initialMarkup,
                initialData
            });
        })
        .catch(error => {
            console.error(error);
            res.status(404).send('Bad Request');
        });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
    console.info('Express listening on port: ', config.port);
    console.info('Express listening on host: ', config.host);
});
