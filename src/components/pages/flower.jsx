import React, { Component } from 'react';

class Flower extends Component {
    render() {
        return (
            <div id='flower'>
                  <div className="container">
                        <div className="flower">
                               <div className="flower-one">
                                <h1>Contact us for the service <br /> you want to use</h1>
                               </div>
                               <div className="flower-two">
                                  <button>Contact us</button>
                               </div>
                        </div>
                  </div>
            </div>
        );
    }
}

export default Flower;