'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');
// const outputDirectory = "dist";

module.exports = {
    entry: "./home",
    output: {
        path: path.resolve(__dirname),
        // path: path.join(__dirname, outputDirectory),
        filename: "build.js",
        library: "home"
    },

//    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: JSON.stringify('ru')
        })
    ],


    module: {

        rules:
            [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['es2015', { modules: false }], 'stage-3']
                    }
                }
            }]

    }

};


if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // don't show unreachable variables etc
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}
