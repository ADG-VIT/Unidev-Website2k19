import React from 'react';
import HomeColumnOne from './HomeColumnOne';
import HomeColumnTwo from './HomeColumnTwo';
import './Home.css'

const Home = () => {
    return (
        <div id = "home">
            <div></div>
            <HomeColumnOne id="home1"/>
            <div></div>
            <HomeColumnTwo id="home2"/>
        </div>
    );
}

export default Home;