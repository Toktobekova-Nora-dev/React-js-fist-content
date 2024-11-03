import React from 'react';
import Boxer from "../../img/code.png"
import Red from "../../img/layer.png"
import Yello from "../../img/hjhj.png"
import Kole from "../../img/klling.png"
import Camera from "../../img/camera.png"
import Play from "../../img/video-play.png"


const Pach = () => {
    return (
        <hero id="hero">
            <div className="container">
                <div className="hero">
                      <div className="hero-one">
                        <h1>The Service We Provide <br /> For You</h1>
                      </div>
                      <div className="hero-two">
                          <div className="box">
                              <div className="boxshadow">
                                   <div className='imgBox'><img src= {Boxer} alt="Boxer" /></div>
                                   <h3>Development</h3>
                                   <p>Create a platform with the best <br /> and coolest quality from us.</p>
                              </div>
                             
                              <div className="boxshadow">
                                   <div className='img'><img src= {Red} alt="Red" /></div>
                                   <h3>Development</h3>
                                   <p>Create a platform with the best <br /> and coolest quality from us.</p>
                              </div>

                              <div className="boxshadow">
                                   <div className='imgBox'><img src= {Yello} alt="Yello" /></div>
                                   <h3>Development</h3>
                                   <p>Create a platform with the best <br /> and coolest quality from us.</p>
                              </div>

                              <div className="boxshadow">
                                   <div className='imgBox'><img src= {Kole} alt="Kole" /></div>
                                   <h3>Development</h3>
                                   <p>Create a platform with the best <br /> and coolest quality from us.</p>
                              </div>

                              <div className="boxshadow">
                                   <div className='imgBox'><img src= {Camera} alt="Camera   " /></div>
                                   <h3>Development</h3>
                                   <p>Create a platform with the best <br /> and coolest quality from us.</p>
                              </div>

                              <div className="boxshadow">
                                   <div className='imgBox'><img src= {Play} alt="Play" /></div>
                                   <h3>Development</h3>
                                   <p>Create a platform with the best <br /> and coolest quality from us.</p>
                              </div>
                             

                          </div>
                      </div>
                </div>
            </div>
        </hero>
    );
};

export default Pach;