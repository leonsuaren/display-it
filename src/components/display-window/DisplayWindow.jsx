import React from 'react';
import './styles.css';

export const DisplayWindow = ({ headerTitle, children }) => {
  return (
    <div className='window-container'>
      <div className='window-header'>
        <div className='first-ball' />
        <div className='second-ball' />
        <div className='third-ball' />
        <div>
        <p className='window-header-title'>{ headerTitle }</p>
        </div>
      </div>
      { children }
    </div>
  )
}