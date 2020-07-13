import React from 'react'
import './Contact.css'

const Contact = props => (
    <div className="Contact">
        <div className="ContactInfo">
            <div className="Address">
                <h4>Address</h4>
                <p>Veembroederhof 119</p>
                <p>1019 HD Amsterdam</p>
            </div>
            <div className="Email">
                <h4>Email Us</h4>
                <p>mohan@leftfield-services.com</p>
            </div>
            <div className="Phone">
                <h4>Call Us</h4>
                <p>+31 (0) 20 890 2143 </p>
            </div>
        </div>
    </div>
)

export default Contact