import React from 'react'
import './GovtCard.css'

const GovtCard = props => (
    <div className="GovtCard">
        <div class="GovtContainer">
            <div className="GovtInfo">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
            <div className="GovtImageContainer">
                <img width="300" src={props.image} />
            </div>
        </div>
        <button>Learn More</button>
    </div>
)

export default GovtCard