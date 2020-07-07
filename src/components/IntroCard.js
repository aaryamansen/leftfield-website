import React from 'react'
import './IntroCard.css'

const IntroCard = props => (
    <div className="IntroCard">
        <div class="IntroContainer">
            <div className="IntroInfo">
                <h1>Leftfield is a growth company.</h1>
                <h2>Which means, we exist to help you grow.</h2>
                <p>We are a bunch of battle-tested veterans who have helped business leaders across United States, Europe and Asia to not just scale up their revenues, market presence or market share, but to scale up their ambition.</p>
            </div>
            <div className="IntroImage">
                <img width="300" src={props.image} />
            </div>
        </div>
    </div>
)

export default IntroCard