var React = require('react');
var transition = {
  grass : "wall",
  wall:"tower",
  tower:"grass"
};

module.exports = React.createClass({

  render: function() {
    var image_src = 'img/' + this.state.type + '.png';
    return <li className="cell" onClick={this.handleClick}>
        <img src={image_src} />
      </li>;
  },

  handleClick: function () {
    this.setState({ type : transition[this.state.type] });
  },


  getInitialState: function () {
    return { type : 'grass' };
  }
});
