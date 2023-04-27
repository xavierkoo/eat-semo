import React from 'react';
import logo from '../assets/eat-semo-logo.png';

const Home = () => (
    <div>
        <h1>Home</h1>
        <p className='mb-5'>Welcome to Eat Semo?!</p>
        <div className='mt-5'>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    </div>
);

export default Home;