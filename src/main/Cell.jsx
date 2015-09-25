var React = require('react');
var transition = {
  grass : "wall",
  wall:"tower",
  tower:"grass"
};

module.exports = React.createClass({

  render: function() {
    var stateRendered = null;
    if (this.state.type === 'wall') {
      stateRendered = <img src='img/wall.png' />;
    } else if (this.state.type === 'tower') {
      stateRendered = <img src='img/tower.png' />;
    }
    return <li className="cell" onClick={this.handleClick}>
        {stateRendered}
      </li>;
  },

  handleClick: function () {
    this.setState({ type : transition[this.state.type] });
  },


  getInitialState: function () {
    return { type : 'grass' };
  }
});
