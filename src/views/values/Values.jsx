import React from 'react';
import './styles.css'

export const Values = () => {
  return (
    <section className='value-wrapper'>
      <div className='value-title'><h1>Values</h1></div>
      <div className='value-content'>
        <div className='content-cell'>
          <div className='value'>block</div>
          <div>
            <p>The element generates a block element box, generating line breaks both before and after the element when in the normal flow.</p>
          </div>
        </div>
        <div className='content-cell'>
          <div className='value'>inline</div>
          <div>
            <p>The element generates one or more inline element boxes that do not generate line breaks before or after themselves. In normal flow, the next element will be on the same line if there is space.</p>
          </div>
        </div>
        <div className='content-cell'>
          <div className='value'>flow</div>
          <div>
            <p>The element lays out its contents using flow layout (block-and-inline layout).

            If its outer display type is inline or run-in, and it is participating in a block or inline formatting context, then it generates an inline box. Otherwise it generates a block container box.</p>
          </div>
        </div>
        <div className='content-cell'>
          <div className='value'>flow-root</div>
          <div>
            <p>The element generates a block element box that establishes a new block formatting context, defining where the formatting root lies.</p>
          </div>
        </div>
        <div className='content-cell'>
          <div className='value'>table</div>
          <div>
            <p>These elements behave like HTML <b>table</b> elements. It defines a block-level box.</p>
          </div>
        </div>
        <div className='content-cell'>
          <div className='value'>flex</div>
          <div>
            <p>The element behaves like a block element and lays out its content according to the flexbox model.</p>
          </div>
        </div>
        <div className='content-cell'>
          <div className='value'>grid</div>
          <div>
            <p>The element behaves like a block element and lays out its content according to the grid model.</p>
          </div>
        </div>
        <div className='content-cell'>
          <div className='value'>contens</div>
          <div>
            <p>These elements don't produce a specific box by themselves. They are replaced by their pseudo-box and their child boxes. Please note that the CSS Display Level 3 spec defines how the contents value should affect "unusual elements" — elements that aren't rendered purely by CSS box concepts such as replaced elements. See Appendix B: Effects of display: contents on Unusual Elements for more details.</p>
          </div>
        </div>
        <div className='content-cell'>
          <div className='value'>none</div>
          <div>
            <p>Turns off the display of an element so that it has no effect on layout (the document is rendered as though the element did not exist). All descendant elements also have their display turned off. To have an element take up the space that it would normally take, but without actually rendering anything, use the visibility property instead.</p>
          </div>
        </div>
      </div>
    </section>
  )
}