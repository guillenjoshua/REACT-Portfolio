import React from 'react'


function Cards () {

 return (
    <div className="background">
        <div className="row">
            <div class="col-md-6 col-lg-6 ">
                    <div class="card cardportfolio">
                        <img class="card-img-top" src="/img/IMG_1455.JPG" alt="Houston Skyline" />
                        <div class="card-body">
                            <h4 class="card-title">Resume</h4>
                            <a href="/img/Resume.pdf" class="btn btn-outline-secondary">See Resume</a>
                        </div>
                    </div>
            </div>

            <div class="col-md-6 col-lg-6 ">
                    <div class="card cardportfolio">
                        <img class="card-img-top" src="/img/myisland.jpg" alt="Milos Island" />
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