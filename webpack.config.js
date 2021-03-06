const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	entry:{
		app:'./src/index.js'
	},
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'dist')
	},
	devServer:{
		contentBase:'./dist',
		hot:true
	},
	devtool:'inline-source-map',
	plugins:[
		new HtmlWebpackPlugin({
			title:'Output Management'
		}),
		new CleanWebpackPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module:{
		rules:[
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			}
		]
	},
	mode:"production"
};