
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var international_cafe = require('./routes/international_cafe');
var names = require('./routes/names');
var get_involved = require('./routes/get_involved');
var contact = require('./routes/contact');
var analytics = require('./routes/analytics');
var names_audio = require('./routes/names_audio');
var home = require('./routes/home');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/index', index.view);
app.get('/international_cafe',international_cafe.showNav);
app.get('/names', names.view);
app.get('/get_involved', get_involved.view);
app.get('/contact',contact.view);
app.get('/analytics', analytics.view);
app.get('/names_audio', names_audio.view);
app.get('/home', home.view);
//app.get('/', palette.sendColor);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
