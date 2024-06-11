import React from 'react';
import { useState } from 'react';
import ArrowImg from '../images/icon-arrow.svg';

export default function Search(props) {

    // Initializng inputValue state (User Input Value) with empty string.
    let [inputValue, setInputValue] = useState('');

    // This function set the inputValue to the user's input.
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    // This functions searches for the IP that the user has input.
    const handleSearchClick = () => {
        props.searchIP(inputValue)
    }

    return (
        <>
        <div id='search' className='flex'>
            <label htmlFor='ipInput' className='flex'>
                <input 
                    type='text' 
                    id='ipInput' 
                    placeholder='Search for any IP address or domain' 
                    onChange={handleChange} 
                />
            </label>

            <button 
                type='button' 
                id='ipSearchBtn' 
                onClick={handleSearchClick}
            >
                <img src={ArrowImg} alt='Search for IP' />
            </button>
        </div>
        </>
    );
};
