const webpack = require('webpack');
const path = require('path');

const bourbon = require('node-bourbon');
const neat = require('node-neat');

const sassPaths = bourbon
    .includePaths
    .map((sassPath)=>`includePaths[]=${sassPath}`)
    .join('&');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve('public'),
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
            loaders: ['style-loader', 'css-loader?sourceMap', `sass-loader?sourceMap&${sassPaths}`]
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.png?$/,
            exclude: /node_modules/,
            loader: "url-loader?limit=100000"
        }, {
            test: /\.gif?$/,
            loader: "url-loader?limit=100000&mimetype=image/png"
        },{
            test: /\.jpg?$/,
            loader: "url-loader?limit=10000000"
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader?name=[name].[ext]"
        }]
    },
    resolve: {
        alias: {
          img: path.resolve('img')
        }
    }
};