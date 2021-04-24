import React, { useState } from 'react';
import SearchBar from '../cmps/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import LocationDetails from '../cmps/LocationDetails';

import { getLocations, getLocation, setLocation, getWeather, getForecast } from '../store/actions/rootActions';

export default function WeatherPage() {
    const location = useSelector(state => state.location);
    const dispatch = useDispatch();

    const onSearch = (searchStr, isFullName = false) => {
        isFullName ? dispatch(getLocation(searchStr)) : dispatch(getLocations(searchStr))
    }

    const onGetWeather = (loc) => {
        dispatch(setLocation(loc))
        dispatch(getWeather(loc.Key))
        dispatch(getForecast(loc.Key))
    }

    return (
        <div className="weather-page">
            <SearchBar onSearch={onSearch} onGetWeather={onGetWeather} />
            {/* <LocationList onLocationClick={onLocationClick} /> */}
            {/* <TestTest />  */}
            <div className="weather-details">
                <LocationDetails />
            </div>
        </div>
    )
}
