
const HtmlWebPackPlugin = require("html-webpack-plugin");

const webpack = require('webpack');

module.exports = {
	entry: {
		main: './src/index.js',
	},
	output: {
		pathinfo: true, //输入代码添加额外的路径注释，提高代码可读性
		filename: './dist/[name]-[hash].js',
		publicPath: '/',
		hashDigestLength: 8
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					query: {
						presets: ['latest'] //按照最新的ES6语法规则去转换
					}
				},
			}, {
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: { minimize: false }
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
			chunksSortMode: 'none',
			chunks: ['main', "runtime"],
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],

	optimization: {
		minimize: false, //是否进行代码压缩
		splitChunks: {
			chunks: "async", //默认为async，表示只会提取异步加载模块的公共代码，initial表示只会提取初始入口模块的公共代码，all表示同时提取前两者的代码。
			minSize: 30000, //模块大于30k会被抽离到公共模块
			minChunks: 1, //模块出现1次就会被抽离到公共模块
			maxAsyncRequests: 5, //异步模块，一次最多只能被加载5个
			maxInitialRequests: 3, //入口模块最多只能加载3个
			name: true,
			cacheGroups: {
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				}
			}
		},
	},
	devServer: {
		contentBase: require('path').join(__dirname, "dist"),
		compress: false,
		port: 3000,
		host: "0.0.0.0",
		hot: true,
		inline: true,
	},
};
