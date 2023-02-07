import React from 'react';
import { DisplayWindow } from '../../components/display-window';
import './styles.css';

export const Display = () => {
  return (
    <div className='display-container-layout'>
      <div className='display-description'>
        <h3 className='subheader text-center'>Display</h3>
        <blockquote>
          <p>The <b><b>display property</b></b> sets whether an element is treated as a block or inline element and the layout used for its children, such as <i>flow</i> layout, <i>grid</i> or <i>flex</i>.</p>
        </blockquote>
        <blockquote>
          <p>The <b>display property</b> specifies the display behavior (the type of rendering box) of an element.</p>
        </blockquote>
        <blockquote>
          <p>Formally, the <b>display property</b> sets an element's inner and outer display types. The outer type sets an element's participation in flow layout; the inner type sets the layout of children. Some values of display are fully defined in their own individual specifications; for example the detail of what happens when <b>display: flex</b> is declared is defined in the <i>CSS Flexible Box Model specification</i>.</p>
        </blockquote>
        <blockquote>
          <p>In <b>HTML</b>, the default <b>display property</b> value is taken from the <b>HTML</b> specifications or from the browser/user default style sheet. The default value in <b>XML</b> is inline, including SVG elements.</p>
        </blockquote>
      </div>
      <div className='display-try-it'>
        <h3 className='subheader text-center'>Try it</h3>
        <DisplayWindow headerTitle='CSS Demo: display'>
          <div className='mini-window-container'>
            <div>
              <button className='display-square'>display: block;</button>
              <button className='display-square'>display: inline-block;</button>
              <button className='display-square'>display: none;</button>
              <button className='display-square'>display: flex;</button>
              <button className='display-square'>display: grid;</button>
            </div>
            <div>two</div>
          </div>
        </DisplayWindow>
      </div>
    </div>
  )
}