
const webpackConfig = require('./webpack.config.js');

const webpack = require('webpack');

const express = require('express');
const app = express();

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

app.get('/', function() {
  console.log('哈哈')
})

app.listen(3000, () => console.log('listening on port 3000!'))