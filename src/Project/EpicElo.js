import React from 'react';
import mainImg from './assets/ee_pic.png';

const EpicElo = props => {
  const fontColor = {
    color: props.palette[0]
  }

  const javascript = {
    backgroundColor: props.palette[0]
  }

  const rails = {
    backgroundColor: props.palette[3]
  }

  return (
    <div className='miniSection'>
      <div className="projectInfo">
        <div className="projectTitle">
          <a href="http://epicelo.com/" rel="noopener noreferrer" target="_blank" style={fontColor}>ECG Elo Project</a>
        </div>
        <p>
          A brutalist web app designed to display player Elo rankings from Epic Card Game competitive tournaments. 
          Shamelessly inspired by the <a href="http://www.mtgeloproject.net/" rel="noopener noreferrer" target="_blank"> MTG Elo Project</a>
        </p>
        <br/>
        <p>
          <a href="https://en.wikipedia.org/wiki/Elo_rating_system" rel="noopener noreferrer" target="_blank">Elo rating</a> is a method for calculating the relative skill levels of players in win or lose 2 player games such as chess, in this case <a href="https://www.epiccardgame.com/" rel="noopener noreferrer" target="_blank" >Epic Card Game</a>. It is named after its creator <a href="https://en.wikipedia.org/wiki/Arpad_Elo" rel="noopener noreferrer" target="_blank">Arpad Elo</a> to improve upon the <a href="https://en.wikipedia.org/wiki/Chess_rating_system#Harkness_system" rel="noopener noreferrer" target="_blank">Harkness rating system</a>.
        </p>
        <br/>
        <ul>
          <a href="https://rubyonrails.org/" rel="noopener noreferrer" target="_blank"><li style={rails}>Ruby on Rails</li></a>
          <a href="https://www.javascript.com/" rel="noopener noreferrer" target="_blank"><li style={javascript}>Vanilla JavaScript</li></a>
        </ul>
      </div>
      <a href="http://epicelo.com" rel="noopener noreferrer" target="_blank"><img src={mainImg} style={{paddingLeft: '50px'}} alt="EpicElo Main Page"/></a>
      <br style={{clear: 'both'}}/>
    </div>
  )
}

export default EpicElo;