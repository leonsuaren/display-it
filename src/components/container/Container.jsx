import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';

export const Container = ({ children }) => {
  const param = useLocation();

  return (
    <div>
      <div className={param.pathname === '/display' ? 'menu-pointer point-display' :  param.pathname === '/syntax' ? 'menu-pointer point-syntax' : 'menu-pointer'}/>
      <div className='container'>{ children }</div>
    </div>
  )
}