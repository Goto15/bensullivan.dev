// Components
import React from 'react';
import Name from './Name/NameHero';
import NavBar from './NavBar/NavBar';
import Projects from './Project/Projects';
import Resume from './Resume/Resume';
import Writing from './Writing/Writing';

//Styling
import './App.css';
import Contact from './Contact/Contact';

//WCAG AA COMPLIANT #E02947 
//ORIGINAL #e43f5a
const palette = ['#162447', '#1f4068', '#1b1b2f', '#e02947']

function App() {
  return (
    <div>
      <NavBar palette={palette}/>
      <Name palette={palette}/>
      <Projects palette={palette}/>
      <Writing palette={palette}/>
      <Resume palette={palette}/>
      <Contact palette={palette}/>
    </div>
  );
}

export default App;
