'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
import page from './src/page.jsx';

//define porps var
var props = window.PROPS;


// render the top level Component
ReactDOM.render(
	React.createElement(page,props),document
);
