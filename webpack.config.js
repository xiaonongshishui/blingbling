var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//项目路径
var ROOT_PATH = path.resolve(__dirname, './');
var CLIENT_PATH = ROOT_PATH + '/Client';
var DIST_PATH = ROOT_PATH + '/Dist';
var CACHE_PATH = ROOT_PATH + '/Cache';

var __DEV__ = process.env.NODE_ENV === 'development';

var config = {
    entry: {
        lib: ['react', 'react-dom', 'react-router', 'react-router-dom', 'redux', 'react-redux'],
        app: [CLIENT_PATH + '/index.js']
    },
    output: {
        path: DIST_PATH,
        filename: __DEV__ ? 'js/[name].js' : 'js/[name].[chunkhash].js',
        chunkFilename: __DEV__ ? 'js/[name].js' : 'js/[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader?cacheDirectory=' + CACHE_PATH]
            },
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', {
                        loader:'postcss-loader',
                        options:{
                            ident: 'postcss',
                            plugins:[require('autoprefixer')()]
                        }
                    }, 'less-loader']
                })
            },
            {
                test: /\.(?:jpg|gif|png|svg)$/,
                use: [
                    'url-loader?limit=8000&name=img/[hash].[ext]',
                    'image-webpack-loader'
                ]
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            },
            {
                test:/\.(eot|ttf|woff|woff2|svg|otf)$/,
                use:'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    resolve: {
        alias: {
            'components': CLIENT_PATH + '/Components',
            'actions': CLIENT_PATH + '/Actions',
            'reducers': CLIENT_PATH + '/Reducers',
            'assets':CLIENT_PATH + '/Assets',
            'images': CLIENT_PATH + '/Assets/images'
        },
        extensions: [".jsx", ".js", ".json"]
    },
    plugins: [
        new ExtractTextPlugin('css/style.[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['lib'],
            filename: 'js/vendor.[hash].js'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlwebpackPlugin({
            filename: 'index.html',
            chunks: ['vendor', 'lib', 'app'],
            template: CLIENT_PATH + '/index.html',
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeRedundantAttributes: true,
                removeEmptyAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeComments: true
            }
        })
    ]
};

module.exports = config;
