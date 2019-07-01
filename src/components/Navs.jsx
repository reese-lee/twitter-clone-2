import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  homeStyles: {
    border: '2px solid black',
  },
  messagesStyles: {
    border: '2px solid black',
  },
  notificatioonStyles: {
    border: '2px solid black',
  },
  // navBarLeft: {
  //   position: 'left',
  // },
  searchBar: {
    marginLeft: 'auto',
    marginRight: '0',
    // float: 'right'
  }
}));

export default function Navs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <div className={classes.navBarLeft}> */}
            <div className={classes.homeStyles}>
              <Typography variant="h6" className={classes.title}>
                Home
          </Typography>
            </div>
            <div className={classes.messagesStyles}>
              <Typography variant="h6" className={classes.title}>
                Messages
          </Typography>
            </div>
            <div className={classes.notificatioonStyles}>
              <Typography variant="h6" className={classes.title}>
                Notifications
          </Typography>
            </div>
          {/* </div> */}


          <Button color="inherit">Login</Button>
          {/* <Typography> */}
            <div className={classes.searchBar}>
            <form>
              <label>
                <input type="text" name="name" />
              </label>
              <Button color="inherit">Search</Button>
            </form>
            </div>
          {/* </Typography> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}