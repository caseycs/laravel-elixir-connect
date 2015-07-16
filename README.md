# laravel-elixir-connect
Laravel Elixir wrapper for gulp-connect-php which supports live reload with browser-sync.

Inspired by https://github.com/grantholle/laravel-elixir-browser-sync-simple

Big thanks to @grantholle, @micahblu and @BrowserSync!!

## Install

```sh
$ npm install --save-dev laravel-elixir-connect
```

## Usage

In gulpfile.js:
```javascript
var elixir = require('laravel-elixir');
require('laravel-elixir-connect);

elixir(function(mix) {
    mix.elixirConnect({
        browserSync: true
    });
});
```

Run it!
````sh
$ gulp watch
``

Opens a php server instance with browser-sync enabled configured using the default parameters.
* php server: 127.0.0.1:8000
* browser-sync: 127.0.0.1:3000

## Examples

### Configuring gulp-connect-php options

```javascript
var elixir = require('laravel-elixir');
require('laravel-elixir-connect);

elixir(function(mix) {
    mix.elixirConnect({
        hostname: 'my-host.dev',
        port: 3333
    });
});
```

Note: browser-sync it's not enabled by default.

### Use it with browser-sync

```javascript
var elixir = require('laravel-elixir');
require('laravel-elixir-connect);

elixir(function(mix) {
    mix.elixirConnect({
        hostname: 'my-host.dev',
        port: 3333,
        browserSync: {
        	port: 4444
        }
    });
});
```

## Options

All options are passed to gulp-connect-php. If there aren't options, it will launch with the default configuration. 
https://github.com/micahblu/gulp-connect-php/blob/master/README.md#options

Browser sync options must be inside browserSync property in options object. If "true" value is passed, it should try to run with the default options.
http://www.browsersync.io/docs/options/