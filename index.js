const dishRouter = require('./dishRouter');
const promoRouter = require('./promoRouter');
const leadRouter = require('./leaderRouter');

const express = require('express'),
http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = '192.168.114.3';
const port = 3000;


const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leadRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

