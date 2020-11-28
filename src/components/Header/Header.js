import React from 'react'
import Tech from '../../img/tech2.jpg'
import Contact from '../Contact/Contact'

function Header () {

 return (
     <div>
         
         <nav class="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
<div class="container-fluid">
    <a class="navbar-brand" href="index.html"><img src={Tech} alt="Texas Tech" /></a>


    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href=''>Home</a> 
            </li>
            <li class="nav-item">
                <a class="nav-link" href="portfolio.html">Portfolio</a> 
            </li>
            <li class="nav-item">
                <a class="nav-link" href={Contact}>Connect</a> 
            </li>
        </ul>
    </div>
</div>
</nav>
        
         
     </div>
 )
}

export default Header; 