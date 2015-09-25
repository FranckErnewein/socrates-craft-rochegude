var React = require('react');

module.exports = React.createClass({

  render: function() {
    var stateRendered = null;
    if (this.state.type === 'wall') {
      stateRendered = <img src='img/wall.png' />;
    } else if (this.state.type === 'tower') {
      stateRendered = <img src='img/tower.png' />;
    }
    return <li className="cell">{stateRendered}</li>;
  },

  getInitialState: function () {
    return { type : 'grass' };
  }

});
