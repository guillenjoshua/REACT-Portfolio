import React from 'react'
import ProjectsCards from '../Cards/ProjectsCards'
import '../../css/Frontpage.css'

function Projects () {

 return (
     <div className="background">

        <div class="portfolio">
        <div class="container-fluid padding">
        <div class="row padding">
            <ProjectsCards />
        </div>
        </div>
        </div>

     </div>

 )

}

export default Projects