import React from 'react';
import Cell from './Cell.jsx';

class Grid extends React.Component {

  render() {
    let cells = Array.from(new Array(64), () => <Cell />);

    return (<ul className="grid">
      {cells}
    </ul>);
  }
}

export {
  Grid as
  default
};
