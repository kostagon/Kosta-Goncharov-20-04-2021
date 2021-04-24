import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFavorites } from '../store/actions/rootActions';

import { Paper, Grid, Typography, Container } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    grid: {
        marginTop: '20px'
    },
    paper: {
        textAlign: 'center',
        height: '200px',
        width: '200px',
        borderRadius: '5px',
        margin: '10px auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    alignCenter: {
        textAlign: 'center'
    },
    flex: {
        display: 'flex'
    },
    flexGrow: {
        flexGrow: '1'
    },
    favoriteIcon: {
        color: 'red',
        alignSelf: 'center',
        '&:hover': {
            cursor: 'pointer'
        }
    }
})

export default function FavoritesPage() {
    const favLocations = useSelector(state => state.favLocations)
    const dispatch = useDispatch();
    const classes = useStyles();

    const removeFavorite = (loc) => {
        dispatch(updateFavorites(loc))
    }

    return (
        <div className="favorites-page">
            <Grid
                container
                className={classes.grid}
                direction="row"
            >
                {favLocations.length
                    ? favLocations.map(loc => (
                        <Grid item xs={12} sm={6} md={4} lg={2} key={loc.Key}>
                            <Paper className={classes.paper}>
                                <Container className={classes.flex}>
                                    <Typography variant="h5" className={classes.flexGrow}>{loc.name}</Typography>
                                    <FavoriteIcon className={classes.favoriteIcon} onClick={() => removeFavorite(loc)} />
                                </Container>
                                <img className="thumbnail" src={`https://developer.accuweather.com/sites/default/files/${loc.iconNumber < 10 ? ('0' + loc.iconNumber) : loc.iconNumber}-s.png`} />
                                <Typography>{loc.celsius}℃</Typography>

                            </Paper>
                        </Grid>
                    ))
                    : <Typography variant="h6" style={{ margin: '0 auto' }}>No favorites yet</Typography>

                }
            </Grid>
        </div>
    )
}