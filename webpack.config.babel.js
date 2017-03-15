import webpack from 'webpack'
import path from 'path'

const dev = process.env.NODE_ENV !== 'production';

const options = {
	devtool: dev ? 'source-map-eval' : null,
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
        }, {
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
            loader: 'pug-html'
        }
        ]
    },
}

export default options