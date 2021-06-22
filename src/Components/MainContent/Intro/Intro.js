import React from 'react';
import "./intro.css"
import hi from "../../../img/wave.png";

const Intro = () => {
    return ( 
        <div  className="intro">
        <h3>Hi <img src={hi} alt="hi"/> , my name is</h3>
            <h1>Yugesh Eathalapka.</h1>
            <p>
                I'm a web developer who specializes in buliding exceptional websites.Focused on the <strong>Front End development</strong>(at times designing) with a better user experience and <strong>responsive web design</strong>.  
            </p>
            <a href="mailto:yugeshmessi999@gmail.com"><button>Contact Me</button></a>
        </div>
     );
}
 
export default Intro;