import React from 'react'
// import Img from '../../img/IMG_1455.JPG'
// import Island from '../../img/myisland.jpg'

function Cards () {

 return (
     <div>

<div class="col-md-5 col-lg-5  firstCard">
        <div class="card">
            <img class="card-img-top" src="/img/IMG_1455.JPG" alt="Houston Skyline" />
            <div class="card-body">
                <h4 class="card-title">Resume</h4>
                <a href="img/Resume.pdf" class="btn btn-outline-secondary">See Resume</a>
            </div>
        </div>
</div>

<div class="col-md-5 col-lg-5 secondCard">
        <div class="card">
            <img class="card-img-top" src="/img/myisland.jpg" alt="Milos Island" />
            <div class="card-body">
                <h4 class="card-title">Projects</h4>
                <a href="projects.html" class="btn btn-outline-secondary">See Projects</a>
            </div>
        </div>
</div>




     </div>

 )
}

export default Cards