import React from 'react'
import './IntroCard.css'

const IntroCard = props => (
    <div className="IntroCard">
        <div class="IntroContainer">
            <div className="IntroInfo">
                <h1>Leftfield is a growth company.</h1>
                <h2>We exist to help you scale.</h2>
                <p>We are a battle-tested team that has helped companies around the world grow revenues, market share and enterprise value.</p>
            </div>
            <div className="IntroImage">
                <img width="300" src={props.image} />
            </div>
        </div>
    </div>
)

export default IntroCard