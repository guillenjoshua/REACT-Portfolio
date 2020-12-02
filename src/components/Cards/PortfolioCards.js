import React from 'react'
import IMG from '../../img/IMG_1455.JPG'
import Island from '../../img/myisland.jpg'
import Resume from '../../img/Resume.pdf'


function Cards () {

 return (
    <div className="background">
        <div className="row">
            <div class="col-md-6 col-lg-6 ">
                    <div class="card cardportfolio">
                        <img class="card-img-top" src={IMG} alt="Houston Skyline" />
                        <div class="card-body">
                            <h4 class="card-title">Resume</h4>
                            <a href={Resume} class="btn btn-outline-secondary">See Resume</a>
                        </div>
                    </div>
            </div>

            <div class="col-md-6 col-lg-6 ">
                    <div class="card cardportfolio">
                        <img class="card-img-top" src={Island} alt="Milos Island" />
                        <div class="card-body">
                            <h4 class="card-title">Projects</h4>
                            <a href="/projects" class="btn btn-outline-secondary">See Projects</a>
                    </div>
            </div>
        </div>
    </div>




     </div>

 )
}

export default Cards