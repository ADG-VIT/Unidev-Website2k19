import React from 'react';
import HomeColumnOne from './HomeColumnOne';
import HomeColumnTwo from './HomeColumnTwo';
import './Home.css'

const Home = () => {
    return (
        <div id = "home">
            <div></div>
            <HomeColumnOne/>
            <HomeColumnTwo/>
        </div>
    );
}

export default Home;