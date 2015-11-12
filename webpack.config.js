var path = require('path');
var webpack = require('webpack');

module.exports = {
    resolve: {
        extensions : ['', '.js', '.coffee']
    },
    entry: './scripts/main.js',
    output: {
        path: 'public',
        filename: "bundle.js"
    },
    module:{
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015','react']
                }
            }
        ]

    }
};