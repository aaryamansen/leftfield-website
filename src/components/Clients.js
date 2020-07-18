import React from 'react';
import './Clients.css';

const Clients = props => (
    <div className="ClientsContainer">
        <div className="ClientsIntro">
            <h4>The Clients who Trust Us</h4>
            <h2>Our clients include Fortune 500 and 5000 firms, trade associations and advocacy groups, colleges and universities and healthcare organizations.</h2>
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