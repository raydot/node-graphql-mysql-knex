var express = require('express');
var path = require('path');
var favicon = require('serve-favicon')
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('view engine', 'pug');

// put favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//the path resolves correctly
//console.log('path:', path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

// view engine setup
app.set('view engine', 'pug');




app.use('/api/', index);

//catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

//error handler
app.use(function(err, req, res, next) {
	//set locals, only providing error in development
	res.locals.message = err.message;
	// TEST : This resolves as 'development'
	// console.log('error:', req.app.get('env'));
	res.locals.error = req.app.get('env') == 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error.pug');
});

module.exports = app;

