import storageService from '../../services/storageService';
import { SET_LOCATION, SET_LOCATIONS, SET_WEATHER, UPDATE_FAVORITES, SET_FORECAST } from '../actions/rootActions';

const initState = {
    isLoading: false,
    location: {},
    locations: [],
    currLocWeather: {},
    forcast: [],
    favLocations: storageService.get('favorites') || []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_LOCATION:
            // expecting object
            return {
                ...state,
                location: action.payload
            }
        case SET_LOCATIONS:
            // expecting array
            return {
                ...state,
                locations: action.payload
            }
        case SET_WEATHER:
            return {
                ...state,
                currLocWeather: action.payload
            }
        case UPDATE_FAVORITES:
            return {
                ...state,
                favLocations: [...action.payload]
            }
        case SET_FORECAST:
            return {
                ...state,
                forecast: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;