import React from "react";
import { useParams } from 'react-router-dom';

const Result = () => {
    const { id } = useParams();
    const filteredData = JSON.parse(decodeURIComponent(id));

    return (
        <div>
            <h1>Result</h1>
            {filteredData.map((item, index) => {
                return (
                    <div key={index}>
                        <h3>{item.name}</h3>
                    </div>
                );
            })}
        </div>
    );
};

export default Result;
