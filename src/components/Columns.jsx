import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from "./Card";
import UserInfo from './UserInfo';
import Feed from './Feed';
import Friends from './Friends';
import photo from './../assets/images/photo.jpeg';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const backgroundImage = {
    backgroundImage: `url(${photo})`,
    border: '1px solid red', 

}

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root} style = {backgroundImage}>
            <Grid container spacing={5}>
                <Grid item xs={4}><Card/></Grid>
                <Grid item xs={4}><Feed /></Grid>
                <Grid item xs={4}><Friends /></Grid>
                <Grid item xs={4}><UserInfo /></Grid>
            </Grid>
        </div>
    );
}