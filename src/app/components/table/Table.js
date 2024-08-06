import React from 'react';
import './Table.css'

function Table() {
  return (
    <table border="1" className='table-header'>
      <thead>
        <tr>
          <th className='column-style'>A</th>
          <th className='column-style'>B</th>
          <th className='column-style'>C</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='column-style'>A1</td>
          <td className='column-style'>B1</td>
          <td className='column-style'>C1</td>
        </tr>
        <tr>
          <td className='column-style'>A2</td>
          <td className='column-style'>B2</td>
          <td className='column-style'>C2</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
