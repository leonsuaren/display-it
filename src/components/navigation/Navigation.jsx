import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

export const Navigation = () => {

  return (
    <ul className="menu align-center menu-style">
      <li className='active'><Link to='/display'>Display</Link></li>
      <li><Link to='/syntax'>Syntax</Link></li>
      <li><Link to='/values'>Values</Link></li>
      <li><Link to='/examples'>Examples</Link></li>
    </ul>
  )
}