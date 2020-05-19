import React from 'react';
import cc_pic from './assets/cc_pic.png';

const CommCheck = props => {
  const fontColor = {
    color: props.palette[0]
  }

  const googleAPI = {
    backgroundColor: '#3cba54'
  }

  const javascript = {
    backgroundColor: props.palette[0]
  }

  const matUI = {
    backgroundColor: props.palette[1]
  }

  const rails = {
    backgroundColor: props.palette[3]
  }

  return (
    <div className="miniSection">
      <a href="https://github.com/Goto15/community-checklist" rel="noopener noreferrer" target="_blank"><img src={cc_pic} style={{paddingRight: '50px'}} alt="Community Checklist"/></a>
      <div className="projectInfo">
        <div className="projectTitle">
          <a href="https://github.com/Goto15/community-checklist" rel="noopener noreferrer" target="_blank" style={fontColor}>Community Checklist</a>
        </div>
        <p>
          A personal journal of restaraunts, parks, and local haunts. Keep track of where you've been, where you want to go, and where your friends have gone. 
        </p>
        <br/>
        <p>
          Community Checklist is a single page app that allows users to keep a rich journal of places that they've visited. 
          CC uses Google Maps, Places, and Geolocation to show users a detailed map of locations they've visited and that their friends have visited. 
          This allows for users to find joint favorite restaurants to meet or to find new and exciting places to go alone or with friends.
        </p>
        <br/>
        <ul>
          <a href="https://www.javascript.com/" rel="noopener noreferrer" target="_blank"><li style={javascript}>Vanilla JavaScript</li></a>
          <a href="https://ogp.me/" rel="noopener noreferrer" target="_blank"><li style={matUI}>Open Graph Protocol</li></a>
          <a href="https://developers.google.com/" rel="noopener noreferrer" target="_blank"><li style={googleAPI}>Google APIs</li></a>
          <a href="https://material-ui.com/" rel="noopener noreferrer" target="_blank"><li style={matUI}>Material-UI</li></a>
          <a href="https://rubyonrails.org/" rel="noopener noreferrer" target="_blank"><li style={rails}>Ruby on Rails</li></a>
        </ul>
      </div>
    <br style={{clear: 'both'}}/>
    </div>
  )
}

export default CommCheck