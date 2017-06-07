'use strict'

require('babel-register')({
	presets:['react']
});


// Adding the required Modules
var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var page = require('./src/page.jsx').default;

//set static files folder
app.use(express.static('public'));

//eneble Access-Control-Allow-Origin
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods",'GET,POST','DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/',function(request,response){

	var props = {title:'Universel React'};

	var html = ReactDOMServer.renderToString(
		React.createElement(page,props)
	);
	response.send(html);
});



// define port
var PORT = 3000;

//listen to port
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});
