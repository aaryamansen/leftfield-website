import React from 'react';
import Link from 'gatsby-link';
import '../layouts/index.css'

import NavBar from '../components/NavBar';
import Services from '../components/Services';
import IntroCard from '../components/IntroCard'
import Header from '../components/header'
import TeamPreview from '../components/TeamPreview'
import Contact from '../components/Contact'
import Clients from '../components/Clients'

const IndexPage = () => (
  <div className="SiteContainer">

    <Header />

    <div className="IntroBG">
      <div className="Intro">
        <div className="IntroText">
          <h1>Leftfield is a growth company. We exist to help you scale.</h1>
          <p>We are a battle-tested team that has helped companies around the world grow revenues, market share and enterprise value.</p>
        </div>
        <div></div>
      </div>
    </div>

    <div className="Growth">
      <div className="TwoColText">
        <h4>SERVICES</h4>
        <h1>Business Development</h1>
        <p>We help our clients acquire new customers, expand their distribution channels, and enter new markets.</p>
        <Link to="/services"><h5>Learn More</h5></Link>
      </div>
      <div className="TwoColImg GrowthImgC">
        <img className="GrowthImg" src={require('../images/growth-data-graphic.png')} />
      </div>
    </div>

    <div className="Govt">
      <div className="TwoColText">
        <h1>Government Relations</h1>
        <p>A service that enables our clients to engage more meaningfully and profitably with all levels of government in the US and EU. We help you win contracts and secure government financing.</p>
        <Link to="/services"><h5>Learn More</h5></Link>
      </div>
      <div className="TwoColImg GovtImgC">
        <img className="GovtImg" src={require('../images/govt-data-graphic.png')} />
      </div>
    </div>

    <Clients />
    <TeamPreview />
    <Contact />

  </div>
)

export default IndexPage
