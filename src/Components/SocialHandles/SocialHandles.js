import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./socialhandles.css";
import data from "../config";

const SocialHandles = () => {
    return ( 
    <div className="social_handles">
        <a href={`mailto:${data.socailHandles.email}`} target="_blank" rel="noreferrer"><MailIcon/></a>
        <a href={data.socailHandles.gitHub}  target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href={data.socailHandles.linkedIn} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href={data.socailHandles.dribble} target="_blank" rel="noreferrer"><span>dribble</span></a>
        <a href={data.socailHandles.insta}  target="_blank" rel="noreferrer"><InstagramIcon/></a>
    </div> 
    );
}
 
export default SocialHandles;