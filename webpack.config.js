var path = require('path');
var nodeExternals = require('webpack-node-externals');

var vendor = ['bcryptjs', 'body-parser', 'cors', 'express', 'mongoose', 'mongoose-delete', 'pug'];
var webpackConfig = {
	entry: {
		server: './src/server.js',
		vendor
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: /node_modules/
			}
		]
	},
	target: 'node',
	node: {
		__dirname: false,
		__filename: false
	},
	externals: [nodeExternals()]
};

module.exports = webpackConfig;
