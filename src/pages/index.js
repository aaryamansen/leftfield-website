import React from 'react';
import Link from 'gatsby-link';
import '../layouts/index.css'

import NavBar from '../components/NavBar';
import Services from '../components/Services';
import IntroCard from '../components/IntroCard'
import Header from '../components/header'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Clients from '../components/Clients'

const IndexPage = () => (
  <div className="SiteContainer">
    <Header />
    <IntroCard />
    <Services />
    <Clients />
    <Team />
    <Contact />
  </div>
)

export default IndexPage
