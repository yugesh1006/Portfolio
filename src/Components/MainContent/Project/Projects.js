import React from 'react';
import "./projects.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import data from "../../config";
import { useInView } from "react-intersection-observer";

const Projects = () => {
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true	
    })
    const [ref1, inView1] = useInView({
        threshold: 1,
        delay:0.3
    })
    const content =data.projects;
    const handles =data.socailHandles;
    return ( 
        <div className="projects">
            <h3 ref={ref1} className={`${inView1 ? "h3_inview": "" }`}>Few Things which I've build</h3>
            <div className="projects_container">
            {content&&content.map((c)=>(
                <div ref={ref} key={c.id} className={`projects_dis ${inView ? "project_inview":""}`}>
                <img src={c.image} alt="Moive App"/>
                <div className="about_project">
                    <h5>Featured Project</h5>
                    <h4>{c.title}</h4>
                    <p>
                        {c.description[0]}<strong>{c.description[1]}</strong>
                    </p>
                    <a href={c.gitHub} target="_blank" rel="noreferrer"><GitHubIcon/></a>
                    <a href={c.websiteLink} target="_blank" rel="noreferrer"><LinkIcon/></a>
                </div>
            </div> 
            ))}
            </div>
            <a className="projects_more" href={handles.gitHub} target="_blank" rel="noreferrer">More Projects</a>
            
        </div>
     );
}
 
export default Projects;