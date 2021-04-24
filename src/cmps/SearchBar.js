import React from 'react';
import { useSelector } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getWeather } from '../store/actions/rootActions';
const { useState } = React;

const useStyles = makeStyles({
    root: {
        // background: 'linear-gradient(45deg, #FE6888, #FF8E53)',
        background: '#39af63',
        border: 0,
        color: 'white',
        margin: '16px 0 8px 0',
        '&:hover': {
            background: '#39af63'
        }
    }
})

export default function SearchBar({ onSearch, onGetWeather }) {
    const [input, setInput] = useState('');
    const locations = useSelector(state => state.locations);
    const classes = useStyles();

    const handleChange = (ev) => {
        const { value } = ev.target;
        if (!value) return;
        setInput(value);
        onSearch(value)
    }

    const onCityClicked = (searchStr) => {
        if (!searchStr) return;
        onSubmit(null, searchStr);
    }

    const onSubmit = (ev, value) => {
        if (ev) ev.preventDefault();
        if (!value) return;
        const location = locations.filter(loc => value.toLowerCase() === loc.LocalizedName.toLowerCase());
        if (!location[0]) return;
        onGetWeather(location[0])
    }

    return (
        <div className="search-bar">
            <form onSubmit={onSubmit} className="flex">
                <Autocomplete
                    style={{ width: 300 }}
                    freeSolo
                    size="small"
                    options={locations.map((loc) => loc.LocalizedName)}
                    onChange={(ev, location) => onCityClicked(location)}
                    onInputChange={handleChange}
                    renderInput={(params) => (
                        <TextField {...params} label="Search" margin="normal" variant="outlined" />
                    )}
                />
                <Button
                    variant="contained"
                    className={classes.root}
                    onClick={(ev) => { onSubmit(ev, input) }}
                >
                    Submit</Button>
            </form>
        </div>
    )
}
