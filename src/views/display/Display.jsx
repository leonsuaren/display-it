import React, { useState } from 'react';
import { DisplayWindow } from '../../components/display-window';
import { FiChevronRight } from "react-icons/fi";
import './styles.css';

export const Display = () => {
  const [block, setBlock] = useState(false);
  const [inlineblock, setInlineblock] = useState(false);
  const [none, setNone] = useState(false);
  const [flex, setFlex] = useState(false);
  const [grid, setGrid] = useState(false);

  const handleOnDisplayBlock = () => {
    setBlock(s => !s);
    setInlineblock(false);
    setNone(false);
    setFlex(false);
    setGrid(false);
  }

  const handleOnDisplayInlineBlock = () => {
    setBlock(false);
    setInlineblock(s => !s);
    setNone(false);
    setFlex(false);
    setGrid(false);
  }

  const handleOnDisplayNone = () => {
    setBlock(false);
    setInlineblock(false);
    setNone(s => !s);
    setFlex(false);
    setGrid(false);
  }

  const handleOnDisplayFlex = () => {
    setBlock(false);
    setInlineblock(false);
    setNone(false);
    setFlex(s => !s);
    setGrid(false);
  }

  const handleOnDisplayGrid = () => {
    setBlock(false);
    setInlineblock(false);
    setNone(false);
    setFlex(false);
    setGrid(s => !s);
  }

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
              <button className='display-square' onClick={handleOnDisplayBlock}>display: block;</button>
              <button className='display-square' onClick={handleOnDisplayInlineBlock}>display: inline-block;</button>
              <button className='display-square' onClick={handleOnDisplayNone}>display: none;</button>
              <button className='display-square' onClick={handleOnDisplayFlex}>display: flex;</button>
              <button className='display-square' onClick={handleOnDisplayGrid}>display: grid;</button>
            </div>
            <div className='arrows-middle-section'>
            {
              block ? <FiChevronRight className='arrow-icon'/> : <div></div>
            }
            {
              inlineblock ? <FiChevronRight className='arrow-icon'/> : <div></div>
            }
            {
              none ? <FiChevronRight className='arrow-icon'/> : <div></div>
            }
            {
              flex ? <FiChevronRight className='arrow-icon'/> : <div></div>
            }
            {
              grid ? <FiChevronRight className='arrow-icon'/> : <div></div>
            }
            </div>
            <div className='display-property-effect'>two</div>
          </div>
        </DisplayWindow>
      </div>
    </div>
  )
}