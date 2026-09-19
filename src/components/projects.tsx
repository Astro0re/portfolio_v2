import data_pro from "./data_proj";
import software_pro from "./software_proj";
import sci_pro from "./science_proj";
import ml_pro from "./ml_proj";

const domains = ['Data', 'Software', 'Machine Learning', 'Scince']

function projects_sec(){
    return(
        <>
        <h2>Projects</h2>
        <p>Now to the good stuff, these are various projects developed across different topics.</p>
        <p>With various languages and technologies used, these projects are a blend of different acquired knowledge.</p>
        <p>Click to reveal</p>
        {domains.map(domain => <button>{domain}</button>)}
        
        {data_pro}
        {software_pro}
        {sci_pro}
        {ml_pro}
        </>
    )
};

export default projects_sec;