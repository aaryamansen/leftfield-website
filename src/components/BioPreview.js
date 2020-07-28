import React from 'react'
import './BioPreview.css'

const BioPreview = props => (
    <div className="BPCont">
        <div className="BioP">
            <img height="360" src={props.image} />
            <br />
            <h1>{props.name}</h1>
            <br />
            <h3>{props.position}</h3>
            <br />
            <a href={props.linkedin}>
                <img width="30" src={require('../images/in-logo-white.png')} />
            </a>
        </div>
    </div>
)

export default BioPreview