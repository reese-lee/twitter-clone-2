import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FilterFeed from './FilterFeed';
import Ticket from './Ticket';


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

var masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Fox image not displaying on page, can only see duck?'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  }
];

export default function SimpleCard() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  // console.log(photo);
  return (

    <Card className={classes.card}>
      <CardContent>
        <div>
          {masterTicketList.map((ticket, index) =>
            <Ticket names={ticket.names}
              location={ticket.location}
              issue={ticket.issue}
              key={index}/>
          )}
        </div>
        <FilterFeed></FilterFeed>


      </CardContent>
    </Card>
  );
}
