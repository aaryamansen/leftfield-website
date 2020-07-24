import React from 'react';
import './Clients.css';

const Clients = props => (
    <div className="ClientsContainer">
        <div className="ClientsIntro">
            <h1>Clients</h1>
        </div>
        <div className="Clients">
            <img width="200px"src={require('../images/client-logo.png')} />
            <img width="200px"src={require('../images/client-logo.png')} />
            <img width="200px"src={require('../images/client-logo.png')} />
            <img width="200px"src={require('../images/client-logo.png')} />
            <img width="200px"src={require('../images/client-logo.png')} />
            <img width="200px"src={require('../images/client-logo.png')} />
            <img width="200px"src={require('../images/client-logo.png')} />
            <img width="200px"src={require('../images/client-logo.png')} />
        </div>
    </div>
)

export default Clients