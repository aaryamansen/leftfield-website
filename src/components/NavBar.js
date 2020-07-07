import React from 'react'
import Link from 'gatsby-link'
import './NavBar.css'

const NavBar = props => (
    <div className="NavBar">
      <img width="100" src={require('../images/leftfield-logo.jpg')} />
      <div className="NavLinks">
        <Link to="/">Services</Link>, <Link to="/">Team</Link>, <Link>Contact</Link>
      </div>
    </div>
)

export default NavBar