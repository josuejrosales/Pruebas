import React from 'react';
import fetchData from './fetchData.js';

const resource = fetchData('https://jsonplaceholder.typicode.com/users');

const Names = () => {

    const namesList = resource.read();

    console.log("names list", namesList);

    return (
        <div>
            <h2>List of names</h2>
            <ul>
                {namesList.map(item => (
                    <li key={item.id}>
                        {item.name}
                    </li>))}
            </ul>
        </div>
    );
};

export default Names;