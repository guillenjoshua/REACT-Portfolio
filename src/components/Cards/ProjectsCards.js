import React from 'react'


function ProjectsCards () {

 return (
    <div>
        <div className="row">
            <div class="col-md-6 col-lg-6">
            <div className="card cardprojects">
                <img className="card-img-top" src="/img/ISS.jpg" alt="Houston Skyline" />
                <div className="card-body">
                    <h4 className="card-title">Space Enthusiast</h4>
                    <a href="https://guillenjoshua.github.io/Space-Enthusiast/" className="btn btn-outline-secondary">Deployed</a>
                    <a href="https://github.com/guillenjoshua/Space-Enthusiast" className="btn btn-outline-secondary">GitHub</a>
                    </div>
                </div>
            </div>
            

            <div className="col-md-6 col-lg-6">
                <div className="card cardprojects">
                    <img className="card-img-top  " src="/img/WorkScheduler.JPG" alt="Milos Island" />
                    <div className="card-body  hops">
                        <h4 className="card-title">Local-Hops</h4>
                        <a href="https://local-hops.herokuapp.com/" className="btn btn-outline-secondary">Deployed</a>
                        <a href="https://github.com/guillenjoshua/local-hops" className="btn btn-outline-secondary">GitHub</a>
                    </div>
                </div>
            </div>
        </div>

    </div>

 )
}

export default ProjectsCards