'use strict';

var React = require('react');
var ReactDOM = require('react-dom');


var Hello = React.createClass({
    render: function() {
        return <h1>Hello react.js World!!!!</h1>;
    }
});

var HelloElement = React.createElement(Hello);
ReactDOM.render(HelloElement, document.getElementById('test'));
