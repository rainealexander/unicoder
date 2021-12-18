import React, { useState, useEffect } from 'react';

export default function RandomUnicode() {

  const [height, width, refresh] = useState();
  const getUnicodeDecimal = () => {
    const MAX = 917999; // maximum code points used in Unicode Standard
    return Math.floor(Math.random() * (MAX + 1));
  };

  const tableHeight = 12;
  const tableWidth = 10;

  const makeRandomTable = (height, width) => {
    let tableElements = [];
    let idCounter = 0;
    // make/get random unicode id
    for (let y = 0; y < height; y++) {
      let rowContent = [];
      for (let x = 0; x < width; x++) {
        let codePoint = getUnicodeDecimal();
        rowContent.push(<td>{String.fromCodePoint(codePoint)}</td>);
        idCounter++;
      }
      tableElements.push(<tr>{rowContent}</tr>);
    }
    return tableElements;
  }

  return (
    <div>
      <table id='randomGrid'>
        {makeRandomTable(tableHeight, tableWidth)}
      </table>
      <button>Refresh</button>
    </div>
  )

};
