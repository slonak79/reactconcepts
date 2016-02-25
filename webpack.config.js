'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    resolve: ["",".js"],
    entry: "./app.js",
    output: "./bundle.js"
    ,
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/,exclude:/node_modules/,loader:"jsx-loader" }
        ]
    }
};