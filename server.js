'use strict';

let express  = require('express'),
    app      = express(),
    port     = +process.env.PORT || 8000,
    path     = require('path'),
    mongoose = require('mongoose');



app.use(express.static(__dirname + '/public'));


// configure our app to handle CORS requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});



// ROUTES TO OUR PAGES

// index.html for '/'
app.get('/', function(req, res) {
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});



// API router

var apiRouter = express.Router();

apiRouter.route('/test')

  // accessed at GET http://localhost:8080/api/users)
  .get(function(req, res) {
    res.sendFile(path.join(`${__dirname}/public/js/data/test.json`));
  });

  // .post(function(req, res) {
  //
  // });



// test route to make sure everything is working
// accessed at GET http://localhost:8080/api
apiRouter.get('/', function(req, res) {
  res.json({ message: 'Welcome to our api!' });
});


// register our routes
// all of our routes will be prefixed with /api
app.use('/api', apiRouter);



// run the server
app.listen(port, function() {
  console.log(`Server is running on port ${port}`);
});
