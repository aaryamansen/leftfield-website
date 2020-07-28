import React from 'react'
import BioPreview from '../components/BioPreview'
import './TeamPreview.css'

const TeamPreview = props => (
    <div className="TeamP">
        <div className="CoreTeamP">
            <div className="TeamIntroP">
                <h1>The Leftfield Team</h1>
                <div className="TCont">
                    <BioPreview 
                        name="Mohan Ramani"
                        position="Managing Director"
                        image={require('../images/mohan-image.jpg')}
                        linkedin="https://www.linkedin.com/in/mohan-ramani-4441b8/"
                    />
                    <BioPreview
                        name="Marcus Matthews"
                        position="Senior Director – Europe"
                        image={require('../images/marcus-image.jpg')}
                        linkedin="https://www.linkedin.com/in/marcus-matthews/"
                    />
                    <BioPreview
                        name="TBA"
                        position="Senior Director - North America"
                        image={require('../images/tbd.png')}
                    />
                </div>
            </div>
            <div className="AdvisorsIntroP">
                <h1>Advisors</h1>
                <div className="ACont">
                    <BioPreview
                        image={require('../images/bill-image.jpg')}
                        name="William Pazos"
                        linkedin="https://www.linkedin.com/in/william-pazos-1273a113/"
                    />
                    <BioPreview
                        image={require('../images/sanjay-image.png')}
                        name="Sanjay Ram"
                        linkedin="https://www.linkedin.com/in/sanjay-ramabhadran-293778a/"
                    />
                </div>
            </div>
            
        </div>
    </div>
)

export default TeamPreview