'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
// var page = require('./src/page.jsx');
import page from './src/page.jsx';
var props = window.PROPS;
ReactDOM.render(
	React.createElement(page,props),document
);
