import React from 'react'
import Bio from './Bio'

import './team.css'

const Team = props => (
    <div className="Team">
        <div className="TeamIntro">
            <h4>Meet our Team</h4>
            <h2>We are battle-tested veterans with experience in x, y, & z.</h2>
        </div>
        <Bio
            name="Mohan Ramani"
            position="CEO"
            text="Mohan is an experienced entrepreneur who has built and managed companies in the technology, manufacturing, government and financial services sectors. He has extensive international experience in sales and business development, P&L management, strategy development, and execution with both start-up and mature organizations in the United States, Europe and India.  Over the last decade, he has helped deliver significant enterprise value for clients by delivering significant business development opportunities with large enterprise customers, establishing effective distribution channels in new markets, and expanding their market share in their existing markets.  As Founder and Managing Director at Leftfield Services, he brings all of his experience, knowledge and relationships to bear to achieve our clients’ objectives."
            image={require('../images/mohan-image.jpeg')}
            linkedin="https://www.linkedin.com/in/mohan-ramani-4441b8/" />
        <Bio
            name="Marcus Matthews"
            position="Senior Director – Europe"
            text="Marcus is an experienced cultivator of strategic opportunities and commercial relationships. Marcus is a qualified governance and compliance professional, and certified member of the Institute of Chartered Secretaries and Administrators (ICSA). Marcus' career began in the financial services industry working for a Maltese based commercial insurance brokerage that specialized in the international placement of bespoke coverage for high-value capital assets. Marcus subsequently moved into business consulting and assisted early stage Irish energy technology companies to both navigate the EU subsidy landscape and seek blended investment for their commercial development activities. Thereafter, Marcus expanded into government relations consulting, where he advocated on behalf of clients by engaging with state agencies in respect to commercially beneficial public policies. This work lead Marcus to develop a specialized knowledge of telecommunications and eventually establish the Regional Internet Service Providers Association (RISPA) to advocate for the interests of 40 Irish broadband companies. As the managing director of RISPA, Marcus assembled an industry debt finance programme and developed a €400mn alternative proposal to the €3bn National Broadband Plan, for which he organized and managed a public affairs campaign that included the media and high-profile parliamentary representations as head of delegation."
            image={require('../images/marcus-image.jpg')} />
        <Bio
            name="William Pazos"
            position="Senior Advisor"
            text="Bill is a carbon market pioneer who has managed emerging market and high yield investments for more than 25 years and currently serves as director of Kuber Energy, a renewable energy and climate finance advisory company in Singapore and COO & co-Founder of AirCarbon, a digital carbon exchange in Singapore.  Previously, he was a Managing Director at Standard Bank.  In this capacity he was the Global Head of Carbon origination and Finance, as well as a member of the board of Standard Merchant Bank Singapore.  As the CEO and founding partner of Ecoinvest Carbon S.A., a joint venture company with Bunge S.A., he built what became one of the world’s largest aggregator of carbon credits.

            In his early career he was a bond trader at JP Morgan Chase (MHTCo.) in New York as well as a partner at Dartley a large Emerging Markets Fixed Income Fund.  He holds a Bachelor Degree in Economics with a concentration in Mathematics from The College of Wooster, Ohio, and an MBA in International Management from ASU’s Thunderbird Graduate School of International Management. "
            image={require('../images/bill-image.jpg')} />
    </div>
)

export default Team