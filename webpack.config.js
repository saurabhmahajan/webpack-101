const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module:{
        rules:[
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader']
            }, 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}