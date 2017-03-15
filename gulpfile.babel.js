import gulp from 'gulp'
import path from 'path'
import pug from 'gulp-pug'
import plumber from 'gulp-plumber'
import stylus from 'gulp-stylus'
import concat from 'gulp-concat'
import autoprefixer from 'gulp-autoprefixer'
import server from 'gulp-develop-server'
import util from 'gulp-util'
import webpackStream from 'webpack-stream'
import webpack from 'webpack'

import options from './webpack.config.babel.js'

/* @gulp: default */
gulp.task('default',['dist', 'watch'], () => {
	server.listen({path: './server.js',execArgv: ['--harmony']}, () => {
		util.log(util.colors.yellow.bold(':: DEBUG MODE ::'))
	});
})

/* @gulp: dist*/
gulp.task('dist', ['js', 'assets', 'stylus'], () => {
	return gulp.src('./src/template/main.pug')
	.pipe(pug())
	.pipe(gulp.dest('dist'))
})

/* @gulp: js */
gulp.task('js', callback => {
	return gulp.src('./src/js/bootstrap.js')
	.pipe(plumber())
	.pipe(webpackStream(options, webpack))
	.pipe(gulp.dest('dist/js'))
	.on('data', () => {
		if (!callback.called) {
			callback.called = true;
			callback();
		}
	});
})

/* @gulp: assets */
gulp.task('assets', () => {
	return gulp.src('src/assets/**/*')
	.pipe(gulp.dest('dist/'))
})

/* @gulp: stylus */
gulp.task('stylus', function() {
    return gulp.src('src/stylus/main.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
})

/* @gulp: watch */
gulp.task('watch', () => {
	gulp.watch('src/template/main.pug', ['dist'])
	gulp.watch('src/assets/**/*', ['assets'])
	gulp.watch('src/**/*.styl', ['stylus'])
})