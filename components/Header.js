"use client";
import React, { useContext } from 'react'
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { ServiceContext } from '../context/servicecontext';
import './Header.css';

function Header() {
    const [InputValue, setInputValue] = useState('');
    const { state, dispatch } = useContext(ServiceContext);

    function searchVideos() {
        console.log('search', InputValue);
        dispatch({type: 'SEARCH_VIDEO', payload: InputValue});
    }

    return (
        <div className='flex border-b-2 bg-white justify-center'>
            {/* Query field */}
            <div className='flex items-center justify-center focus:outline-none focus:bg-gray-300'>
                <div className='flex items-center justify-center bg-gray-200 rounded-lg mr-2 my-2'>
                    <input type='text' placeholder='Search'
                        className='bg-gray-200 rounded-lg px-4 py-2 w-20 text-gray-800 md:w-[20em] focus:outline-none lg:w-[35em] search-field'
                        value={InputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                searchVideos()
                            }
                        }}
                    />
                    <BsSearch className='mr-3' onClick={searchVideos}/>
                </div>
            </div>
        </div>
    )
}

export default Header