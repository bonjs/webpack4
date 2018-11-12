
const webpackConfig = require('./webpack.config.js');

const webpack = require('webpack');

const express = require('express');
const app = express();


// 处理mode:'history'下的地址问题
var history = require('connect-history-api-fallback');
app.use(history({
  index: '/',
  verbose: true,
}));




var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var compiler = webpack(webpackConfig);

var devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  noInfo: true,
  quiet: true,  //向控制台显示任何内容 
  stats: {
    colors: true,
    chunks: false
  }
});
var hotMiddleware = webpackHotMiddleware(compiler);
app.use(devMiddleware);
app.use(hotMiddleware);

app.listen(3000, function(req, res) {
  console.log('listening on port 3000!');
});

