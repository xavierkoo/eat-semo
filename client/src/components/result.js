import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import TinderCard from 'react-tinder-card'

const Result = () => {
    const { id } = useParams();
    const filteredData = JSON.parse(decodeURIComponent(id));
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const colors = ['#E6B8B2', '#F2D7D5', '#C7CEEA', '#E8C1A0', '#E0DDCF', '#C8E0E0', '#F1CDB3', '#B5EAD7', '#F9E2D2', '#E0B1CB'];
    const [activeColorIndex, setActiveColorIndex] = useState(Math.floor(Math.random() * colors.length));


    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
         // Update the active card index and color index when the user swipes
        setActiveCardIndex(activeCardIndex + 1);
        setActiveColorIndex(Math.floor(Math.random() * colors.length));
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
        // Update the active card index and color index when the card leaves the screen
        setActiveCardIndex(activeCardIndex + 1);
        setActiveColorIndex(Math.floor(Math.random() * colors.length));
    }

    const itemStyle = {
        backgroundColor: colors[activeColorIndex],
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        width: '50%',
        boxSizing: 'border-box',
    };

    return (
        <div>
            <h1>Result</h1>
            {activeCardIndex < filteredData.length ? (
                <TinderCard key={activeCardIndex} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen(filteredData[activeCardIndex].name)} preventSwipe={['right', 'left']}>
                    <div className="d-flex justify-content-center align-items-center">
                        <div style={itemStyle}>
                            <h3>{filteredData[activeCardIndex].name}</h3>
                        </div>
                    </div>
                </TinderCard>
            ) : (
                <p>No more items to show</p>
            )}
        </div>
    );
};

export default Result;
