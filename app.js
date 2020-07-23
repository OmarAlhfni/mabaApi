var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const passport = require('./helper/auth')

const cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/category');
var productsRouter = require('./routes/products');
var cartRouter = require('./routes/cart');
var authRouter = require('./routes/auth');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// possport 
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category', categoryRouter);
app.use('/products', productsRouter);
app.use('/carts', cartRouter);
app.use('/auth', authRouter);

module.exports = app;
