var React = require('react');

var Cell = require('./Cell.jsx');

var cell = React.createElement(Cell, {});
React.render(cell, document.getElementById('content'));

