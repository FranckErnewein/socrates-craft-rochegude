var React = require('react');

var transition = {
  grass: "wall",
  wall: "tower",
  tower: "grass"
};

var towerHeight = {
  grass: 0,
  wall: 57,
  tower: 130
};

module.exports = React.createClass({

  render: function() {
    var style = {
      height: towerHeight[this.state.type] + 'px'
    };
    return <li className="cell" onClick={this.handleClick}>
        <div className="tower" style={style}></div>
      </li>;
  },

  handleClick: function() {
    this.setState({
      type: transition[this.state.type]
    });
  },


  getInitialState: function() {
    return {
      type: 'grass'
    };
  }
});
