import React from 'react';
import EpicElo from './EpicElo';
import CommCheck from './CommCheck';

const Projects = (props) => {
  const nameContainer = {
    color: props.palette[0]
  }

  return (
    <div id='Projects' className="projectContainer">
      <div className='sectionTitle' style={nameContainer}>
        Projects
      </div>
      <CommCheck palette={props.palette}/>
      <EpicElo palette={props.palette}/>
    </div>
  )
}

export default Projects;