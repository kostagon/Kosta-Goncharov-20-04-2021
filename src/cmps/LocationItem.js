import React from 'react'

export default function LocationItem({ location, onLocationClick }) {
    const cityName = location.LocalizedName;
    const countryName = location.Country.LocalizedName;
    const cityKey = location.Key;

    const handleClick = () => {
        onLocationClick(location);
    }
    return (
        <div className="location-item" onClick={handleClick}>
            <p>{cityName}, {countryName}</p>
            <p>City key: {cityKey}</p>
            <br />
        </div>
    )
}
