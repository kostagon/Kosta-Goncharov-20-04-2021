import React from 'react'
import { locations } from '../data/data';
import LocationItem from './LocationItem';

export default function LocationsList({ onLocationClick }) {
    return (
        <section className="location-list">
            {locations.map(location => {
                return <LocationItem location={location} key={location.Key} onLocationClick={onLocationClick} />
            })}
        </section>
    )
}
