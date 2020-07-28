import React from 'react';
import './Clients.css';

const Clients = props => (
    <div className="ClientsContainer">
        <div className="ClientsIntro">
            <h1>Clients</h1>
        </div>
        <div className="Clients">
            <a href="https://www.accipitersystems.com">Accipeter Systems</a>
            <a href="https://www.quizzify.com">Quizzify</a>
            <a href="https://www.twisted-rope.com">Twisted Rope</a>
        </div>
    </div>
)

export default Clients