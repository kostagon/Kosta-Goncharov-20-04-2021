import { ajax } from '../../services/httpService';
import { location, locations, currLocWeather, forecast } from '../../data/data';
import storageService from '../../services/storageService';

export const SET_LOCATION = 'SET_LOCATION';
export const SET_LOCATIONS = 'SET_LOCATIONS';

export const SET_WEATHER = 'SET_WEATHER';

export const SET_FORECAST = 'SET_FORECAST';

export const UPDATE_FAVORITES = 'UPDATE_FAVORITES';


export const getLocation = (searchStr = 'Tel Aviv') => async (dispatch, getState) => {
    const location = await ajax(`locations/v1/cities/search?q=${searchStr}&`);
    dispatch({
        type: SET_LOCATION,
        payload: location[0]
    })
}

export const setLocation = (location) => (dispatch, getState) => {
    dispatch({
        type: SET_LOCATION,
        payload: location
    })
}

export const getLocations = (searchStr) => async (dispatch, getState) => {
    const locations = await ajax(`locations/v1/cities/autocomplete?q=${searchStr}&`)
    return dispatch({
        type: SET_LOCATIONS,
        payload: locations
    })
}

export const getWeather = (locKey = '215854') => async (dispatch, getState) => {
    const currLocWeather = await ajax(`currentconditions/v1/${locKey}?`);
    dispatch({
        type: SET_WEATHER,
        payload: currLocWeather[0]
    })
}

export const getForecast = (locKey = '215854') => async (dispatch, getState) => {
    const forecast = await ajax(`forecasts/v1/daily/5day/${locKey}?`, '&metric=true');
    dispatch({
        type: SET_FORECAST,
        payload: forecast
    })
}

export const updateFavorites = (favorite) => (dispatch, getState) => {
    const favorites = getState().favLocations;
    let newFavorites = [...favorites];
    const isFavorite = favorites.some(fav => fav.Key === favorite.Key);

    if (!isFavorite) {
        newFavorites = [...favorites, favorite];
    } else {
        newFavorites = newFavorites.filter(fav => fav.Key !== favorite.Key);
    }
    storageService.set('favorites', newFavorites)
    dispatch({
        type: UPDATE_FAVORITES,
        payload: newFavorites
    })
}