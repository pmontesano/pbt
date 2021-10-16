import express from 'express';
import path from 'path';
import template from './template';
import { fetchData, render } from '../controllers';

const server = express();

server.use('/', express.static(path.join(__dirname, '../../build')));
server.use('/static', express.static(path.join(__dirname, '../static')));

/**
 * Mount routers
 */
server.get('/', (req, res) => {
  res.redirect('/product');
});

server.get('/product', fetchData, render(template, 'plp'));

server.listen(8080, () => console.log('Server started http://localhosts:8080'));
