import React from 'react';
import './Services.css';
import GrowthCard from './GrowthCard';
import GovtCard from './GovtCard';
import StatefulGrowth from './StatefulGrowth'

const Services = props => (
    <div className="ServicesContainer">
        <div className="ServicesIntro">
            <h4>Explore our Services</h4>
            <h2>Leftfield can be your competitive advantage across two vital areas -</h2>
        </div>
        <GrowthCard
        title="Business Development"
        text="We are focused on all of those activities that help a business grow revenues, expand its customer base, increase its distribution, and enter new markets. We do this by leveraging our senior enterprise relationships developed over time and by …."
        image={require('../images/growth-data-graphic.png')} />
        <GovtCard
        title="Government Relations"
        text="A service that helps our clients engage more meaningfully and profitably with all levels of government in the US and EU. We help you win government contracts and secure non-dilutive government financing."
        image={require('../images/govt-data-graphic.png')} />
        {/* 
        <StatefulGrowth
                title="Growth Services"
                text="We are focused on all of those activities that help a business grow revenues, expand its customer base, increase its distribution, and enter new markets."
                image={require('../images/growth-data-graphic.png')}
                expandedtext="By helping clients identify and successfully engage with enterprise clients in the public and private sectors, the team at LFS has delivered over $800 Million in contracts to clients over the last decade.
                LFS specializes in helping companies expand their business development and revenue generation activities in some of the largest economic areas in the world: the United States, the European Union, S-E Asia, and India.
                In the United States, the LFS team has 20 years of experience in successfully helping clients sell their products and services into various departments of the Federal government and a number of federal and state agencies.  Over that time, the team has delivered over $500 Million in revenues for our clients from government and agency engagements.
                The team also has successfully delivered business for clients from some of the largest firms in the US economy in a range of sectors including Healthcare, Financial Services, Telecommunications, Defense, and Information Technology.  Our efforts have delivered over $200 million in revenues for our clients out of accounts in the private sector.
                LFS can help our clients in the following ways: Identify relevant opportunities, Position the client and their offering to maximize the chances of a Win, Assist the client in the execution of business development activities, Inform and guide the client through the procurement process
                " />
        */}        
    </div>
)

export default Services