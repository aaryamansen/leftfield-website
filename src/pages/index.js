import React from 'react';
import Link from 'gatsby-link';
import NavBar from '../components/NavBar';
import Services from '../components/Services';
import IntroCard from '../components/IntroCard'
import Header from '../components/header'
import Team from '../components/Team'
import Contact from '../components/Contact'

const IndexPage = () => (
  <div className="SiteContainer">
    <Header />
    <IntroCard />
    <Services />
    <Team />
    <Contact />
  </div>
)

export default IndexPage
