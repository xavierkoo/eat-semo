import React from "react";
import { Button } from "react-bootstrap";

const GoogleSearchButton = ({ searchQuery }) => {
    const handleSearch = () => {
        const formattedQuery = encodeURIComponent(searchQuery + " Singapore");
        const googleSearchUrl = `https://www.google.com/search?q=${formattedQuery}`;
        window.open(googleSearchUrl, "_blank");
    };

    return (
        <Button className="btn btn-success mt-4" onClick={handleSearch}>Search</Button>
    );
};

export default GoogleSearchButton;
