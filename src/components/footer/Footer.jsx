import React from 'react';
import logo from "../../img/logo.chrome.png"

const Footer = () => {
    return (
        <header id="footer">
        <div className="container">
            <div className="footer">
               <div className='logo'> <img src= {logo} alt="logo"/>
                 <h1>Evner</h1>
               </div>
                  <nav >
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Our Project</a>
                    <a href="#">About us</a>
                  </nav>
                  <div>
                     <p>© 2022 Enver, All Rights Reserved</p>
                  </div>
            </div>
        </div>
      </header>
    );
};

export default Footer;