import React from 'react';

const transition = {
  grass: "wall",
  wall: "tower",
  tower: "grass"
};

const towerHeight = {
  grass: 0,
  wall: 57,
  tower: 130
};


class Cell extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: 'grass'
    };
  }

  handleClick() {
    this.setState({
      type: transition[this.state.type]
    });
  }

  render() {
    let style = {
      height: towerHeight[this.state.type] + 'px'
    };
    return <li className="cell" onClick={this.handleClick.bind(this)}>
      <div className="tower" style={style}></div>
    </li>;
  }
}

export {
  Cell as
  default
};
