import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';

export const Container = ({ children }) => {
  const param = useLocation();

  return (
    <div>
      <div className='container'>{children}</div>
    </div>
  )
}