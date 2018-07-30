'use strict';

let webpack = require('webpack');

module.exports = {
    mode: 'development',
    context: __dirname + '/frontend',
  entry:   {
    home: './home'
  },
  output:  {
    path:     __dirname + '/public',
    filename: '[name].js'
  },

  module: {

    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
      test:   /\.jade$/,
      use: {
          loader: "jade-loader"
      }
    }, {
      // autoprefixer?browsers=last 2 version!
            // style!css!stylus?resolve urls
      test:   /\.styl$/,
      use:[
         'style-loader',
          'css-loader',
          'stylus-loader'
      ]
    },
        {
      test:   /\.css/,
      use: {
          loader: 'style-loader!css-loader'
      }
    }, {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      use: {
          loader: 'file-loader?name=[path][name].[ext]&limit=4096'
      }
    }]
  }

};
