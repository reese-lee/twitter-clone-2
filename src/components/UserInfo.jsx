import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';

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
//   button: {
//       margin: theme.spacing(1),
//   }
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <h1>User Info!</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo ex nulla maxime natus, eaque ipsum odio culpa reprehenderit provident sunt! Iusto facere accusantium aliquam minima repudiandae asperiores corporis quasi magni?</p>
        
      </CardContent>
      <CardActions>
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
        {/* <Button size="small"></Button> */}
      </CardActions>
    </Card>
  );
}