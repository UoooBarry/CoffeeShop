var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongo = require('./config/mongo');
const cors = require('cors')

const coffeeRouter = require('./routes/coffee');
const orderRouter = require('./routes/orders');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/api/coffee', coffeeRouter);
app.use('/api/order', orderRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.sendStatus(404);
});

//catch database connection
mongo.once('open',function(){
  console.log("Database connected successfully.");
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
