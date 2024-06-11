import React from 'react';
import { useState } from 'react';
import ArrowImg from '../images/icon-arrow.svg';
import { useNavigate } from 'react-router-dom';

export default function Search() {

    const navigate = useNavigate();

    // Initializng inputValue state (User Input Value) with empty string.
    let [inputValue, setInputValue] = useState('');

    // This functions searches for the IP that the user has input.
    const handleSearchClick = () => {
        navigate(`/ip/${inputValue}`);
    }

    return (
        <>
        <div id='search' className='flex'>
            <label htmlFor='ipInput' className='flex'>
                <input 
                    type='text' 
                    id='ipInput' 
                    placeholder='Search for any IP address or domain' 
                    onChange={(e) => {
                        setInputValue(e.target.value)
                    }} 
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearchClick();
                        }
                    }}
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
