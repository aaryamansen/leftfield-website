import React from 'react';
import Link from 'gatsby-link';
import './GovtCard.css';

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
        <Link to="/page-2"><button>Learn More</button></Link>
    </div>
)

export default GovtCard