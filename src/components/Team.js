import React from 'react'
import Bio from './Bio'
import Advisor from './Advisor'

import './Team.css'

const Team = props => (
    <div className="Team">
        <div className="CoreTeam">
            <div className="TeamIntro">
                <h4>Meet Your Partners at Leftfield</h4>
                <h2>We have helped companies across markets grow. And would love to do that for you.</h2>
            </div>
            <Bio
                name="Mohan Ramani"
                position="CEO"
                text="Mohan is an experienced entrepreneur who has built and managed companies in the technology, manufacturing, government and financial services sectors. He has extensive international experience in sales and business development, P&L management, strategy development, and execution with both start-up and mature organizations in the United States, Europe and India."
                image={require('../images/mohan-image.jpeg')}
                linkedin="https://www.linkedin.com/in/mohan-ramani-4441b8/" />
            <Bio
                name="Marcus Matthews"
                position="Senior Director – Europe"
                text="Marcus is an experienced cultivator of strategic opportunities and commercial relationships. Marcus is a qualified governance and compliance professional, and certified member of the Institute of Chartered Secretaries and Administrators (ICSA). Marcus' career began in the financial services industry working for a Maltese based commercial insurance brokerage that specialized in the international placement of bespoke coverage for high-value capital assets."
                image={require('../images/marcus-image.jpg')} />
            <div className="AdvisorsIntro">
                <h4>Our Advisory Team</h4>
            </div>
            <div className="Advisors">
                <Advisor
                    image={require('../images/mohan-image.jpeg')}
                    name="Advisor 1"
                    bio="Mohan is an experienced entrepreneur who has built and managed companies in the technology, manufacturing, government and financial services sectors. He has extensive international experience in sales and business development." />
                <Advisor
                    image={require('../images/mohan-image.jpeg')}
                    name="Advisor 1"
                    bio="Mohan is an experienced entrepreneur who has built and managed companies in the technology, manufacturing, government and financial services sectors. He has extensive international experience in sales and business development." />
                <Advisor
                    image={require('../images/mohan-image.jpeg')}
                    name="Advisor 1"
                    bio="Mohan is an experienced entrepreneur who has built and managed companies in the technology, manufacturing, government and financial services sectors. He has extensive international experience in sales and business development." />
                <Advisor
                    image={require('../images/mohan-image.jpeg')}
                    name="Advisor 1"
                    bio="Mohan is an experienced entrepreneur who has built and managed companies in the technology, manufacturing, government and financial services sectors. He has extensive international experience in sales and business development." />
            </div>
        </div>
    </div>
)

export default Team