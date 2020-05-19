import React from 'react'

const Writing = props => {

  const fontColor = {
    color: props.palette[0]
  }

  return (
    <div id="Writing" className='projectContainer'>
      <div className="sectionTitle" style={fontColor}>
        Writing
      </div>
      <div className="linkList">
        <ul>
          <a href="https://dev.to/bensullivan/modeling-a-swiss-tournament-in-a-relational-database-275e" rel="noopener noreferrer" target="_blank"><li>Modeling a Swiss Tournament in a Relational Database </li></a>
          <a href="https://www.epiccardgame.com/origins-gift-horse-postmortem/" rel="noopener noreferrer" target="_blank"><li>Origins Gift Horse Postmortem [Guest Blog Post]</li></a>
          <a href="https://dev.to/bensullivan/duck-typing-farm-development-po7" rel="noopener noreferrer" target="_blank"><li>Duck (Typing) Farm Development </li></a>
        </ul>
      </div>
      <br style={{clear: 'both'}}/>
    </div>
  )
}

export default Writing;