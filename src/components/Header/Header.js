import React from 'react'
import Tech from '../../img/tech2.jpg'


function Header () {

 return (
     <div>
         
         <nav className="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
<div className="container-fluid">
    <a className="navbar-brand" href='/'><img src={Tech} alt="Texas Tech" /></a>


    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href='/'>Home</a> 
            </li>
            <li className="nav-item">
                <a className="nav-link" href='/portfolio'>Portfolio</a> 
            </li>
            <li className="nav-item">
                <a className="nav-link" href='/contact'>Connect</a> 
            </li>
        </ul>
    </div>
</div>
</nav>
        
         
     </div>
 )
}

export default Header; 