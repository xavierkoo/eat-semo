import React, { useState } from 'react';
import logo from '../assets/mascot.png';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';

const Home = () => {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedBudget, setSelectedBudget] = useState('');
    const [selectedCuisine, setSelectedCuisine] = useState('');
    const [isLeft, setIsLeft] = useState(true);

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.textContent);
    };

    const handleBudgetChange = (event) => {
        setSelectedBudget(event.target.textContent);
    };

    const handleCuisineChange = (event) => {
        setSelectedCuisine(event.target.textContent);
    };

    const handleLeftClick = () => {
        setIsLeft(true);
    };
    
    const handleRightClick = () => {
        setIsLeft(false);
    };

    return (
        <div>
            <h1 className='my-5 mb-5'>Today want to Eat Semo?!</h1>
            <div className='mt-5'>
                <img src={logo} className="App-logo" alt="logo" style={{ height: '200px' }}/>
            </div>
            <div className='mt-5'>
                <h2 className='mt-4'>Eat Where? <span style={{ color: 'blue' }}>{selectedLocation}</span></h2>
                <Dropdown size="lg">
                    <Dropdown.Toggle 
                        variant="primary" 
                        id="dropdown-basic" 
                    >
                        Select a location
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" onClick={handleLocationChange}>East</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={handleLocationChange}>North</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onClick={handleLocationChange}>North-East</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onClick={handleLocationChange}>South</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" onClick={handleLocationChange}>Central</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" onClick={handleLocationChange}>Convenient</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <h2 className='mt-4'>Eat How Much? <span style={{ color: 'green' }}>{selectedBudget}</span></h2>
                <Dropdown size="lg">
                    <Dropdown.Toggle 
                        variant="success" 
                        id="dropdown-basic" 
                    >
                        Select a budget
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" onClick={handleBudgetChange}>Fancy 💸💸</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={handleBudgetChange}>Gai Gai 💰💰</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onClick={handleBudgetChange}>Budget ✅✅</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" onClick={handleBudgetChange}>Grass 🌱🌱</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <h2 className='mt-4'>Eat What? <span style={{ color: 'red' }}>{selectedCuisine}</span></h2>
                <Dropdown size="lg">
                    <Dropdown.Toggle 
                        variant="danger" 
                        id="dropdown-basic" 
                    >
                        Select a cuisine
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" onClick={handleCuisineChange}>Japanese 🇯🇵</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={handleCuisineChange}>Western 🍽️</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onClick={handleCuisineChange}>Cafe ☕</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" onClick={handleCuisineChange}>Korean 🇰🇷</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" onClick={handleCuisineChange}>Chinese 🧧</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" onClick={handleCuisineChange}>Fast-Food 🍔</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <h2 className='mt-4'>Eat Before? {isLeft}</h2>
                <ButtonGroup>
                    <Button variant={isLeft ? 'success' : 'secondary'} onClick={handleLeftClick}>Yes</Button>
                    <Button variant={!isLeft ? 'success' : 'secondary'} onClick={handleRightClick}>No</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Home;