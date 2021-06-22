import './app.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import SocialHandles from './Components/SocialHandles/SocialHandles';
import Intro from './Components/MainContent/Intro/Intro';
import AboutMe from './Components/MainContent/AboutMe/AboutMe';
import Projects from './Components/MainContent/Project/Projects';
import Contact from './Components/MainContent/Contact/Contact';

function App() {
  const [toggled,setToggled]=useState(false);
  const handleClick=()=>{
    setToggled((s)=>!s)
  }
  return (
    <div className={`app ${toggled ? 'dark':""}`}>
      <Navbar toggled={toggled} onClick={handleClick}/>
      <div className="main_content">
        <Intro/>
        <AboutMe/>
        <Projects/>
        <Contact/>
      </div>
      <SocialHandles/>
    </div>
  );
}

export default App;
