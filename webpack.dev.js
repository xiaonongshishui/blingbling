var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require("./webpack.config.js");
var port = '8999';
var host = '127.0.0.1';


var options = {
    hot: true,
    host:host
};

var localPublicPath = 'http://' + host + ':' + port + '/';
config.entry.app.unshift("webpack-dev-server/client?" + localPublicPath);

config.entry.app.unshift('webpack/hot/only-dev-server');
config.entry.app.unshift('react-hot-loader/patch');
config.output.publicPath = '/';
//config.module.rules[0].use.unshift('react-hot-loader');
config.plugins.push(new webpack.HotModuleReplacementPlugin());

WebpackDevServer.addDevServerEntrypoints(config, options);
var server = new WebpackDevServer(webpack(config),{
    hot:true,
    inline:true,
    compress: true,
    stats:{
        colors: true
    },
    open:true,
    historyApiFallback: true
});
server.listen(port,host,function(err){
    if (err) {
        console.log(err);
    }
    console.log(host + ":"+port);
});