import React from 'react'
import Link from 'gatsby-link'
import '../layouts/index.css'

import Header from '../components/header'
import Contact from '../components/Contact'
import Team from '../components/Team'

const TeamPage = () => (
  <div className="TeamPage">
    <Header />
    <div className="TeamICard">
        <h1>Team</h1>
    </div>
    <br />
    <Team />
    <Contact />
  </div>
)

export default TeamPage
