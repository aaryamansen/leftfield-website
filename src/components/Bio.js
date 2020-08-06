import React from 'react'
import './Bio.css'

const Bio = props => (
    <div className="BioContainer">
        <div className="Bio">
            <img className="BioImage" src={props.image} />
            <div className="BioText">
                <h1>{props.name}</h1>
                <h3>{props.position}</h3>
                <p>{props.text}</p>
                <a href={props.linkedin}>
                  <img className="lilogo" width="30" src={require('../images/in-logo.png')} />
                </a>
            </div>
        </div>
    </div>
)

export default Bio