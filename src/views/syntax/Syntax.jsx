import React from 'react';
import './styles.css';

export const Syntax = () => {
  return (
    <section className='wrapper'>
      <div className='title'>
        <h1>Syntax</h1>
        <p>The CSS <b>display property</b> is specified using keyword values.</p>
      </div>
      <div className='content'>
        <table className='hover scroll'>
          <thead>
            <th className='table-header'>Precomposed Values</th>
            <th className='table-header'>Box Generation</th>
            <th className='table-header'>Multi-keyword Syntax</th>
            <th className='table-header'>Other Values</th>
            <th className='table-header'>Global Values</th>
          </thead>
          <tbody>
            <tr>
              <td>display: block;</td>
              <td>display: none;</td>
              <td>display: block flow;</td>
              <td>display: table;</td>
              <td>display: inherit;</td>
            </tr>
            <tr>
              <td>display: inline;</td>
              <td>display: contents;</td>
              <td>display: inline flow;</td>
              <td>display: table-row;</td>
              <td>display: initial;</td>
            </tr>
            <tr>
              <td>display: inline-block;</td>
              <td></td>
              <td>display: inline flow-root;</td>
              <td>display: list-item;</td>
              <td>display: revert;</td>
            </tr>
            <tr>
              <td>display: flex;</td>
              <td></td>
              <td>display: block flex;</td>
              <td></td>
              <td>display: revert-layer;</td>
            </tr>
            <tr>
              <td>display: inline-flex;</td>
              <td></td>
              <td>display: inline flex;</td>
              <td></td>
              <td>display: unset;</td>
            </tr>
            <tr>
              <td>display: grid;</td>
              <td></td>
              <td>display: block grid;</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>display: inline-grid;</td>
              <td></td>
              <td>display: inline grid;</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>display: flow-root;</td>
              <td></td>
              <td>display: block flow-root;</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

