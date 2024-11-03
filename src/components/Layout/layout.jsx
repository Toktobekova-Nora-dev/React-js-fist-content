import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Service from '../pages/service';
import Pach from '../pages/pach';
import Slider from '../pages/slider';
import Flower from '../pages/flower';

const Layout = () => {
    return (
        <div className='layoutcome'>

            <Header/>
            <main>
                <Service/>
                <Pach/>
                <Slider/>
                <Flower/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;