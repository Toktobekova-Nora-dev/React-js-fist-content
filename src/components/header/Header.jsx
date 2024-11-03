import React from 'react';
import logo from "../../img/logo.chrome.png"
import  Data from "../../img/Sort.png"
const Header = () => {
    return (
      <header id="header">
        <div className="container">
            <div className="header">
               <div className='logo'> <img src= {logo} alt="logo"/>
                 <h1>Evner</h1>
               </div>
                  <nav >
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Our Project</a>
                    <a href="#">About us</a>
                  </nav>
                  <div className='inputter'>
                     <input type="text" />
                  </div>
                  <div className='burger'><img src= {Data} alt="Data" /></div>
            </div>
        </div>
      </header>
    );
};

export default Header;