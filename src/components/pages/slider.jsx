import React from 'react';
import Foto  from "../../img/foto.png"
const Slider = () => {
    return (
        <section id="slider">
            <div className="container">
                <div className="slider">
                     
                           <img src= {Foto} alt="foto" />
                      
                </div>
            </div>
        </section>
    );
};

export default Slider;