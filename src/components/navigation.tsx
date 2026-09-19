//import head_sec from "./header";
//import info_sec from "./info";
//import exp_sec from "./exp";
//import projects_sec from "./projects";

import LinkICON from '../assets/Icons/11-linkedin.svg' ;

import GitICON from '../assets/Icons/41-github.svg' ;

import MailICON from '../assets/Icons/67-gmail.svg' ;


// href={head_sec()}

function nav_sec(){
    return(
        <>  
            <div>
                <p><a>Home</a></p>
                <p>About</p>
                <p>Experience</p>
                <p>Projects</p>
            </div>
            <div>
                <img src={MailICON}><a href="fesobioreofe@gmail.com"></a></img>
                <p>Email</p>
                <img src={LinkICON}><a href="https://www.linkedin.com/in/oreofeoluwa-fesobi-82382930b/"></a></img>
                <p>Linkedin</p>
                <img src={GitICON}><a href="https://github.com/Astro0re"></a></img>
                <p>Github</p>
            </div>
            <div></div>
        </>
    )
};

export default nav_sec;