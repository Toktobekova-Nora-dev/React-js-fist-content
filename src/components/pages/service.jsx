import React from 'react';
import { HiArrowUpRight } from "react-icons/hi2";
import Persone from "../../img/persone-service.png"

const Service = () => {
    return (
        <section id="section">
            <div className="container">
                <div className="section">
                        <div className="section-one">
                            <h1>Build Your <br/> Awesome <br /> Platform</h1>
                            <p>Enver studio is a digital studio that offers several services <br />
                             such as UI/UX Design to developers, we will provide the best
                              <br /> service for those of you who use our services.</p>
                              <button>Our Services <HiArrowUpRight /></button>
                            </div>
                            <div className="section-two">
                                <img src = {Persone} alt="Persone" />
                            </div>
                </div>
            </div>
        </section>
    );
};

export default Service;