import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

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
  button: {
      boxShadow: '4px 4px 3px #aaaaaa',

  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
          <h4>Lorum Ipsum</h4>
      </CardContent>
      <CardActions>
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
      </CardActions>
    </Card>
  );
}