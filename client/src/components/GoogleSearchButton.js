import React from "react";
import { Button } from "react-bootstrap";

const GoogleSearchButton = ({ searchQuery }) => {
    const handleSearch = () => {
        const formattedQuery = encodeURIComponent(searchQuery + " Singapore");
        const googleSearchUrl = `https://www.google.com/search?q=${formattedQuery}`;
        window.open(googleSearchUrl, "_blank");
    };

    return (
        <Button className="btn btn-success position-fixed bottom-0 start-0 mb-5 ms-5" size="lg" onClick={handleSearch}>
            Search Google
        </Button>
    );
};

export default GoogleSearchButton;
