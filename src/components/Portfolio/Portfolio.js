import React from 'react'
import PortfolioCards from '../Cards/PortfolioCards'
import '../../css/Frontpage.css'

function Portfolio () {

 return (
     <div className="background">

        <div class="portfolio">
        <div class="container-fluid padding">
        <div class="row padding">
            <PortfolioCards />
        </div>
        </div>
        </div>

     </div>

 )

}

export default Portfolio