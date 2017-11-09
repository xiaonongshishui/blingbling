var webpack = require('webpack');
var config = require('./webpack.config.js');

function callback(err, stats) {
    if (err) {
        console.log(err);
    } else {
        console.log(stats.toString({
            colors: true,
            chunks: false,
            children: true,
            timings:true,
            warnings:true,
            reasons:true
        }));
    }
}
var compiler = webpack(config);

compiler.run(callback);