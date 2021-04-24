import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    active: {
        backgroundColor: '#39af63',
        "&:hover": {
            backgroundColor: '#39af63'
        }
    }
}))

export default function NavBar() {
    const classes = useStyles();

    return (
        <header className={classes.root}    >
            <AppBar position="static">
                <ToolBar>
                    <Typography variant="h6" className={classes.root}>
                        WezzerApp
                    </Typography>
                    <ButtonGroup variant="contained" color="primary">
                        <Button component={NavLink} to="/" exact activeClassName={classes.active}>
                            Weather
                        </Button>
                        <Button component={NavLink} to="/favorites" activeClassName={classes.active}>
                            Favorites
                        </Button>
                    </ButtonGroup>

                </ToolBar>
            </AppBar>


        </header>
    )
}
