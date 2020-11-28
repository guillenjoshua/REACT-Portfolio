import React from 'react'
import "../../css/Frontpage.css"
import Self from '../../img/self.jpg'


function FrontPage () {

 return (
     <div>
         
    {/* <div class="view" style={"background-image: url('img/skyline2.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center center; padding-bottom: 180px;"}></div> */}
        
        <div className="container-fluid padding">
        <div className="row padding">

            <div className="col-sm-12 col-lg-5">
                <img src={Self} alt="Joshua Guillen" className="img-fluid"/>
            </div>
            
            <div className="col-md-12 col-lg-7">
                <h2><span>Joshua Guillen</span></h2>
                <p> <span>Originally from El Paso, TX and currently reside in Houston, TX.  Employed in the Oil & Gas industry, specializing in completions with a focus on Hydraulic Fracturing. I received my BS in Petroleum Engineering from Texas Tech University.</span></p>
                <p><span>Although my current career is in the Oil & Gas industry, the changes that have occured in the industry globally has led me to the path of web development and programming. My focus is frontend and backend development with HTML, CSS and Javascript.</span></p>
            </div>
        
        </div>
        </div>
    

     </div>
 )
}

export default FrontPage; 