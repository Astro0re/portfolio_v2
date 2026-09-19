import { useState } from "react";

const exp_loc = ['Remedage', 'Medical ART Center', 'Babcock University'];

const exp = {
    'Remedage' : {
        'role' : 'Founder CEO',
        'time' : '',
        'des' : ''
    },
    'Medical ART Center' : {
        'role' : 'Data Analyst and Research Assistant',
        'time' : '2025 - 2026',
        'des' : [
            'Analysis of medical data to derive actionable insights, providing yearly summaries generating key business questions and plans, leading to a shiftin marketing strategies of clients worth around 60% oftotal clients.',
            'Created analysis presetfor subsequent analysis reducing future analysis time duration by 80%.' ,
            'Assistance in medicalresearch aimed to propose and improve treatment among national based clinics by analyzing proceeding results from experiments and providing visual aids to help showcase results.',
            'Feature creation to improve client satisfaction using programming tools, creating a database to derive future insights, with a projected return rate of 40% following better interactions following treatments.'
        ]
    },
    'Babcock University' : {
        'role' : ['Student Council Member', 'Final’s Reasearch Group Leader'],
        'time' : '',
        'des' : ['Worked with fellow executives to propose the setting up a cybercafé to the        SchoolAuthority, this was approved and the cybercafe was set up under my direction bringing solution and ease to the student populace.', 
        'Led cross-functionalteams to achieve project goals on time. Implemented quality control measures for equipments used during the experiment and ensured adherence to standards.'
        ]
    }
}
function exp_act(){
    const clicked = document.querySelector('#exp_loc').nodeValue
    console.log(clicked)

   
};

//const ['SelectedExp' , 'setSelectedExp'] = useState(-1);

function exp_sec(){
    return(
        <>
            <div>
                <h2>Experince</h2>
                <p>Here are some of the role's held along the years.</p>
                <div>
                    <ul>
                        {exp_loc.map(exp_loc => <button onClick={() =>{
                            console.log(exp_loc)
                        }} id={exp_loc}>{exp_loc}</button>)}                        
                    </ul>
                </div>
                <div id="exp_out">

                </div>
            </div>
        </>
    )

};

export default exp_sec