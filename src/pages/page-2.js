import React from 'react'
import Link from 'gatsby-link'
import '../layouts/index.css'

import Header from '../components/header'
import Contact from '../components/Contact'

const SecondPage = () => (
  <div className="ServPage">
    <Header />
    <div className="ServPageContainer">
      <h1>Services</h1>
      <br />
      <h2>Business Development</h2>
      <p>
        By helping clients identify and successfully engage with enterprise clients in the public and private sectors, the team at LFS has delivered over $800 Million in contracts to clients over the last decade.
        <br />
        <br />
        LFS specializes in helping companies expand their business development and revenue generation activities in some of the largest economic areas in the world: the United States, the European Union, S-E Asia, and India.
        <br />
        <br />
        In the United States, the LFS team has 20 years of experience in successfully helping clients sell their products and services into various departments of the Federal government and a number of federal and state agencies.  Over that time, the team has delivered over $500 Million in revenues for our clients from government and agency engagements.
        <br />
        <br />
        The team also has successfully delivered business for clients from some of the largest firms in the US economy in a range of sectors including Healthcare, Financial Services, Telecommunications, Defense, and Information Technology.  Our efforts have delivered over $200 million in revenues for our clients out of accounts in the private sector.
        <br />
        <br />
        LFS can help our clients in the following ways:
        <br />
        <ol>
          <li>Identify relevant opportunities</li>
          <li>Position the client and their offering to maximize the chances of a Win</li>
          <li>Assist the client in the execution of business development activities</li>
          <li>Inform and guide the client through the procurement process</li>
        </ol>
      </p>
      <br />
      <br />
      <br />
      <h2>Government Relations</h2>
      <p>
        In addition to the commercial services outlined above, we also assist clients in their government relations and regulatory management needs through our sister entities that are registered to provide such services.
        <br />
        <br />
        In that area, the relevant members of the team have:
        <br />
        <br />
        In the US, delivered approximately $400M in government subsidies including grants, low interest loans, tax credits, tax abatements and earmarks
        <br/>
        <ul>
          <li>worked in twenty-three different US States</li>
          <li>worked with three different Presidential administrations from both parties</li>
        </ul>
        <p>
          In the EU, delivered c. 250 Million Euros in value to clients through a variety of mechanisms including access to low cost debt, infrastructure subsidies, and regulatory guidance.
        </p>
        <p>
          Clients include:
        </p>
        <ul>
          <li>Fortune 500 and 5000 firms</li>
          <li>Trade Associations and Advocacy groups</li>
          <li>College and Universities</li>
          <li>Health Care and Hospital organizations</li>
          <li>Other companies of all shapes, stages and sizes</li>
        </ul>
      </p>
    </div>
    <Contact />
  </div>
)

export default SecondPage
