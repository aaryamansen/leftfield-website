import React from 'react';
import './Advisor.css';

const Advisor = props => (
    <div className="Advisor">
        <img width="250" src={props.image} />
        <h1>{props.name}</h1>
        <h3>{props.bio}</h3>
    </div>
)

export default Advisor