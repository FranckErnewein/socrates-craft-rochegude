import React from 'react';
import Cell from './Cell.jsx';

class Grid extends React.Component {

  render() {
    let cells = [];
    for (let i = 0; i < 64; i++) {
      cells.push(<Cell key={'cell-' + i}/>);
    }

    return (<ul className="grid">
      {cells}
    </ul>);
  }
}

export {
  Grid as
  default
};
