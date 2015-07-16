var gulp = require('gulp');
var elixir = require('laravel-elixir');
var connect = require('gulp-connect-php');
var _ = require('underscore');
var browserSync = require('browser-sync').create();
var path = require('path');

elixir.extend('elixirConnect', function(config) {

    if (config) {
        config = _.extend({
            hostname: '127.0.0.1',
            port: 8000,
            base: './public',
            keepalive: true,
            browserSync: false
        }, config);

        if (config.browserSync) {
            config.browserSync = _.extend({
                proxy: config.hostname+':'+config.port,
                open: true,
                notify: true,
                reloadOnRestart : true,
                files: [
                    path.join(elixir.config.srcDir, '**/*.php'),
                    path.join(elixir.config.cssOutput, '**/*.css'),
                    path.join(elixir.config.jsOutput, '**/*.js'),
                    'resources/views/**/*.*'
                ]
            }, config.browserSync);
        }
    }

    gulp.task('elixir-connect', function() {
        if (typeof gulp.tasks.watch.done !== 'undefined') {
            connect.server(config);
            if (config && config.browserSync) {
                if (!browserSync.active) {
                    browserSync.init(config.browserSync);
                }
            }
        }
    });

    this.registerWatcher('elixir-connect');
    return this.queueTask('elixir-connect');
});