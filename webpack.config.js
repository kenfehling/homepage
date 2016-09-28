var webpack = require('webpack');
var path = require('path');

var bourbon = require('node-bourbon');
var neat = require('node-neat');

const sassPaths = bourbon
    .includePaths
    .map((sassPath)=>`includePaths[]=${sassPath}`)
    .join('&');

module.exports = {
    entry: './src/index.js',
    devtool: '#eval-cheap-module-source-map',
    output: {
        path: './public',
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    plugins: [
        new webpack.ProvidePlugin({ 'React': 'react'})
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: ['style', 'css?sourceMap', `sass?sourceMap&${sassPaths}`]
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.png?$/,
            exclude: /node_modules/,
            loader: "url-loader?limit=10000"
        }, {
            test: /\.gif?$/,
            loader: "url-loader?limit=10000&mimetype=image/png"
        },{
            test: /\.jpg?$/,
            loader: "url-loader?limit=10000000&mimetype=image/jpg"
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader?name=[name].[ext]"
        }]
    },
    resolve: {
        root: path.resolve(__dirname),
        img: 'img'
    }
};