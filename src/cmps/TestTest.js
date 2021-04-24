import React from 'react'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import 'fontsource-roboto';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6888, #FF8E53)',
        border: 0,
        color: 'white',
        padding: '10px 30px'
    }
})

const theme = createMuiTheme({
    typography: {
        h2: {
            fontSize: '20px',
            color: 'darkGrey'
        },
        h3: {
            fontSize: '18px',
            color: 'grey'
        }
    },
    palette: {
        primary: {
            main: green[400]
        },
        secondary: {
            main: red[400]
        }
    }
})

function ButtonStyled() {
    const classes = useStyles();
    return <Button className={classes.root}
        endIcon={<DeleteIcon />}
    >Custom</Button>
}

export default function TestTest() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm">
                <div>
                    <Typography variant="h2" component="div">
                        Wallak good you came
                    </Typography>
                    <Typography variant="h3">
                        Welcome
                    </Typography>
                    <ButtonGroup>
                        <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            startIcon={<SaveIcon />}
                        >
                            Save
                </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="medium"
                            endIcon={<DeleteIcon />}
                        >
                            Delete
                </Button>
                        <ButtonStyled />
                    </ButtonGroup>
                    <TextField
                        label="Search"
                        variant="outlined"
                        size="small"
                    />

                    <Grid container spacing={1} justify="center">
                        <Grid item>
                            <Paper style={{ height: 75, width: 50 }}>
                                <Typography>
                                    Hallo Yuss
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper style={{ height: 75, width: 50 }}></Paper>
                        </Grid>
                        <Grid item>
                            <Paper style={{ height: 75, width: 50 }}></Paper>
                        </Grid>

                    </Grid>
                </div>
            </Container>
        </ThemeProvider>
    )
}