import React from 'react';
import Cell from './Cell.jsx';

class Grid extends React.Component {
  render() {
    var cells = [];
    for (var i = 0; i < 64; i++) {
      cells.push(<Cell />);
    }

    return <ul className="grid">
      {cells}
    </ul>;
  }
}

export {
  Grid as
  default
};
