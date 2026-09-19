const skill = ['Python', 'R', 'HTML/CSS', 'Javascript', 'SQL']

// skill button to throw in skill icon onto the page
function skill_throw(){
    return(
        <>
        </>
    )
};

function info_sec(){
    return(
        <>
            <div>
                <div>
                    <h2>About me...</h2>
                    <p>Right now I am collaborating with my work partner to develope health care solutions for healthcare providers, if they can think it we can build it(or attempt to).<a href="">(Remedage)</a></p>
                    <p>I've worked with professionals to reseasrch and analyze for data insight and devloped solutions technical solutions for said insights.</p>
                    <p>Here are some skills and technologies I've been working with:</p>
                    <ul>
                        <div>
                            {skill.map(skill => <button onClick={skill_throw()}>{skill}</button>)}
                        </div>
                    </ul>
                    <p>In my spare time I take on the challenges of the outdoors, partake in music and literature and stare at the sky...</p>
                </div>
            </div>
        </>
    )
};



export default info_sec
