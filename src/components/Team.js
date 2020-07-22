import React from 'react'
import Bio from './Bio'
import Advisor from './Advisor'

import './Team.css'

const Team = props => (
    <div className="Team">
        <div className="CoreTeam">
            <div className="TeamIntro">
                <h4>Meet Your Partners at Leftfield</h4>
            </div>
            <Bio
                name="Mohan Ramani"
                position="CEO"
                text="Mohan is an experienced entrepreneur who has built and managed companies in the technology, manufacturing, government and financial services sectors. He has extensive international experience in sales and business development, P&L management, strategy development, and execution with both start-up and mature organizations in the United States, Europe and India. Over the last decade, he has helped deliver significant enterprise value for clients by delivering significant business development opportunities with large enterprise customers, establishing effective distribution channels in new markets, and expanding their market share in their existing markets. As Founder and Managing Director at Leftfield Services, he brings all of his experience, knowledge and relationships to bear to achieve our clients’ objectives.
                "
                image={require('../images/mohan-image.jpeg')}
                linkedin="https://www.linkedin.com/in/mohan-ramani-4441b8/" />
            <Bio
                name="Marcus Matthews"
                position="Senior Director – Europe"
                text="As the Senior Director for Europe, Marcus works with clients on identifying and developing opportunities at the EU level and in select member states.  An experienced government relations professional, he is highly skilled at developing strategic opportunities and commercial relationships. He has advocated for clients with  a number of state agencies in Healthcare, Telecommunications and other sectors. Most recently, he developed and established the Regional Internet Service Providers Association (RISPA) to advocate for the interests of 40 Irish broadband companies. As managing director of RISPA, Marcus assembled an industry debt finance programme, successfully developing a €400mn alternative proposal to the €3bn National Broadband Plan, for which he organized and managed a public affairs campaign as head of delegation including representations in the media and Parliament. He has also assisted several energy technology companies to both navigate the EU subsidy landscape and secure blended investments for their commercial development activities
 
                Marcus is a qualified governance and compliance professional, and a certified member of the Institute of Chartered Secretaries and Administrators (ICSA). He began his career in the financial services industry, specializing in the placement of bespoke insurance coverage for high-value capital assets, before moving into business consulting and eventually government relations."
                image={require('../images/marcus-image.jpg')}
                linkedin="https://www.linkedin.com/in/marcus-matthews/" />
            <Bio
                name="TBD"
                position="Senior Director - North America"
                text="LFS will soon announce our Senior Director, North America. He is already actively engaged in assisting our clients in engaging with Federal agencies and in sourcing relevant opportunities in a number of states in the East Coast and the Midwest.  Prior to joining the LFS team, he founded and built a highly successful government affairs consulting firm that supported a broad range of companies with their government contracting and public fund raising efforts. Over 15 years, they delivered significant results for their clients at the Federal level, in 21 states, and dozens of cities and counties. That entity was sold to a much larger international firm. He started as a staff member on the Hill, rapidly rising to become a senior member of staff supporting one of the highest ranked senators in Majority Leadership at that time.  In that role, he worked with hundreds of community & economic development groups, municipal & state leaders, and trade associations. This broad and deep network of long-standing relationships has allowed him to work effectively and successfully with 3 different presidential administrations over the last 2 decades."
                image={require('../images/tbd.png')} />
            <div className="AdvisorsIntro">
                <h4>Our Advisory Team</h4>
            </div>
            <div className="Advisors">
                <Advisor
                    image={require('../images/mohan-image.jpeg')}
                    name="Advisor 1"
                    bio="Mohan is an experienced entrepreneur who has built and managed companies in the technology, manufacturing, government and financial services sectors. He has extensive international experience in sales and business development." />
                <Advisor
                    image={require('../images/mohan-image.jpeg')}
                    name="Advisor 1"
                    bio="Mohan is an experienced entrepreneur who has built and managed companies in the technology, manufacturing, government and financial services sectors. He has extensive international experience in sales and business development." />
                <Advisor
                    image={require('../images/mohan-image.jpeg')}
                    name="Advisor 1"
                    bio="Mohan is an experienced entrepreneur who has built and managed companies in the technology, manufacturing, government and financial services sectors. He has extensive international experience in sales and business development." />
                <Advisor
                    image={require('../images/mohan-image.jpeg')}
                    name="Advisor 1"
                    bio="Mohan is an experienced entrepreneur who has built and managed companies in the technology, manufacturing, government and financial services sectors. He has extensive international experience in sales and business development." />
            </div>
        </div>
    </div>
)

export default Team