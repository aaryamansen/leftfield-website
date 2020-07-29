import React from 'react'
import Link from 'gatsby-link'
import '../layouts/index.css'

import Header from '../components/header'
import Contact from '../components/Contact'

const ServicesPage = () => (
  <div className="ServPage">
    <Header />
    <div className="ServICard">
        <h1>Services</h1>
    </div>
    <div className="ServPageContainer">
      <br />
      <h2>Business Development</h2>
      <img className="bigimg" src={require('../images/growth-big-graphic.png')} />
      <p>
        By helping clients identify and successfully engage with enterprise clients in the public and private sectors, the team at LFS has delivered $750 Million in contracts to clients over the last decade.
        <br />
        <br />
        LFS specializes in helping companies expand their business development and revenue generation activities in some of the largest economic areas in the world: the United States, the European Union, South East Asia, and India.
        <br />
        <br />
        The team has delivered over $250 Million in revenues for clients from some of the largest global firms in Healthcare, Financial Services, Telecommunications, Defense, and Information Technology.
        <br />
        <br />
        We work with our clients to:
        <br />
        <ol>
          <li>Identity and create relevant opportunities</li>
          <li>Position their offering to maximize the chances of a win</li>
          <li>Assist in the execution of all business development activities</li>
          <li>Work with the client through the entire process</li>
        </ol>
      </p>
      <br />
      <br />
      <br />
      <h2>Government Relations</h2>
      <img className="bigimg" src={require('../images/govt-big-graphic.png')} />
      <p>
        In addition to the commercial services outlined above, we also assist clients in their government relations and regulatory management.
        <br />
        <br />
        The LFS team has 20 years of experience in successfully creating opportunities and winning orders from almost every department and agency of the Federal government, 21 states, and dozens of state agencies and local and municipal governments. Over the last decade, the team has delivered $500 Million in revenues for our clients from government and agency engagements.
        <br />
        <br />

        In that area, the relevant members of the team have:
        <br />
        <br />
        In the US, delivered approximately $400M in government subsidies including grants, low interest loans, tax credits, tax abatements and earmarks
        <br/>
        <ul>
          <li>worked in twenty-one different US States</li>
          <li>worked with three different Presidential administrations from both parties</li>
        </ul>
        <p>
        In the EU, delivered €450M in value to clients through a variety of mechanisms including access to low cost debt, infrastructure subsidies, and regulatory guidance.
        </p>
        <p>
          Clients include:
        </p>
        <ul>
          <li>Fortune 500 and 5000 firms</li>
          <li>Trade Associations and Advocacy groups</li>
          <li>Colleges and Universities</li>
          <li>Health Care and Hospital organizations</li>
          <li>Other companies of all shapes, stages and sizes</li>
        </ul>
      </p>
    </div>
    <Contact />
  </div>
)

export default ServicesPage
