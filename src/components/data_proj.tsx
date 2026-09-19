import MpIMG from '../assets/proj_img/M_pox.jpeg'

import HdIMG from '../assets/proj_img/Heart_D.jpeg'

const data_projects = {
    'Porjects' : {
        'MPOX Analysis' : {
        'img' : {MpIMG},
        'Description' : 'Analysis on ',
        'Tools' : 'R'
        },
        'Heart Attack Analysis' : {
            'img' : {}, 
            'Description' : 'Analysis on',
            'Tools' : 'Python'
        },
        'Heart Diseases Analysis' : {
            'img' : {HdIMG},
            'Description' : 'Analysis on',
            'Tools' : 'SQL'
        }
    }
};

function data_pro(){
    return(
        <>
            <div>
                <div>
                    <h5>MPOX Analysis</h5>
                    <p>R</p>
                </div>
                <div>
                    <h5>Heart Attack Analysis</h5>
                    <p>Python</p>
                </div>
                <div>
                    <h5>Heart Disease Analysis</h5>
                    <p>SQL</p>
                </div>
            </div>
        </>
    )
};

export default data_pro;