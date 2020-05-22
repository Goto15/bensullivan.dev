import React from 'react';
import resumeImg from './assets/resume.png';
import resumePDF from './assets/Benjamin_Sullivan_Resume.pdf';
import resumeDOCX from './assets/Benjamin_Sullivan_Resume.docx';

const Resume = props => {

  const fontColor = { 
    color: props.palette[0]
  }

  const red = {
    color: props.palette[3],
    float: 'left'
  }

  const img = {
    border: '1px solid black',
    boxShadow: "5px 10px #e02947",
    float: 'left',
    marginLeft: '10vw',
    marginRight: '40px',
    maxWidth: '300px'
  }

  return (
    <div id='Resume' className="projectContainer" style={fontColor}>
      <div className="sectionTitle">Resume</div>
      <div style={{paddingTop: '40px'}}>
      <img src={resumeImg} style={img} className="resumeImg" alt="Resume preview"/>
        <div className="linkList" style={red}>
        <h1 style={{paddingBottom: '15px'}}>Download</h1>
          <ul>
            <a href={resumePDF} download><li>.pdf</li></a>
            <a href={resumeDOCX} download><li>.docx</li></a>
          </ul>
        </div>
      </div>
      <br style={{clear: 'both'}}/>
    </div>
  )
}

export default Resume;