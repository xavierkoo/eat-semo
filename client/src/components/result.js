import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from 'react-router-dom';
import TinderCard from 'react-tinder-card';
import GoogleSearchButton from "./GoogleSearchButton";

const Result = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const filteredData = JSON.parse(decodeURIComponent(id));
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const colors = ['#E6B8B2', '#F2D7D5', '#C7CEEA', '#E8C1A0', '#E0DDCF', '#C8E0E0', '#F1CDB3', '#B5EAD7', '#F9E2D2', '#E0B1CB'];
    const [activeColorIndex, setActiveColorIndex] = useState(0);

    const imageCount = 22;
    const randomizePictures = () => {
      const randInt = Math.floor(Math.random() * imageCount) + 1;
      return `${randInt}.png`;
    };

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
        // Update the active card index and color index when the user swipes
        setActiveCardIndex(activeCardIndex + 1);
        setActiveColorIndex(activeCardIndex);
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
        // Update the active card index when the card leaves the screen
        setActiveCardIndex(activeCardIndex + 1);
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

    const itemStyle2 = {
        backgroundColor: colors[activeColorIndex + 1],
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        width: '50%',
        boxSizing: 'border-box',
    };

    const itemStyle3 = {
        backgroundColor: '#D3D3D3',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        width: '50%',
        boxSizing: 'border-box',
    };

    return (
        <div>
            <h1 className="mt-5">Eat Semo?!</h1>
            <div className="my-5">
                {activeCardIndex < filteredData.length ? (
                <div>
                    <TinderCard
                        key={activeCardIndex}
                        className="tinder-card"
                        onSwipe={onSwipe}
                        onCardLeftScreen={() => onCardLeftScreen(filteredData[activeCardIndex].name)}
                    >
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="card-content" style={itemStyle}>
                                <h3>{filteredData[activeCardIndex].name}</h3>
                                <div>
                                    <img src={require(`../assets/food/${randomizePictures()}`)} style={{width: "120px", height:"120px"}} />
                                </div>
                                <GoogleSearchButton searchQuery={filteredData[activeCardIndex].name} />
                            </div>
                        </div>
                    </TinderCard>
                    {activeCardIndex + 1 < filteredData.length && (
                        <TinderCard
                            key={activeCardIndex + 1}
                            className="tinder-card tinder-card-behind"
                        >
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="card-content" style={itemStyle2}>
                                    <h3>{filteredData[activeCardIndex + 1].name}</h3>
                                    <div>
                                        <img src={require(`../assets/food/${randomizePictures()}`)} style={{width: "120px", height:"120px"}} />
                                    </div>
                                </div>
                            </div>
                        </TinderCard>
                    )}
                    </div>
                ) : (
                    <TinderCard preventSwipe={true}>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="card-content" style={itemStyle3}>
                                <h3>No more places left 😔</h3>
                            </div>
                        </div>
                    </TinderCard>
                )}
            </div>
            <Button className="primary position-fixed bottom-0 end-0 mb-5 me-5" size="lg" onClick={() => navigate('/')}>Choose Again</Button>
        </div>
    );
};

export default Result;
