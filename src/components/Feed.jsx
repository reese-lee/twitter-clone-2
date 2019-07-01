import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FilterFeed from './FilterFeed';



const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'flexbox',
    flexDirection: 'row',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
// console.log(photo);
  return (
      
    <Card className={classes.card}>
    
    <FilterFeed></FilterFeed>
      <CardContent>
          <h1>BlaBla</h1>
          <p>al;disjfl;kasdjfl;akdsjgl;kadjfgl;kadjffg</p>
      </CardContent>
    </Card>
  );
}