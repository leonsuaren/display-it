import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

export const Navigation = () => {

  return (
    <ul className="menu align-center menu-style">
      <li className='active rounded-left-corners'><Link className='rounded-left-corners' to='/'>Display</Link></li>
      <li><Link to='/syntax'>Syntax</Link></li>
      <li><Link to='/values'>Values</Link></li>
      <li className='rounded-right-corners'><Link className='rounded-right-corners' to='/examples'>Examples</Link></li>
    </ul>
  )
}