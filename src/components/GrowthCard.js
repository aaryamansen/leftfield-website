import React from 'react'
import Link from 'gatsby-link';
import './GrowthCard.css'

const GrowthCard = props => (
    <div className="GrowthCard">
        <div class="GrowthContainer">
            <div className="GrowthInfo">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
            <div className="GrowthImageContainer">
                <img width="300" src={props.image} />
            </div>
        </div>
        <Link to="/page-2"><button>Learn More</button></Link>
    </div>
)

export default GrowthCard