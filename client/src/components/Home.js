import React, { useState } from 'react';
import logo from '../assets/mascot.png';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import data from './data.json';

const Home = () => {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedBudget, setSelectedBudget] = useState('');
    const [selectedCuisine, setSelectedCuisine] = useState('');
    const [isEatBefore, setIsEatBefore] = useState(true);
    const [filteredData, setFilteredData] = useState([]);

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
        setIsEatBefore(true);
    };
    
    const handleRightClick = () => {
        setIsEatBefore(false);
    };

    const navigate = useNavigate();

    const budgetMap = {
        'Fancy 💸💸': 1,
        'Gai Gai 💰💰': 2,
        'Budget ✅✅': 3,
        'Grass 🌱🌱': 4,
    };

    const cuisineMap = {
        "Japanese 🇯🇵": "Japanese",
        "Western 🍽️": "Western",
        "Cafe ☕": "Cafe",
        "Korean 🇰🇷": "Korean",
        "Chinese 🧧": "Chinese",
        "Asian 👲🐘🇲🇾🇻🇳": "Asian",
        "Fast-Food  🍔": "Fast-Food",
        "Dessert 🍧": "Dessert",
    };
      

    /**
     * The function filters data based on selected location, cuisine, budget, and whether the user has
     * eaten there before, and then sets and navigates to the result page with the filtered data.
     */
    const handleSubmit = () => {
        const filteredData = data.filter((item) => {
            const budgetValue = budgetMap[selectedBudget];
            const selectedCuisineValue = cuisineMap[selectedCuisine];
            console.log(selectedLocation, selectedCuisine, budgetValue, isEatBefore)
            return (
                item.area.includes(selectedLocation) &&
                item.cuisine === selectedCuisineValue &&
                item.price === budgetValue &&
                item.isEatBefore === isEatBefore
            );
        });
        console.log(filteredData)
        setFilteredData(filteredData);
        navigate(`/result/${encodeURIComponent(JSON.stringify(filteredData))}`);
    };

    return (
        <div>
            <h1 className='my-5 mb-4'>Today want to Eat Semo?!</h1>
            <div className='mt-4'>
                <img src={logo} className="App-logo" alt="logo" style={{ height: '200px' }}/>
            </div>
            <div className='mt-5'>
                <hr/>
                <h2 className='mt-3'>Eat Where? <span style={{ color: 'blue' }}>{selectedLocation}</span></h2>
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
                    </Dropdown.Menu>
                </Dropdown>
                <hr/>
                <h2 className='mt-3'>Eat How Much? <span style={{ color: 'green' }}>{selectedBudget}</span></h2>
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
                <hr/>
                <h2 className='mt-3'>Eat What? <span style={{ color: 'red' }}>{selectedCuisine}</span></h2>
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
                        <Dropdown.Item href="#/action-4" onClick={handleCuisineChange}>Asian 👲🐘🇲🇾🇻🇳</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" onClick={handleCuisineChange}>Fast-Food 🍔</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" onClick={handleCuisineChange}>Dessert 🍧</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <hr/>
                <h2 className='mt-3'>Eat Before?</h2>
                <ButtonGroup>
                    <Button variant={isEatBefore ? 'success' : 'secondary'} size="md" onClick={handleLeftClick}>Yes</Button>
                    <Button variant={!isEatBefore ? 'danger' : 'secondary'} size="md" onClick={handleRightClick}>No</Button>
                </ButtonGroup>
                <hr/>
                <div>
                    <Button variant="primary" size="lg" className='my-2 mb-4' onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default Home;