"use client";

import React, { createContext, useReducer } from 'react';

const initialState = {
    serviceData: [],
    filtertedData: [],
    selectedVideo: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SERVICE_DATA':
            return { ...state, serviceData: [action.payload], filtertedData: [JSON.parse(JSON.stringify(action.payload))] };
        case 'SET_SELECTED_VIDEO':
            return { ...state, selectedVideo: [action.payload] };
        case 'SEARCH_VIDEO':
            if (action.payload && action.payload.trim() !== '') {
                state.filtertedData[0].items = state.serviceData[0].items.filter(element => element.snippet.title.toLowerCase().includes(action.payload.toLowerCase()));
                return { ...state };
            } else {
                console.log('empty');
                return { ...state, filtertedData: state.serviceData };
            }
        default:
            return state;
    }
}

export const ServiceContext = createContext({
    state: initialState,
    dispatch: () => null,
});

export const ServiceContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ServiceContext.Provider value={{ state, dispatch }}>
            {children}
        </ServiceContext.Provider>
    );
};