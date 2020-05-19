import React from 'react';
import Sketch from '../Art/Art';

const Name = (props) => {
  const aboutBlurb = {
    color: props.palette[0]
  }
  
  const nameContainer = {
    color: props.palette[0],
  }

  return (
    <div className='nameHero'>
      <Sketch palette={props.palette}/>
      <div className='nameContainer' style={nameContainer}>
        Benjamin<br/>Sullivan
        <div className='aboutBlurb' style={aboutBlurb}>
          Freelance full stack developer building applications with JavaScript, React, Ruby on Rails.
        </div>
      </div>
    </div>
  )
}

export default Name;