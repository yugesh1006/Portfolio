import React from 'react';
import "./aboutme.css";
import pic from "../../../img/1615823705097.jpg";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    return ( 
        <div ref={ref} className="about_me">
             <div className="left">
                    <h3 className={`${inView? "h3_inview":""}`}>Background</h3>
                    <p  className={`${inView? "p_inview":""}`}>
                        Hello!This is <strong>Yugesh</strong> and  I'm a web developer with a passion for <strong>Front end development</strong> and <strong>Designing</strong>.I'm currently a fourth year student pursuing my Bachelor's Degree.I love design stuff and love to see them get to more funcitonal.  
                    </p>
                    <p><strong>When I'm off the computer.</strong>A baller(played highschool and college level),Love to capture moments(photography) and Gamer(Yet on the Computer)</p>     
                </div>
                <img className={`mypic ${inView?"img_inview":""}`} src={pic} alt="Yugesh Eathalapaka"/>
        </div>
     );
}
 
export default AboutMe;