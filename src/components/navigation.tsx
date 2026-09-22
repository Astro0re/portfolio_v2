//import head_sec from "./header";
//import info_sec from "./info";
//import exp_sec from "./exp";
//import projects_sec from "./projects";

import LinkICON from '../assets/Icons/11-linkedin.svg' ;

import GitICON from '../assets/Icons/41-github.svg' ;

import MailICON from '../assets/Icons/67-gmail.svg' ;

import '../components/comp.css'

// href={head_sec()}

function nav_sec(){
    return(
        <>  
            <div className='inline-block px-30'>
                <ul>
                <li className='inline-block px-5'><a>Home</a></li>
                <li className='inline-block px-5'><a>About</a></li>
                <li className='inline-block px-5'><a>Experience</a></li>
                <li className='inline-block px-5'><a>Projects</a></li>
                </ul>
            </div>
            <div className='inline-block'>
                
                <a href="fesobioreofe@gmail.com"><img src={MailICON} alt="mail_icon" className='m-2 h-10 inline-block' /></a>
                
                <a href="https://www.linkedin.com/in/oreofeoluwa-fesobi-82382930b/"><img src={LinkICON} alt="link_icon" className='m-2 h-10 inline-block'/></a>
                
                
                <a href="https://github.com/Astro0re"><img src={GitICON} alt="git_icon" className='m-2 h-10 inline-block'/></a>
            </div>

        </>
    )
};

export default nav_sec;