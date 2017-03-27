import webpack from 'webpack'
import path from 'path'

const dev = process.env.NODE_ENV !== 'production';

const options = {
	devtool: dev ? 'source-map-eval' : false,
    watch: dev,

    output: {
        path: path.resolve(__dirname, 'dist/js'),
        publicPath: '/js/',
        filename: dev ? '[name].js' : '[chunkhash:12].js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: [/node_modules/, /dist/],
            use: [{
            	loader: 'babel-loader',
            	options: {
                    presets: ['es2015', 'stage-2'],
                }
            }]
        },{
            test: /\.styl$/,
            exclude: [/node_modules/, /dist/],
            use:[
                 "style-loader",
                 "css-loader",
                 "stylus-loader"
            ]
        },{
            test: /\.pug?$/,
            exclude: [/node_modules/, /dist/],
            loader: ['raw-loader', 'pug-html-loader']
        }]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            'node_modules'
        ],
        extensions: ['.js', '.pug', '.styl'],
        alias: {
          'vue$': 'vue/dist/vue.js',
          'vue-router$': 'vue-router/dist/vue-router.common.js',
          'vuex$': 'vuex/dist/vuex.js',
          'img': path.resolve('./src/assets/img/')
        }
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                FB_API_KEY: JSON.stringify(process.env.FB_API_KEY),
                FB_API_SENDER: JSON.stringify(process.env.FB_API_SENDER),
            },
        })
    ]
}

export default options