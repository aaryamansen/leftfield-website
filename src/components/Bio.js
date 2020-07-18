import React from 'react'
import './Bio.css'

const Bio = props => (
    <div className="BioContainer">
        <div className="Bio">
            <img width="300" src={props.image} />
            <div className="BioText">
                <h1>{props.name}</h1>
                <h3>{props.position}</h3>
                <p>{props.text}</p>
                <a href={props.linkedin}>
                    <button>Connect on LinkedIn</button>
                </a>
            </div>
        </div>
    </div>
)

export default Bio