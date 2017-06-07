'use strict'
require('babel-register')({
	presets:['react']
});
var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var page = require('./src/page.jsx').default;


app.use(express.static('public'));
app.get('/',function(request,response){
	var props = {title:'Universel React'};
	var html = ReactDOMServer.renderToString(
		React.createElement(page,props)
	);
	response.send(html);
});

var PORT = 3000;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});
