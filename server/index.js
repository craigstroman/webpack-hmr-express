const path = require('path');
const http = require('http');
const cors = require('cors');
const express = require('express');
const webpack = require('webpack');

const PORT = 3000;
const app = express();

app.use(cors('*'));

const webpackConfig = require('../webpack.config');
const webpackCompiler = webpack(webpackConfig);

app.use(
   require('webpack-dev-middleware')(webpackCompiler, {
     noInfo: true,
     publicPath: webpackConfig.output.publicPath,
    }),
);

app.use(
   require('webpack-hot-middleware')(webpackCompiler, {
     log: false,
     path: '/__webpack_hmr',
   }),
);

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.use('/', (req, res) => {
  res.render('index', {
    title: 'WebPack Hot Module Replacement with Express',
  });
});

const ws = http.createServer(app);

ws.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}.`);
  // ws.timeout = 0;
  // ws.keepAliveTimeout = 0;
});

