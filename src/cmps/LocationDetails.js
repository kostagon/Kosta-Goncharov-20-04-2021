import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Paper, Typography, Container, Button, ButtonGroup } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import { getWeather, getLocation, getForecast, updateFavorites } from '../store/actions/rootActions';
import Moment from 'react-moment';
import 'moment-timezone';


const useStyles = makeStyles({
    flex: {
        display: 'inline-flex',
        padding: '0'
    },
    grid: {
        marginTop: '20px',
        justifyContent: 'space-between'
    },
    paper: {
        textAlign: 'center',
        height: '200px',
        width: '200px',
        borderRadius: '5px',
        margin: '10px auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: '7px'
    },
    tempDisplay: {
        alignSelf: 'center',
        minWidth: '70px'
    },
    btn: {
        padding: '0',
        margin: '0',
        minWidth: '40px',
        maxHeight: '40px',
        alignSelf: 'center'
    },
    selfCenter: {
        textAlign: 'center',
    },
    temperatureContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px',
        marginBottom: '25px'
    },
    mainContainer: {
        textAlign: 'center'
    },
    favoriteContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '15px 30px'
    },
    favoriteIcon: {
        color: 'red',
        fontSize: '1.8rem',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    notFavorite: {
        color: 'grey',
        fontSize: '1.8rem',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    thumbnail: {
        maxWidth: '75px',
        alignSelf: 'center'
    },
})

export default function LocationDetails() {
    const [isMetric, setIsMetric] = useState(true);
    const classes = useStyles();
    const weather = useSelector(state => state.currLocWeather);
    const location = useSelector(state => state.location);
    const locations = useSelector(state => state.favLocations);
    const forecast = useSelector(state => state.forecast);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLocation(location.LocalizedName))
        dispatch(getWeather(location.Key))
        dispatch(getForecast(location.Key))
    }, [])

    const isFavorite = locations.some(loc => loc.name === location.LocalizedName);

    const addFavorite = () => {
        const newFavorite = {
            Key: location.Key,
            name: location.LocalizedName,
            celsius: weather.Temperature.Metric.Value,
            iconNumber: weather.WeatherIcon
        }
        dispatch(updateFavorites(newFavorite))
    }
    return (
        <div className="location-details">
            {
                weather.Temperature &&
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={12} md={4} className={classes.temperatureContainer}>
                            <img className={classes.thumbnail} src={`https://developer.accuweather.com/sites/default/files/${weather.WeatherIcon < 10 ? ('0' + weather.WeatherIcon) : weather.WeatherIcon}-s.png`} />
                            {isMetric ?
                                <Typography className={classes.tempDisplay} variant="h5">{weather.Temperature.Metric.Value}℃</Typography>
                                :
                                <Typography className={classes.tempDisplay} variant="h5">{weather.Temperature.Imperial.Value}℉</Typography>
                            }
                            <ButtonGroup>
                                <Button className={classes.btn} onClick={() => setIsMetric(true)}>℃</Button>
                                <Button className={classes.btn} onClick={() => setIsMetric(false)}>℉</Button>
                            </ButtonGroup>


                        </Grid>
                        <Grid item xs={7} md={4} className={classes.mainContainer}>
                            <Typography variant="h4">{location.LocalizedName}</Typography>
                            <Typography variant="h5"><Moment format="ddd, HH:mm ">{weather.LocalObservationDateTime}</Moment></Typography>
                            <Typography>{weather.WeatherText}</Typography>
                        </Grid>
                        <Grid item xs={5} md={4} className={classes.favoriteContainer}>
                            <FavoriteIcon className={isFavorite ? classes.favoriteIcon : classes.notFavorite} onClick={addFavorite} />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        className={classes.grid}
                        direction="row"
                    >
                        {forecast && forecast.DailyForecasts.length ?
                            forecast.DailyForecasts.map((dailyCast, idx) => (
                                <Grid item xs={12} sm={6} md={4} lg={2} key={idx}>
                                    <Paper className={classes.paper}>
                                        <Container className={classes.flex}>
                                            <Typography variant="h5" className={classes.alignSelf}><Moment format="dddd">{dailyCast.Date}</Moment></Typography>
                                        </Container>
                                        <img className="thumbnail" src={`https://developer.accuweather.com/sites/default/files/${dailyCast.Day.Icon < 10 ? ('0' + dailyCast.Day.Icon) : dailyCast.Day.Icon}-s.png`} />
                                        <Typography>{dailyCast.Temperature.Minimum.Value}-{dailyCast.Temperature.Maximum.Value}℃</Typography>
                                    </Paper>
                                </Grid>
                            ))
                            : <Typography variant="h6" style={{ margin: '0 auto' }}>No favorites yet</Typography>

                        }
                    </Grid>
                </Container>
            }
        </div>
    )
}
